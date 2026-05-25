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
    }
];

// Law & Notification Data Mock
const lawData = [
    {
        id: "law-1",
        title: "介護保険法 第7条（要介護状態の定義）",
        category: "介護保険法",
        tag: "法令",
        excerpt: "この法律において「要介護状態」とは、身体上又は精神上の障害があるために、入浴、排せつ、食事等の日常生活における基本的な動作の全部又は一部について、厚生労働省令で定める期間にわたり継続して、常時介護を要すると見込まれる状態であって、その状態が軽減し、又は悪化するおそれがないと認められるものをいう。",
        fullText: "この法律において「要介護状態」とは、身体上又は精神上の障害があるために、入浴、排せつ、食事等の日常生活における基本的な動作の全部又は一部について、厚生労働省令で定める期間にわたり継続して、常時介護を要すると見込まれる状態であって、その状態が軽減し、又は悪化するおそれがないと認められるものをいう。\n\n※ケアマネ実務におけるポイント：要介護認定の根本となる定義です。"
    },
    {
        id: "law-2",
        title: "居宅介護支援 運営基準 第13条（具体的な取扱方針）",
        category: "運営基準",
        tag: "基準",
        excerpt: "介護支援専門員は、居宅サービス計画の作成に当たっては、利用者の日常生活全般を支援する観点から、介護給付等対象サービス以外の保健医療サービス又は福祉サービス、当該地域の住民による自発的な活動によるサービス等の利用も含めて居宅サービス計画上に位置付けるよう努めなければならない。",
        fullText: "第十三条の取扱方針\n介護支援専門員は、居宅サービス計画の作成に当たっては、利用者の日常生活全般を支援する観点から、介護給付等対象サービス以外の保健医療サービス又は福祉サービス、当該地域の住民による自発的な活動によるサービス等の利用も含めて居宅サービス計画上に位置付けるよう努めなければならない。\n\n※いわゆる「インフォーマルサービスの活用」についての根拠規定です。"
    },
    {
        id: "law-3",
        title: "老企第22号通知（モニタリングについて）",
        category: "厚労省通知",
        tag: "通知",
        excerpt: "少なくとも一月に一回、利用者の居宅を訪問し、利用者に面接すること。また、その結果については、少なくとも一月に一回、記録すること。これらを欠いた場合は、運営基準減算の対象となる。",
        fullText: "居宅介護支援におけるモニタリングに関する解釈通知（老企第22号）\n\n少なくとも一月に一回、利用者の居宅を訪問し、利用者に面接すること。また、その結果については、少なくとも一月に一回、記録すること。これらを欠いた場合は、運営基準減算の対象となる。\n※特例としてテレビ電話等の活用が認められる要件については別途最新の通知を参照すること。"
    }
];

// Variables to be initialized on DOMContentLoaded
let newsGrid, searchInput, searchButton, modal, modalBody, closeButton, notificationList, partnerNewsList;
let lawGrid, lawContent, mainContent, currentSearchMode = 'knowledge';


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
    ],
    'joint-kaigo': [
        { title: "「ケアマネジャーは国家資格」　厚労省・老健局長が国会で改めて明言", url: "https://www.joint-kaigo.com/articles/46211/", date: "2026/05/23" },
        { title: "介護保険法などの改正案、衆院厚労委で可決　27項目の付帯決議も", url: "https://www.joint-kaigo.com/articles/46203/", date: "2026/05/22" },
        { title: "ケアマネ協会が財務省に反論　新類型「登録施設介護支援」の報酬、現行評価の維持を主張", url: "https://www.joint-kaigo.com/articles/46179/", date: "2026/05/22" },
        { title: "介護保険法の改正案は「社会保険の原則破壊」　国会で異論", url: "https://www.joint-kaigo.com/articles/46153/", date: "2026/05/21" },
        { title: "2040年問題「全国一律ではない」　野口介護保険部会長、地域ごとのサービス基盤整備を促す", url: "https://www.joint-kaigo.com/articles/46131/", date: "2026/05/20" }
    ]
};

// Keywords to filter Care Manager specific news
const cmKeywords = ["ケアマネ", "介護支援専門員", "居宅介護支援", "ケアプラン", "介護報酬", "処遇改善", "資格更新", "法定研修"];

let allNewsData = [...knowledgeData]; // 全てのナレッジデータを保持するグローバル変数

