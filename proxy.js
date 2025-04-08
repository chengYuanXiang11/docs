  const MDX_COMPONENTS = [
            {
                page: '/introduction',
                title: '👋 Welcome',
                breadcrumbs: [
                    "Get Started",
                    "👋 Welcome"
                ],
                description: [
                    "👋 Welcome",
                    "Autopilot aims to break down the barriers between creativity and technical programming, providing equal, simple, and implementable ways for all ideas. Based on AutoCoder self-developed PLE model, we can turn software ideas into truly usable software products through natural language interaction.",
                ]
            },

            {
                breadcrumbs: [
                    "Get Started",
                    "👋 Welcome"
                ],
                title: "Product Capabilities",
                page: '/introduction',
                content: [
                    "The platform provides all the tools you need to create amazing websites, front-end applications as well as full-stack web applications from one browser tab - in installation required. Lovable includes AI coding tools, real-time collaboration (beta test), and project sharing to give you a head start on your app creation journey."
                ]
            },
            {
                breadcrumbs: [
                    "Get Started",
                    "👋 Welcome"
                ],
                title: "Quick Start ",
                page: '/introduction',
                content: [
                    "TGetting Started Get your docs set up locally for easy development"
                ]
            },
            {
                breadcrumbs: [
                    "Get Started",
                    "👋 Welcome"
                ],
                title: "Quick Start ",
                page: '/introduction',
                content: [
                    "Tutorial Preview your changes before you push to make sure they’re perfect"
                ]
            },
            {
                title: "📕 FAQ",
                breadcrumbs: [
                    "Get Started",
                    "📕 FAQ"
                ],
                page: '/quickstart',
                content: [
                    '📕 FAQ',
                    'Get Started',
                    'Account & Security',
                    'Pricing & Payment',
                    'Refund Policy',
                ]
            },
            {
                title: "Get Started",
                breadcrumbs: [
                    "Get Started",
                    "📕 FAQ"
                ],
                page: '/quickstart',
                content: [
                    'What is AutoCoder?',
                    `AutoCoder is the world's first truly end-to-end AI product that automatically generates both the front-end and back-end of applications through AI conversations.`,
                    `How is this different from other solutions?`,
                    `Express your needs through AI conversations, and AutoCoder will generate a detailed requirements list based on your input.`,
                    `Once the project is generated, you can manually edit and adjust it through multiple rounds of AI conversation, with no coding required. Simply use natural language to optimize your project.`,
                    `Completed projects support collaboration and can be easily deployed.`,
                    `How can I create a project from the beginning?`,
                    `Step 1 Click on the Sign In button to access your AutoCoder account.`,
                    `Step 2 Click on the dialogue box and enter a brief description of the project idea.`,
                    `Step 3 Edit manually or send your request to AutoCoder directly.`,
                    `Step 4 Confirm your requirements and workflow, then start generating.`,
                    `Step 5  Chat with AutoCoder if you want any updates.  Fantastic! You're now equipped with the essential tools to navigate AutoCoder effortlessly. Keep the conversation flowing and let AI bring your visions to life.`,
                ]
            },
            {
                title: "Account & Security",
                breadcrumbs: [
                    "Get Started",
                    "📕 FAQ"
                ],
                page: '/quickstart',
                content: [
                    `What should I do if I am unable to login?`,
                    `Make sure your email address is correct and that Caps Lock is off.`,
                    `Ensure you have a stable internet connection. Try clearing your browser cache or switching to a different browser.`,
                    `If the issue persists, feel free to contact us at [support@autocoder.cc](mailto:support@autocoder.cc) with the following details.`,
                    `1.Your registered email address`,
                    `2.A screenshot of the error message`,
                    `What should I do if I want to delete my personal data?`,
                    `We respect your privacy and offer the option to delete your personal data. Simply follow these steps.`,
                    `Go to the Account Settings or Privacy Settings page.`,
                    `Select the **Delete My Account** option.`,
                    `How do you manage my data?`,
                    `We comply with our Privacy Policy and Terms of Service to ensure that your data is securely handled and protected.`,
                ]
            },
            {
                title: "Error & Solution",
                breadcrumbs: [
                    "Get Started",
                    "📕 FAQ"
                ],
                page: '/quickstart',
                content: [
                    `You may try **Refresh** or **Regenerate**. If the issue persists, feel free to contact us at [support@autocoder.cc](mailto:support@autocoder.cc)`,
                    `What should I do if I want to revert to the previous version?`,
                    `AutoCoder offers version rollback functionality, enabling you to revert to any prior version.`,
                    `On which devices is AutoCoder supported?`,
                    `We suggest you can try it on your personal computer with Windows, MacOS, and Linux systems. Alternatively, you can try it on a tablet or smartphone with a browser.`,
                    `Which language is supported?`,
                    `Autocoder supports multi-language. You may input your preferred language and will get corresponding reply.`,
                ]
            },
            {
                title: "Pricing & Payment",
                breadcrumbs: [
                    "Get Started",
                    "📕 FAQ"
                ],
                page: '/quickstart',
                content: [
                    `What payment methods are supported?`,
                    `All payments are processed via Stripe. You may use a credit or debit card for payment. Further details are provided on the checkout page.`,
                    `Can I continue using my previous plan after upgrading?`,
                    `Upon upgrading, the tokens from your new plan will be prioritized for use. If the upgraded plan's tokens are exhausted, and your previous plan remains active with unused tokens, you may continue to utilize those.`,
                    `Must I subscribe to a Sub plan before purchasing a Pro plan?`,
                    `Yes, Pro plans require an active subscription to a Sub plan. We offer enhanced benefits for subscribers, including additional perks when token usage is low.`,
                    `Can I downgrade after upgrading?`,
                    ` At this time, downgrading is not supported. We recommend carefully considering your usage requirements prior to upgrading.`
                ]
            },
            {
                title: "Refund Policy",
                breadcrumbs: [
                    "Get Started",
                    "📕 FAQ"
                ],
                page: '/quickstart',
                content: [
                    `Refund Eligibility`,
                    `Refunds are available under the following conditions:`,
                    ` - The service must be purchased directly through our website.`,
                    `- Refund requests must be submitted within 7 days of the service purchase date.`,
                    `Must I subscribe to a Sub plan before purchasing a Pro plan?`,
                    `Yes, Pro plans require an active subscription to a Sub plan. We offer enhanced benefits for subscribers, including additional perks when token usage is low.`,
                    `Can I downgrade after upgrading?`,
                    ` At this time, downgrading is not supported. We recommend carefully considering your usage requirements prior to upgrading.`
                ]
            },



        ]

        function generateUUID() {
    var d = new Date().getTime(); // 使用当前时间作为随机种子, 在一些需要唯一性但不要求强安全的场景下足够使用。


    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){


        d += performance.now(); // 使用高精度时间以提高随机性。


    }


    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {


        var r = (d + Math.random()*16)%16 | 0;


        d = Math.floor(d/16);


        return (c=='x' ? r : (r&0x3|0x8)).toString(16);


    });


}


        class MDX_CLASS {
            search(query) {
                const results = [];
                const normalizedQuery = query.toLowerCase().trim();
                if (!normalizedQuery) return results;

                for (const component of MDX_COMPONENTS) {
                    const content = component.description || component.content || [];
                    let bestMatch = null;

                    // 优先搜索description字段，不存在时搜索content
                    for (const textBlock of content) {
                        const sentences = textBlock.split(/[.!?]/g);

                        for (const sentence of sentences) {
                            const cleanSentence = sentence.trim();
                            if (!cleanSentence) continue;

                            // 使用单词边界匹配完整单词，忽略大小写
                            const regex = new RegExp(
                                `${this.escapeRegExp(normalizedQuery)}`,
                                'gi'  // 保留全局和忽略大小写标志
                            )
                            if (regex.test(cleanSentence)) {
                                bestMatch = this.generateSnippet(cleanSentence, normalizedQuery);
                                break;
                            }
                        }

                        if (bestMatch) break; // 找到匹配后停止搜索当前组件
                    }

                    if (bestMatch) {
                        results.push({
                            page: component.page,
                            title: component.title,
                            breadcrumbs: component.breadcrumbs,
                            description: bestMatch
                        });
                    }
                }

                return results;
            }

            // 生成包含关键词的上下文片段
            generateSnippet(sentence, query, contextWords = 3) {
                const words = sentence.split(/\s+/);
                const targetIndex = words.findIndex(word =>
                    word.toLowerCase().includes(query.toLowerCase())
                );

                if (targetIndex === -1) return sentence;

                const start = Math.max(0, targetIndex - contextWords);
                const end = Math.min(words.length - 1, targetIndex + contextWords);

                let snippet = words.slice(start, end + 1).join(' ');
                if (start > 0) snippet = `${snippet}`;
                if (end < words.length - 1) snippet += '...';

                return this.highlightKeyword(snippet, query);
            }

            // 高亮显示关键词（可选）
            highlightKeyword(text, query) {
                return text.replace(
                    new RegExp(`(${this.escapeRegExp(query)})`, 'gi'),
                    '<mark><b>$1</b></mark>'
                );
            }

            // 转义正则特殊字符
            escapeRegExp(string) {
                return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            }
        }

        function processResults(results) {
            
    return {
        corrected_query:null,
total_chunk_pages
: 0,
        score_chunks:results.map(v => ({
          score
: 
0.3603987693786621,
        highlights: [v.description],
        metadata: [{
                              "link": "introduction",
            id: generateUUID(),
            chunk_html: v.description,
            dataset_id: "592bca4c-7f00-4cc2-93c5-62339712a05f",
            metadata: {
                breadcrumbs: v.breadcrumbs,
                title: v.title
            },
            num_value: null,
                    tag_set: "LANGUAGE:*,USERAUTH:*,H2,VERSION:*",
                    time_stamp: null,
                    tracking_id: 
                    null,
                    updated_at: "2025-04-07T08:06:23.335830",weight: 0,
        }]
    }))
    }
}
        // 定义需要拦截的API地址常量
const INTERCEPT_URL = "https://api.mintlifytrieve.com/api/chunk/autocomplete";

// ==================== Fetch 拦截器 ====================
(function() {
    const originalFetch = window.fetch;
    
    window.fetch = async function(url, init) {
        if (typeof url === 'string' && url === INTERCEPT_URL) {
          console.log('拦截2',url)
          
            try {
                const response = await originalFetch(url, init);
                const clone = response.clone();
                const body = init?.body ? JSON.parse(init.body) : {};
                const query = body.query || '';

                // 处理数据逻辑
                const fuse = new MDX_CLASS();
                const results = fuse.search(query);
                const processedData = processResults(results);
                console.log(processedData)
        
        
        // 解析并打印原始数据
        clone.json().then(data => {
            console.log('原始响应数据:', data);
        }).catch(err => {
            console.error('解析原始数据失败:', err);
        });
                return new Response(JSON.stringify(processedData), {
                    status: 200,
                    headers: response.headers
                });
            } catch (e) {
                console.warn('Fetch处理失败:', e);
                return originalFetch(url, init);
            }
        }
        return originalFetch(url, init);
    };
})();