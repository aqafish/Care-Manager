// Knowledge Hub Content - Based on 2024-2026 Reforms
const knowledgeData = [
    {
        id: 1,
        title: "2026年6月施行：介護報酬臨時改定の全容",
        date: "2026/05/15",
        category: "報酬改定",
        description: "居宅介護支援事業所にも待望の処遇改善加算が新設。ケアマネの給与ベースアップに向けた算定要件を徹底解説します。",
        image: "assets/cm1.png",
        tag: "重要",
        fullText: `
            <div class="modal-header">
                <span class="card-tag">重要</span>
                <h1>2026年6月施行：介護報酬臨時改定の全容</h1>
                <p class="card-date">公開日: 2026/05/15</p>
            </div>
            <div class="modal-body">
                <p>2026年6月より、深刻な人材不足に対応するための介護報酬臨時改定が施行されます。今回の改定の最大の目玉は、これまで対象外とされてきた「居宅介護支援事業所」への処遇改善加算の新設です。</p>
                <h2>主な改定ポイント</h2>
                <ul>
                    <li><strong>処遇改善加算の新設:</strong> ケアマネジャーを含む全ての介護従事者の賃金ベースアップを目的とした加算が導入されます。</li>
                    <li><strong>加算率の構造:</strong> 基本報酬に対して一定の率を乗じる形で、他職種との賃金格差を形成します。</li>
                    <li><strong>事務負担の軽減:</strong> ICT活用を前提とした、よりシンプルな申請フローが検討されています。</li>
                </ul>
                <p>今回の改定により、ケアマネジャーの平均月収は数千円から一万円程度の引き上げが見込まれており、業界全体での人材確保が期待されています。</p>
            </div>
        `
    },
    {
        id: 2,
        title: "ケアマネ資格更新制度の廃止が決定",
        date: "2026/05/10",
        category: "資格・制度",
        description: "5年ごとの更新研修が廃止へ。生涯資格化に伴う「定期研修」の義務化とその受講スケジュールについて詳しくまとめました。",
        image: "assets/cm3.png",
        tag: "注目",
        fullText: `
            <div class="modal-header">
                <span class="card-tag">注目</span>
                <h1>ケアマネ資格更新制度の廃止が決定</h1>
                <p class="card-date">公開日: 2026/05/10</p>
            </div>
            <div class="modal-body">
                <p>厚生労働省の検討会にて、長年議論されてきた「介護支援専門員（ケアマネジャー）の更新制」の廃止が正式に決定しました。これにより、一度取得した資格に有効期限がなくなります。</p>
                <h2>変更の概要</h2>
                <ul>
                    <li><strong>更新研修の廃止:</strong> これまでの5年ごとの大規模な更新研修（法定研修）は廃止されます。</li>
                    <li><strong>定期研修の義務化:</strong> 更新制はなくなりますが、専門性の維持のため、より短時間で実務に直結した「定期研修」の受講が義務付けられます。</li>
                    <li><strong>資格の生涯有効化:</strong> 資格失効のリスクがなくなり、一度現場を離れた方の復職が容易になります。</li>
                </ul>
                <p>施行は2026年度中を予定しており、現時点で更新期限が近い方の取り扱いについては、各自治体から詳細な通知が出る見通しです。</p>
            </div>
        `
    },
    {
        id: 3,
        title: "ICT活用によるモニタリングの効率化ガイド",
        date: "2026/04/28",
        category: "業務効率化",
        description: "テレビ電話等を活用したモニタリングの要件緩和をどう活かすか。現場での導入事例と注意点を紹介します。",
        image: "assets/cm2.png",
        tag: "スキルアップ",
        fullText: `
            <div class="modal-header">
                <span class="card-tag">スキルアップ</span>
                <h1>ICT活用によるモニタリングの効率化</h1>
                <p class="card-date">公開日: 2026/04/28</p>
            </div>
            <div class="modal-body">
                <p>2024年度の改定により、一定の条件下でテレビ電話等を活用したモニタリングが可能となりました。これにより、移動時間の削減と頻繁なコミュニケーションの両立が可能になります。</p>
                <h2>活用事例</h2>
                <ul>
                    <li><strong>状態が安定している利用者様:</strong> 2回に1回をビデオ通話に切り替えることで、効率的な訪問計画を実現。</li>
                    <li><strong>遠方の家族との連携:</strong> モニタリング時にビデオ通話で家族も同席し、三者間での情報共有を強化。</li>
                </ul>
                <p>ただし、情報セキュリティの確保や、利用者様本人の同意が必須条件となります。適切なツール選びと運用のポイントを解説します。</p>
            </div>
        `
    },
    {
        id: 4,
        title: "物価高騰に伴う食費基準額の引き上げ",
        date: "2026/04/15",
        category: "制度変更",
        description: "施設系サービスの食費基準額が改定されます。利用者様への説明資料や契約変更のポイントを整理しました。",
        image: "assets/hero.png",
        tag: "通知",
        fullText: `
            <div class="modal-header">
                <span class="card-tag">通知</span>
                <h1>物価高騰に伴う食費基準額の引き上げ</h1>
                <p class="card-date">公開日: 2026/04/15</p>
            </div>
            <div class="modal-body">
                <p>近年の物価高騰を受け、介護保険施設等における食費の「基準費用額」が、2026年8月1日から引き上げられます。</p>
                <h2>改定内容</h2>
                <p>一日あたりの基準費用額が現行から数十円程度アップします。これに伴い、補足給付（負担限度額認定）を受けている方の自己負担額も変更になる場合があります。</p>
                <ul>
                    <li><strong>利用者様への説明:</strong> 制度の趣旨（物価高騰への対応）を丁寧に説明するためのチラシ案を用意しました。</li>
                    <li><strong>契約変更の事務:</strong> 重要事項説明書の差し替えや、同意書の取り付け時期についてのスケジュールを確認しましょう。</li>
                </ul>
            </div>
        `
    }
];

