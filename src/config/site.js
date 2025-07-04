export const siteConfig = {
  name: "奶茶伺服器",
  description: "奶茶伺服器 —— 帶給您全新的 Minecraft 遊戲體驗",
  tagline: "帶給您全新的 Minecraft 遊戲體驗",
  
  servers: {
    java: {
      label: "Java 版",
      ip: "milkteamc.org"
    },
    bedrock: {
      label: "基岩版", 
      ip: "milkteamc.org",
      port: "10147"
    }
  },
  
  seo: {
    title: "奶茶伺服器 —— 帶給您全新的 Minecraft 遊戲體驗",
    description: "您是否想要一個有趣、豐富的 Minecraft 生存伺服器？那麼，奶茶伺服器就是您一直在尋找的伺服器！我們擁有非常豐富的功能，讓您感受全新的生存體驗。",
    keywords: ["Minecraft", "伺服器", "生存", "跨平台", "Minecraft 生存伺服器", "Java版", "基岩版", "手機版", "非正版", "無正版驗證", "社群"],
    author: "MilkTeaMC Team",
    siteUrl: "https://www.milkteamc.org",
    image: "/og-image.png",
    twitterHandle: "@milkteamcorg"
  },
  
  links: {
    discord: "https://discord.gg/22DxRjrXRv",
    wiki: "https://wiki.milkteamc.org",
    rules: "https://wiki.milkteamc.org/rules/",
    banlist: "https://bans.milkteamc.org",
    connectGuide: "https://wiki.milkteamc.org/#connect"
  },
  
  navigation: [
    { name: "規則", href: "https://wiki.milkteamc.org/rules/", external: false },
    { name: "Discord", href: "https://discord.gg/22DxRjrXRv", external: true },
    { name: "封禁列表", href: "https://bans.milkteamc.org", external: true},
    { name: "遊玩教學", href: "https://wiki.milkteamc.org", external: false }
  ],
  
  features: [
    {
      "icon": "🍻",
      "title": "創意功能",
      "description": "從釀酒、捕魚到製作各種美食，創意無限的各種玩法等待您發掘。"
    },
    {
      "icon": "⚔️", 
      "title": "獨特附魔",
      "description": "特殊的附魔機制讓您打造專屬神器，搭配精心設計的任務體系帶來豐富多樣的挑戰。"
    },
    {
      "icon": "💰",
      "title": "完善經濟體系", 
      "description": "自由交易、經營商店，在這裡成為一代商業大亨，體驗真實的虛擬經濟。"
    },
    {
      "icon": "🤝",
      "title": "社交互動系統",
      "description": "建立領地、創立聚落，與志同道合的玩家一起遊玩，享受團隊合作的樂趣。"
    },
    {
      "icon": "🛡️",
      "title": "公平穩定環境",
      "description": "管理團隊維護公平、穩定的遊戲環境，即時更新內容確保最佳體驗。"
    },
    {
      "icon": "📚",
      "title": "新手友善支援",
      "description": "詳盡的 Wiki 頁面和活躍 Discord 社群，從基礎到進階一應俱全，新手也能快速上手。"
    }
  ],
  
  instructions: {
    bedrock: {
      platform: "📱 基岩版",
      steps: [
        "開啟 Minecraft",
        "點選「遊玩」→「伺服器」", 
        "點選「新增伺服器」",
        "輸入伺服器位址：milkteamc.org",
        "埠號：10147",
        "點選「儲存」並加入!"
      ]
    },
    java: {
      platform: "💻 Java 版",
      steps: [
        "啟動 Minecraft Java 版",
        "點選「多人遊戲」",
        "點選「新增伺服器」", 
        "伺服器位址：milkteamc.org",
        "點選「完成」",
        "雙擊伺服器即可加入!"
      ]
    }
  },
  
  footerLinks: {
    quickLinks: [
      { name: "伺服器規則", href: "https://wiki.milkteamc.org/rules/", external: false },
      { name: "封禁列表", href: "https://bans.milkteamc.org", external: false },
      { name: "Wiki 頁面", href: "https://wiki.milkteamc.org", external: false }
    ],
    community: [
      { name: "Discord 社群", href: "https://discord.gg/22DxRjrXRv", external: true },
      { name: "Twitter/X 帳號", href: "https://x.com/milkteamcorg", external: true }
    ]
  },
  
  ui: {
    copyButton: "複製",
    copySuccess: "✅ IP 已複製到剪貼板!",
    joinDiscord: "立即加入 Discord 社群",
    viewGuide: "查看遊玩教學", 
    joinCommunity: "加入 Discord 社群",
    menuLabel: "選單"
  }
};