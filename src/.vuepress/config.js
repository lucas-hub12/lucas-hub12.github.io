import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  sourceDir: "src",
  dest: "docs/",
  
  lang: 'en-US',

  title: "Lucas's 항해",
  description: "데이터 분석가라는 목표로 항해하는 Lucas의 여정을 그의 블로그에서 만나보세요.", 

  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: "Lucas's blog" }],
    ['meta', { property: 'og:description', content: "데이터 분석가라는 목표로 항해하는 Lucas의 여정을 그의 블로그에서 만나보세요" }],
    ['meta', { property: 'og:image', content: 'https://lucas-hub12.github.io/images/lucas.jpg' }],
    ['meta', { property: 'og:url', content: 'https://lucas-hub12.github.io/' }],
  ],
  
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/en/': {
      lang: 'en-US',
    //   title: "lucas's voyage",
    //   description: "Embark on Lucas's journey as he sails toward his goal of becoming a data analyst on his blog.",
    },
    '/': {
      lang: 'ko-KR',
    //   title: "lucas's 항해,
    //   description: "데이터 분석가라는 목표로 항해하는 Lucas의 여정을 그의 블로그에서 만나보세요.",
    },
  },


  locales: {
    '/zh/': {
      lang: 'zh-CN',
    },
    '/en/': {
      lang: 'en-US',
    },
    '/': {
      lang: 'ko-KR',
    },
  },

  theme: defaultTheme({
    selectLanguageText: "lang",

    locales: {
      '/zh/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
      '/': {
        selectLanguageName: '한국어',
      },
    },

    logo: "/images/hero.png",
    logoDark: "/images/hero.png",

    repo: "https://github.com/lucas-hub12/lucas-hub12.github.io",
    repoLabel: "discussions",

    contributors: false,

    editLink: false,
    // editLinkText: '✏️',

    lastUpdated: true,
    lastUpdatedText: "Last Updated",

    colorMode: "auto",
    colorModeSwitch: true,

    navbar: [
      { text: "GITHUB", link: "https://github.com/lucas-hub12" },
      { text: "RESUME", link: "/resume/" },
      { text: "⋆.˚✮🎧✮˚.⋆", link: "https://vim.sunsin.shop/?sort=shuffle&query=%ED%94%8C" },         
    ],

    sidebar: {
      "/": [
        {
          text: "resume",
          collapsible: true,
          children: [
            "/resume/",
          ],
        },
        {
          text: "team",
          collapsible: true,
          children: [
            "/team/tiger/",
            "/team/recruit/",
            "/team/how2pr/",
            "/team/tiger2agile/",
          ],
        },
        {
          text: "opensource",
          collapsible: true,
          children: [
            "/tech/share/opensource/",
          ],
        },
      ],
    },
  }),

  plugins: [
  searchPlugin({
  
    }),
    backToTopPlugin(),
    googleAnalyticsPlugin({
      id: "G-7H5PLKCFHD",
      debug: true,
    }),
  ],

})
