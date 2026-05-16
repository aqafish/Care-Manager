document.getElementById('carePlanForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get button elements
    const btn = document.querySelector('.generate-btn');
    const btnText = document.querySelector('.btn-text');
    const loader = document.getElementById('btnLoader');
    const outputSection = document.getElementById('outputSection');
    const planContent = document.getElementById('planContent');

    // Show loading state
    btn.disabled = true;
    btnText.textContent = 'AIが分析中...';
    loader.style.display = 'inline-block';
    
    // Smooth scroll to loading
    btn.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Collect data
    const formData = {
        userName: document.getElementById('userName').value,
        age: document.getElementById('age').value,
        careLevel: document.getElementById('careLevel').value,
        medicalHistory: document.getElementById('medicalHistory').value,
        userWish: document.getElementById('userWish').value,
        familyWish: document.getElementById('familyWish').value,
        currentIssues: document.getElementById('currentIssues').value
    // localStorageからAPIキーを取得、なければ入力させる
    let apiKey = localStorage.getItem('openai_api_key');
    if (!apiKey) {
        apiKey = prompt('OpenAIのAPIキーを入力してください（一度入力するとブラウザに保存されます）:');
        if (!apiKey) {
            alert('APIキーが入力されなかったため、生成をキャンセルしました。');
            btn.disabled = false;
            btnText.textContent = 'AIケアプランを生成する';
            loader.style.display = 'none';
            return;
        }
        localStorage.setItem('openai_api_key', apiKey);
    }

    const promptText = `
    以下の利用者情報をもとに、介護計画書（ケアプラン）を作成してください。
    出力は必ずJSON形式のみとし、以下の4つのキーを持つオブジェクトにしてください。
    "longTermGoal": 長期目標（1年程度）
    "shortTermGoal": 短期目標（3ヶ月程度）
    "servicePlan": 必要なサービス内容と支援方針
    "risks": 留意事項・リスク管理
    
    [利用者情報]
    名前: ${formData.userName || '未入力'}
    年齢: ${formData.age || '未入力'}
    要介護度: ${formData.careLevel || '未入力'}
    疾患・既往歴: ${formData.medicalHistory || '未入力'}
    本人の希望: ${formData.userWish || '未入力'}
    家族の希望: ${formData.familyWish || '未入力'}
    現在の課題: ${formData.currentIssues || '未入力'}
    `;

    // OpenAI APIを直接呼び出す
    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-4o',
            messages: [{ role: 'user', content: promptText }],
            temperature: 0.7
        })
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 401) {
                localStorage.removeItem('openai_api_key');
                throw new Error('APIキーが無効です。再度生成ボタンを押して正しいキーを入力してください。');
            }
            return response.json().then(err => { throw new Error(err.error?.message || 'エラーが発生しました') });
        }
        return response.json();
    })
    .then(data => {
        let content = data.choices[0].message.content.trim();
        // Markdownタグが含まれている場合は除去
        if (content.startsWith('```json')) {
            content = content.substring(7);
        }
        if (content.endsWith('```')) {
            content = content.substring(0, content.length - 3);
        }
        const generatedPlan = JSON.parse(content.trim());

        // Render content
        planContent.innerHTML = `
            <div class="plan-section">
                <h3>👤 利用者基本情報</h3>
                <p>${formData.userName}様 (${formData.age}歳) - ${formData.careLevel}</p>
            </div>
            <div class="plan-section">
                <h3>🎯 長期目標 (1年)</h3>
                <p>${generatedPlan.longTermGoal}</p>
            </div>
            <div class="plan-section">
                <h3>📍 短期目標 (3ヶ月)</h3>
                <p>${generatedPlan.shortTermGoal}</p>
            </div>
            <div class="plan-section">
                <h3>🛠 必要なサービス内容と支援方針</h3>
                <p>${generatedPlan.servicePlan}</p>
            </div>
            <div class="plan-section">
                <h3>⚠️ 留意事項・リスク管理</h3>
                <p>${generatedPlan.risks}</p>
            </div>
        `;

        // Reset button state
        btn.disabled = false;
        btnText.textContent = 'AIケアプランを再生成する';
        loader.style.display = 'none';

        // Show output with animation
        outputSection.style.display = 'block';
        outputSection.style.animation = 'fadeInUp 0.5s ease forwards';
        
        // Scroll to output
        outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })
    .catch(error => {
        console.error('API Error:', error);
        alert('ケアプラン生成中にエラーが発生しました: ' + error.message);
        
        // Reset button state
        btn.disabled = false;
        btnText.textContent = 'AIケアプランを生成する';
        loader.style.display = 'none';
    });
});

function copyToClipboard() {
    const planText = document.getElementById('planContent').innerText;
    navigator.clipboard.writeText(planText).then(() => {
        alert('ケアプランをクリップボードにコピーしました。');
    }).catch(err => {
        console.error('コピーに失敗しました', err);
        alert('コピーに失敗しました。');
    });
}

// Add animation keyframes via JS
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(style);
