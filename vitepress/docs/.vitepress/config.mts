import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: "/vitepress-demo/",
  
  title: "ショップモーグル",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '採用', link: '/recruitment' },
      { text: 'お問い合わせ', link: '/toiawase' }
    ],

    sidebar: [
      {
        text: 'ショップモーグル',
        items: [
          {text:'ホーム',link:'/index'},
          { text: '採用', link: '/recruitment' },
          { text: '問い合わせ', link: '/toiawase' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/omokhr1639/vitepress' }
    ],
    
  }
})
