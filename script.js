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
                <h2>変更 of the 概要</h2>
                <ul>
                    <li><strong>更新研修の廃止:</strong> これまでの5年ごとの大規模な更新研修（法定研修）は廃止されます。</li>
                    <li><strong>定期研修の義務化:</strong> 更新制はなくなりますが、専門性の維持のため、より短時間で実務に直結した「定期研修」の受講が義務付けられます。</li>
                    <li><strong>資格の生涯有効化:</strong> 資格失効のリスクがなくなり、一度現場を離れた方の復職が容易になります。</li>
                </ul>
                <p>施行は2026年度中を予定しており、現時点で更新期限が近い方の取り扱いについては、各自治体から詳細な通知が出る見通しです。</p>
            </div>
        `
    }
];

// Variables to be initialized on DOMContentLoaded
let newsGrid, searchInput, searchButton, modal, modalBody, closeButton, notificationList, partnerNewsList;

const partnerNewsData = {
    'cm-online': [
        { title: "捜査資料に「デブ、ブタ」 茨城県警、被告の行動観察", url: "https://www.caremanagement.jp/news/detail/31437", date: "2026/05/15" },
        { title: "妻と死別、認知症倍増 高齢男性", url: "https://www.caremanagement.jp/news/detail/31436", date: "2026/05/12" },
        { title: "コロナで臨場、救急隊の扉破壊に賠償命令", url: "https://www.caremanagement.jp/news/detail/31435", date: "2026/05/10" }
    ],
    'cm-dot-com': [
        { title: "多職種連携での「モラハラ」について：ハラスメント対策の新視点", url: "https://i.care-mane.com/times/133837", date: "2026/05/16" },
        { title: "厚労省通知vol.1503：身寄りのない高齢者支援等の調査報告", url: "https://i.care-mane.com/times/133736", date: "2026/05/14" },
        { title: "介護保険の利用者負担引き上げは見送りか？医療費増が優先と予測", url: "https://i.care-mane.com/times/133652", date: "2026/05/11" }
    ]
};

// Keywords to filter Care Manager specific news
const cmKeywords = ["ケアマネ", "介護支援専門員", "居宅介護支援", "ケアプラン", "介護報酬", "処遇改善", "資格更新", "法定研修"];

// Function to fetch real-time news from WAM NET and merge with knowledgeData
async function fetchRealTimeFeaturedTopics() {
    if (!newsGrid) return;
    
    // Show loading state in the grid
    newsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px;"><div class="loading-spinner"></div><p>ケアマネ専門情報を同期中...</p></div>';

    try {
        const wamRss = encodeURIComponent('https://www.wam.go.jp/newsPublic/news_new_rss');
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${wamRss}`);
        const data = await response.json();
        
        if (data.status === 'ok' && data.items.length > 0) {
            // Filter items by CM keywords
            const filteredItems = data.items.filter(item => {
                const text = (item.title + item.description).toLowerCase();
                return cmKeywords.some(kw => text.includes(kw));
            });

            const realTimeItems = filteredItems.slice(0, 6).map((item, index) => {
                const date = item.pubDate.split(' ')[0].replace(/-/g, '/');
                return {
                    id: `rt-${index}`,
                    title: item.title,
                    date: date,
                    category: "ケアマネ実務",
                    description: item.description || "ケアマネジャー向けの最新ニュースです。",
                    image: "assets/cm1.png", // Fallback image
                    tag: "リアルタイム",
                    fullText: `
                        <div class="modal-header">
                            <span class="card-tag">リアルタイム</span>
                            <h1>${item.title}</h1>
                            <p class="card-date">公開日: ${date}</p>
                        </div>
                        <div class="modal-body">
                            <p>${item.description || ""}</p>
                            <div style="margin-top: 30px; padding: 20px; background: var(--sb-light-green); border-radius: var(--radius-md); text-align: center;">
                                <p>詳細な情報は公式サイトでご確認いただけます。</p>
                                <a href="${item.link}" target="_blank" class="btn-outline" style="display: inline-block; background: var(--sb-green); color: white; margin-top: 10px;">外部サイトで全文を読む</a>
                            </div>
                        </div>
                    `
                };
            });

            // Combine static knowledge with real-time news
            const combinedData = [...realTimeItems, ...knowledgeData];
            renderNews(combinedData);
        } else {
            renderNews(knowledgeData);
        }
    } catch (error) {
        console.error('Real-time Fetch Error:', error);
        renderNews(knowledgeData);
    }
}

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
            // Check both real-time items and static knowledge
            let article;
            if (id.toString().startsWith('rt-')) {
                // This is a bit inefficient but works for demonstration
                // In a real app, we'd keep the combined list in a variable
                const allItems = [...document.querySelectorAll('.read-more')].map(b => b.dataset.id);
                // We'll just fetch it again or store it globally.
                // For now, let's assume we can find it in the data passed to renderNews
            }
            
            // Re-find the article from the data
            // To make this work properly, we should store currentData globally
            const articleToOpen = currentNewsData.find(a => a.id == id);
            if (articleToOpen) {
                openModal(articleToOpen.fullText);
            }
        });
    });
}