// Function to fetch real-time news from multiple sources and merge with knowledgeData
async function fetchRealTimeFeaturedTopics() {
    if (!newsGrid) return;
    
    // Show loading state in the grid
    newsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px;"><div class="loading-spinner"></div><p>複数ソースからケアマネ専門情報を同期中...</p></div>';

    try {
        const timestamp = Date.now();
        const wamRss = encodeURIComponent(`https://www.wam.go.jp/newsPublic/news_new_rss?t=${timestamp}`);
        const jointRss = encodeURIComponent(`https://www.joint-kaigo.com/feed/?t=${timestamp}`);
        const googleRss = encodeURIComponent(`https://news.google.com/rss/search?q=${encodeURIComponent('介護報酬改定 OR ケアプラン OR 居宅介護支援')}&hl=ja&gl=JP&ceid=JP:ja&t=${timestamp}`);

        const fetchRss = async (url) => {
            try {
                const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${url}`);
                const data = await res.json();
                return data.status === 'ok' ? data.items : [];
            } catch (e) {
                return [];
            }
        };

        const [wamItems, jointItems, googleItems] = await Promise.all([
            fetchRss(wamRss),
            fetchRss(jointRss),
            fetchRss(googleRss)
        ]);

        let combinedItems = [];
        
        // Process WAM
        const filteredWam = wamItems.filter(item => cmKeywords.some(kw => (item.title + (item.description||'')).includes(kw))).slice(0, 3).map(item => ({...item, sourceName: "WAM NET"}));
        combinedItems.push(...filteredWam);

        // Process Joint
        const filteredJoint = jointItems.filter(item => cmKeywords.some(kw => (item.title + (item.description||'')).includes(kw))).slice(0, 3).map(item => ({...item, sourceName: "介護ニュースJoint"}));
        combinedItems.push(...filteredJoint);

        // Process Google
        const filteredGoogle = googleItems.slice(0, 3).map(item => ({...item, sourceName: "Google News", description: item.title + "に関する最新ニュースです。"}));
        combinedItems.push(...filteredGoogle);
        
        if (combinedItems.length > 0) {
            // Deduplicate by title
            const uniqueItems = [];
            const titles = new Set();
            for (const item of combinedItems) {
                if (!titles.has(item.title)) {
                    titles.add(item.title);
                    uniqueItems.push(item);
                }
            }

            // Shuffle or sort by date? Let's just use the mixed order but unique.
            const realTimeItems = uniqueItems.slice(0, 9).map((item, index) => {
                const rawDate = item.pubDate || item.published || new Date().toISOString();
                const date = rawDate.split(' ')[0].replace(/-/g, '/').substring(0, 10);
                const descText = (item.description || "ケアマネジャー向けの最新ニュースです。").replace(/<[^>]+>/g, '').trim();
                
                return {
                    id: `rt-${index}`,
                    title: item.title,
                    date: date,
                    category: item.sourceName || "ケアマネ実務",
                    description: descText.substring(0, 60) + (descText.length > 60 ? '...' : ''),
                    image: index % 2 === 0 ? "assets/cm1.png" : "assets/cm3.png",
                    tag: "リアルタイム",
                    fullText: `
                        <div class="modal-header">
                            <span class="card-tag">リアルタイム (${item.sourceName})</span>
                            <h1>${item.title}</h1>
                            <p class="card-date">公開日: ${date}</p>
                        </div>
                        <div class="modal-body">
                            <p>${descText}</p>
                            <div style="margin-top: 30px; padding: 20px; background: var(--sb-light-green); border-radius: var(--radius-md); text-align: center;">
                                <p>詳細な情報は公式サイト（${item.sourceName}）でご確認いただけます。</p>
                                <a href="${item.link}" target="_blank" class="btn-outline" style="display: inline-block; background: var(--sb-green); color: white; margin-top: 10px;">外部サイトで全文を読む</a>
                            </div>
                        </div>
                    `
                };
            });

            // Combine static knowledge with real-time news
            allNewsData = [...realTimeItems, ...knowledgeData];
            renderNews(allNewsData);
        } else {
            allNewsData = [...knowledgeData];
            renderNews(allNewsData);
        }
    } catch (error) {
        console.error('Real-time Fetch Error:', error);
        allNewsData = [...knowledgeData];
        renderNews(allNewsData);
    }
}

let currentNewsData = []; // Global to store current news
// Function to render news cards
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
        const rssUrl = encodeURIComponent(`https://www.mhlw.go.jp/stf/news.xml?t=${Date.now()}`);
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

// Function to update the last updated timestamp for partner news
function updatePartnerNewsTimestamp() {
    const el = document.getElementById('partnerNewsLastUpdated');
    if (!el) return;
    const now = new Date();
    const formatted = now.toLocaleString('ja-JP', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    el.textContent = `最終更新: ${formatted}`;
}

// Function to fetch partner news (industry real-time news)
async function fetchPartnerNews() {
    if (!partnerNewsList) return;
    
    partnerNewsList.innerHTML = '<li>読み込み中...</li>';

    try {
        const fetchNews = async (query) => {
            const url = `https://api.rss2json.com/v1/api.json?rss_url=https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=ja&gl=JP&ceid=JP:ja&t=${Date.now()}`;
            const res = await fetch(url);
            const data = await res.json();
            if (data.status === 'ok') {
                return data.items.slice(0, 5).map(item => {
                    const date = item.pubDate.split(' ')[0].replace(/-/g, '/');
                    return { title: item.title.split(' - ')[0], url: item.link, date: date };
                });
            }
            return [];
        };

        // 介護ニュースJointのRSSフィードを取得
        const fetchJointNews = async () => {
            const jointRss = encodeURIComponent(`https://www.joint-kaigo.com/feed/?t=${Date.now()}`);
            const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${jointRss}&count=8`);
            const data = await res.json();
            if (data.status === 'ok' && data.items.length > 0) {
                return data.items.slice(0, 8).map(item => {
                    const date = item.pubDate.split(' ')[0].replace(/-/g, '/');
                    return { title: item.title, url: item.link, date: date };
                });
            }
            return [];
        };

        const [cmNews, kaigoNews, jointNews] = await Promise.all([
            fetchNews('ケアマネージャー OR ケアマネ'),
            fetchNews('介護保険 OR 介護報酬'),
            fetchJointNews()
        ]);

        partnerNewsData['cm-online'] = cmNews.length > 0 ? cmNews : partnerNewsData['cm-online'];
        partnerNewsData['cm-dot-com'] = kaigoNews.length > 0 ? kaigoNews : partnerNewsData['cm-dot-com'];
        partnerNewsData['joint-kaigo'] = jointNews.length > 0 ? jointNews : partnerNewsData['joint-kaigo'];

        // Get currently active tab
        const activeTab = document.querySelector('.tab-btn.active');
        const target = activeTab ? activeTab.dataset.target : 'cm-online';
        renderPartnerNews(target);
        updatePartnerNewsTimestamp();

    } catch (error) {
        console.error('Partner News Fetch Error:', error);
        renderPartnerNews('cm-online');
        updatePartnerNewsTimestamp();
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
    let rawQ = query !== null ? query : (searchInput ? searchInput.value : "");
    const q = rawQ.replace(/#/g, '').trim().toLowerCase();
    
    if (currentSearchMode === 'knowledge') {
        const filtered = allNewsData.filter(item => {
            const textToSearch = (item.title + item.description + item.category + item.tag).toLowerCase();
            return textToSearch.includes(q);
        });
        renderNews(filtered);
    } else {
        const filtered = lawData.filter(item => {
            const textToSearch = (item.title + item.excerpt + item.category + item.tag).toLowerCase();
            return textToSearch.includes(q);
        });
        renderLawData(filtered);
    }
    
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

function renderLawData(data) {
    if (!lawGrid) return;
    lawGrid.innerHTML = '';
    
    if (data.length === 0) {
        lawGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--sb-text-muted);">該当する法令・通知が見つかりませんでした。</p>';
        return;
    }
    
    data.forEach(item => {
        const el = document.createElement('div');
        el.className = 'law-item animate-fade-in';
        el.innerHTML = `
            <span class="law-tag">${item.category}</span>
            <div class="law-title">${item.title}</div>
            <div class="law-excerpt">${item.excerpt}</div>
            <div class="law-footer">
                <button class="btn-outline law-read-more" data-id="${item.id}">全文を確認する</button>
            </div>
        `;
        lawGrid.appendChild(el);
    });
    
    document.querySelectorAll('.law-read-more').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const article = lawData.find(a => a.id === id);
            if (article) {
                const modalHtml = `
                    <div class="modal-header">
                        <span class="card-tag">${article.category}</span>
                        <h1>${article.title}</h1>
                    </div>
                    <div class="modal-body">
                        <p style="white-space: pre-wrap; line-height: 1.8;">${article.fullText}</p>
                    </div>
                `;
                openModal(modalHtml);
            }
        });
    });
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
    
    // New variables for law search
    lawGrid = document.getElementById('lawGrid');
    lawContent = document.getElementById('lawContent');
    mainContent = document.getElementById('mainContent');
    const searchTabBtns = document.querySelectorAll('.search-tab-btn');

    const partnerTabs = document.querySelectorAll('.tab-btn');
    const logoLink = document.getElementById('logoLink');
    const navNews = document.getElementById('navNews');
    const navSkills = document.getElementById('navSkills');
    const refreshNewsBtn = document.getElementById('refreshNews');
    const refreshPartnerNewsBtn = document.getElementById('refreshPartnerNews');
    const refreshPartnerNewsIcon = document.getElementById('refreshPartnerNewsIcon');

    // Initial renders
    fetchRealTimeFeaturedTopics();
    fetchLatestNotifications();
    fetchPartnerNews();
    renderLawData(lawData); // Initial render for law data

    // Search Tabs Logic
    searchTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            searchTabBtns.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            currentSearchMode = btn.dataset.mode;
            
            if (currentSearchMode === 'knowledge') {
                mainContent.style.display = 'block';
                lawContent.style.display = 'none';
                searchInput.placeholder = "制度、加算、事例について検索...";
            } else {
                mainContent.style.display = 'none';
                lawContent.style.display = 'block';
                searchInput.placeholder = "例: モニタリング、要介護認定、減算 ...";
            }
        });
    });

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

    // Refresh Notifications + Featured News
    if (refreshNewsBtn) {
        refreshNewsBtn.addEventListener('click', () => {
            fetchLatestNotifications();
            fetchRealTimeFeaturedTopics();
        });
    }

    // Refresh Partner (Industry Real-time) News
    if (refreshPartnerNewsBtn) {
        let isRefreshingPartner = false;
        refreshPartnerNewsBtn.addEventListener('click', async () => {
            if (isRefreshingPartner) return;
            isRefreshingPartner = true;

            // Spin animation
            if (refreshPartnerNewsIcon) {
                refreshPartnerNewsIcon.style.display = 'inline-block';
                refreshPartnerNewsIcon.style.animation = 'spin 1s linear infinite';
            }
            refreshPartnerNewsBtn.style.opacity = '0.65';
            refreshPartnerNewsBtn.style.pointerEvents = 'none';

            await fetchPartnerNews();

            // Stop animation
            if (refreshPartnerNewsIcon) {
                refreshPartnerNewsIcon.style.animation = '';
            }
            refreshPartnerNewsBtn.style.opacity = '1';
            refreshPartnerNewsBtn.style.pointerEvents = 'auto';
            isRefreshingPartner = false;
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

    // ============================================
    // BBS (意見交換掲示板) Logic
    // ============================================
    const bbsSubmit = document.getElementById('bbsSubmit');
    const bbsName = document.getElementById('bbsName');
    const bbsMessage = document.getElementById('bbsMessage');
    const bbsError = document.getElementById('bbsError');
    const bbsList = document.getElementById('bbsList');

    // ネガティブワードのリスト
    const negativeWords = [
        "馬鹿", "死ね", "最悪", "キモい", "クソ", "ウザい", "カス", "ゴミ", 
        "バカ", "アホ", "しね", "使えない", "消えろ", "辞めろ", "うざい", "きもい"
    ];

    // HTMLエスケープ処理（XSS対策）
    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, tag => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
        }[tag] || tag));
    }

    // 掲示板のコメントを読み込んで表示する
    function loadComments() {
        if (!bbsList) return;
        const comments = JSON.parse(localStorage.getItem('cm_knowledge_comments') || '[]');
        bbsList.innerHTML = '';
        if (comments.length === 0) {
            bbsList.innerHTML = '<p style="color: #888; text-align: center; padding: 20px;">まだ意見はありません。最初の意見を投稿してみましょう！</p>';
        } else {
            comments.forEach(c => {
                const div = document.createElement('div');
                div.className = 'bbs-item animate-fade-in';
                div.innerHTML = `<strong>${escapeHTML(c.name)}</strong> <span style="font-size: 0.8rem; color: #888; margin-left: 10px;">${escapeHTML(c.date)}</span><p>${escapeHTML(c.message)}</p>`;
                bbsList.appendChild(div);
            });
        }
    }

    // ネガティブワードが含まれているかチェック
    function containsNegativeWords(text) {
        return negativeWords.some(word => text.includes(word));
    }

    // 掲示板初期化・イベント設定
    if (bbsSubmit) {
        loadComments();
        bbsSubmit.addEventListener('click', () => {
            const name = bbsName.value.trim() || '匿名ケアマネ';
            const msg = bbsMessage.value.trim();
            if (!msg) return;

            // ネガティブワードのバリデーション
            if (containsNegativeWords(msg) || containsNegativeWords(name)) {
                bbsError.style.display = 'block';
                bbsMessage.style.borderColor = '#e74c3c';
                return;
            }

            // エラーをリセットして投稿
            bbsError.style.display = 'none';
            bbsMessage.style.borderColor = '#ccc';
            const comments = JSON.parse(localStorage.getItem('cm_knowledge_comments') || '[]');
            const newComment = {
                name: name,
                message: msg,
                date: new Date().toLocaleString('ja-JP')
            };
            comments.unshift(newComment); // 最新を一番上に
            localStorage.setItem('cm_knowledge_comments', JSON.stringify(comments));
            
            // 入力欄をクリアして再描画
            bbsName.value = '';
            bbsMessage.value = '';
            loadComments();
        });
    }

});