// Variables to be initialized on DOMContentLoaded
let newsGrid, searchInput, searchButton, modal, modalBody, closeButton, notificationList;

// Function to render news cards
function renderNews(data) {
    if (!newsGrid) return;
    newsGrid.innerHTML = '';
    
    if (data.length === 0) {
        newsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; font-size: 1.2rem; color: var(--sb-text-muted);">該当するナレッジが見つかりませんでした。</p>';
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card animate-fade-in';
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${item.image}')"></div>
            <div class="card-body">
                <span class="card-date">${item.date}</span>
                <span class="card-tag">${item.tag}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="card-footer">
                    <button class="btn-outline read-more" data-id="${item.id}">全文を読む</button>
                </div>
            </div>
        `;
        newsGrid.appendChild(card);
    });

    // Add event listeners to buttons
    document.querySelectorAll('.read-more').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const article = knowledgeData.find(a => a.id == id);
            if (article) {
                openModal(article.fullText);
            }
        });
    });
}

// Function to fetch latest MHLW Notifications
async function fetchLatestNotifications() {
    if (!notificationList) return;
    
    notificationList.innerHTML = '<li>読み込み中...</li>';
    
    try {
        const rssUrl = encodeURIComponent('https://www.mhlw.go.jp/stf/news.xml');
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`);
        const data = await response.json();
        
        if (data.status === 'ok' && data.items.length > 0) {
            notificationList.innerHTML = '';
            data.items.slice(0, 5).forEach(item => {
                const li = document.createElement('li');
                const date = item.pubDate.split(' ')[0].replace(/-/g, '/');
                li.innerHTML = `<a href="${item.link}" target="_blank">【${date}】${item.title}</a>`;
                notificationList.appendChild(li);
            });
        } else {
            throw new Error('No data');
        }
    } catch (error) {
        console.error('RSS Fetch Error:', error);
        notificationList.innerHTML = `
            <li><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/kaigo_koureisha/index_00010.html" target="_blank">【最新】介護報酬改定・告示情報</a></li>
            <li><a href="https://www.mhlw.go.jp/stf/topics/bukyoku/soumu/houritu/221.html" target="_blank">ケアマネ資格制度の改正について</a></li>
            <li><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/anzen/anzeneisei04/index.html" target="_blank">職場における熱中症予防対策</a></li>
            <li><a href="https://www.mhlw.go.jp/topics/kaigo/osirase/jigyou/190401/index.html" target="_blank">生産性向上ガイドライン（居宅）</a></li>
        `;
    }
}

// Modal Functions
function openModal(content) {
    if (!modalBody || !modal) return;
    modalBody.innerHTML = content;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    if (!modal) return;
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Search & Filter Logic
function handleSearch(query = null) {
    const q = query !== null ? query.toLowerCase() : searchInput.value.toLowerCase();
    const filtered = knowledgeData.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q)
    );
    renderNews(filtered);
    
    if (q !== "") {
        const target = document.getElementById('news');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initial Render and Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize elements
    newsGrid = document.getElementById('newsGrid');
    searchInput = document.getElementById('searchInput');
    searchButton = document.getElementById('searchButton');
    modal = document.getElementById('articleModal');
    modalBody = document.getElementById('modalBody');
    closeButton = document.querySelector('.close-button');
    notificationList = document.querySelector('.news-list');
    const logoLink = document.getElementById('logoLink');
    const navNews = document.getElementById('navNews');
    const navSkills = document.getElementById('navSkills');
    const refreshNewsBtn = document.getElementById('refreshNews');

    // Initial renders
    renderNews(knowledgeData);
    fetchLatestNotifications();

    // Event Listeners
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (searchInput) searchInput.value = "";
            renderNews(knowledgeData);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (navNews) {
        navNews.addEventListener('click', (e) => {
            e.preventDefault();
            if (searchInput) searchInput.value = "";
            handleSearch("");
        });
    }

    if (navSkills) {
        navSkills.addEventListener('click', (e) => {
            e.preventDefault();
            handleSearch("スキルアップ");
        });
    }

    if (refreshNewsBtn) {
        refreshNewsBtn.addEventListener('click', () => {
            fetchLatestNotifications();
        });
    }

    if (searchButton) {
        searchButton.addEventListener('click', () => handleSearch());
    }
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch();
        });
    }
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });
});