let currentNewsData = []; // Global to store current news
function renderNews(data) {
    currentNewsData = data;
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
            const article = currentNewsData.find(a => a.id == id);
            if (article) {
                openModal(article.fullText);
            }
        });
    });
}

// Function to fetch latest MHLW Notifications with PINPOINT PDF stable links
async function fetchLatestNotifications() {
    if (!notificationList) return;
    
    // Most SOLID and PINPOINT official sources
    const defaultLinks = [
        { title: "【最新】介護報酬改定 Q&A・留意事項 (Vol.1502)", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/kaigo_koureisha/index_00010.html" },
        { title: "【決定】ケアマネ資格更新制度の廃止：法案概要資料 (PDF)", url: "https://www.mhlw.go.jp/content/001685800.pdf" },
        { title: "【通知】熱中症予防対策の義務化と発生時の手順 (特設)", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/anzen/anzeneisei06/index.html" },
        { title: "【活用】生産性向上ガイドライン・課題把握ツール (Portal)", url: "https://介護生産性向上.mhlw.go.jp/" }
    ];

    notificationList.innerHTML = '<li>読み込み中...</li>';
    
    try {
        const rssUrl = encodeURIComponent('https://www.mhlw.go.jp/stf/news.xml');
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`);
        const data = await response.json();
        
        if (data.status === 'ok' && data.items.length > 0) {
            notificationList.innerHTML = '';
            
            defaultLinks.forEach(link => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${link.url}" target="_blank" style="font-weight:bold; color:var(--sb-green);">📍 ${link.title}</a>`;
                notificationList.appendChild(li);
            });

            data.items.forEach(item => {
                const text = (item.title + item.description).toLowerCase();
                if (cmKeywords.some(kw => text.includes(kw))) {
                    const li = document.createElement('li');
                    const date = item.pubDate.split(' ')[0].replace(/-/g, '/');
                    li.innerHTML = `<a href="${item.link}" target="_blank">【${date}】${item.title}</a>`;
                    notificationList.appendChild(li);
                }
            });
            
            // If no filtered items, show a message or just default links
            if (notificationList.children.length === defaultLinks.length) {
                const li = document.createElement('li');
                li.style.fontSize = "0.8rem";
                li.style.color = "var(--sb-text-muted)";
                li.textContent = "※現在、新しいケアマネ専門通知はありません。";
                notificationList.appendChild(li);
            }
        } else {
            throw new Error('No data');
        }
    } catch (error) {
        console.error('RSS Fetch Error:', error);
        notificationList.innerHTML = '';
        defaultLinks.forEach(link => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${link.url}" target="_blank">📍 ${link.title}</a>`;
            notificationList.appendChild(li);
        });
    }
}

// Function to render partner news
function renderPartnerNews(sourceId) {
    if (!partnerNewsList) return;
    const items = partnerNewsData[sourceId] || [];
    partnerNewsList.innerHTML = '';
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.url}" target="_blank">【${item.date}】${item.title}</a>`;
        partnerNewsList.appendChild(li);
    });
}

// Function to simulate fetching partner news
async function fetchPartnerNews() {
    if (!partnerNewsList) return;
    
    // In a real scenario, this would call a server-side scraper or a CORS-proxy
    // Since direct scraping is blocked by CORS, we use our updated data store
    renderPartnerNews('cm-online');
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
    let rawQ = query !== null ? query : (searchInput ? searchInput.value : "");
    const q = rawQ.replace(/#/g, '').trim().toLowerCase();
    
    const filtered = knowledgeData.filter(item => {
        const textToSearch = (item.title + item.description + item.category + item.tag).toLowerCase();
        return textToSearch.includes(q);
    });
    
    renderNews(filtered);
    
    if (q !== "") {
        const target = document.getElementById('news');
        if (target) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = target.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
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
    partnerNewsList = document.getElementById('partnerNewsList');
    const partnerTabs = document.querySelectorAll('.tab-btn');
    const logoLink = document.getElementById('logoLink');
    const navNews = document.getElementById('navNews');
    const navSkills = document.getElementById('navSkills');
    const refreshNewsBtn = document.getElementById('refreshNews');

    // Initial renders
    fetchRealTimeFeaturedTopics();
    fetchLatestNotifications();
    fetchPartnerNews();

    // Partner Tabs logic
    partnerTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            partnerTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderPartnerNews(tab.dataset.target);
        });
    });

    // Event Delegation for Sidebar Tags
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-tag')) {
            const tagName = e.target.textContent;
            if (searchInput) searchInput.value = tagName;
            handleSearch(tagName);
        }
    });

    // Logo Click Reset
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (searchInput) searchInput.value = "";
            fetchRealTimeFeaturedTopics();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Nav Links
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

    // Refresh News
    if (refreshNewsBtn) {
        refreshNewsBtn.addEventListener('click', () => {
            fetchLatestNotifications();
            fetchRealTimeFeaturedTopics();
        });
    }

    // Search Box
    if (searchButton) {
        searchButton.addEventListener('click', () => handleSearch());
    }
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch();
        });
    }
    
    // Modal Close
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });
});
