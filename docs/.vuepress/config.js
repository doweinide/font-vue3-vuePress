import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '官方网站',
  description: '基于VuePress Vue3构建的官方网站',
  base: '/vitePress/',
  
  bundler: viteBundler({
    viteOptions: {
      css: {
        preprocessorOptions: {
          scss: {
            charset: false
          }
        }
      }
    }
  }),
  
  theme: defaultTheme({
    // 导航栏
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '产品',
        children: [
          {
            text: '产品介绍',
            link: '/products/'
          },
          {
            text: '功能特性',
            link: '/products/features'
          }
        ]
      },
      {
        text: '解决方案',
        link: '/solutions/'
      },
      {
        text: '关于我们',
        children: [
          {
            text: '公司介绍',
            link: '/about/'
          },
          {
            text: '团队',
            link: '/about/team'
          },
          {
            text: '联系我们',
            link: '/about/contact'
          }
        ]
      },
      {
        text: '文档',
        link: '/docs/'
      }
    ],
    
    // 侧边栏
    sidebar: {
      '/products/': [
        {
          text: '产品',
          children: [
            '/products/README.md',
            '/products/features.md'
          ]
        }
      ],
      '/solutions/': [
        {
          text: '解决方案',
          children: [
            '/solutions/README.md'
          ]
        }
      ],
      '/about/': [
        {
          text: '关于我们',
          children: [
            '/about/README.md',
            '/about/team.md',
            '/about/contact.md'
          ]
        }
      ],
      '/docs/': [
        {
          text: '文档',
          children: [
            '/docs/README.md',
            '/docs/getting-started.md',
            '/docs/api.md'
          ]
        }
      ]
    },
    
    // 仓库
    repo: 'https://github.com/your-username/your-repo',
    
    // 编辑链接
    editLink: false,
    
    // 最后更新时间
    lastUpdated: true,
    
    // 贡献者
    contributors: false
  })
})