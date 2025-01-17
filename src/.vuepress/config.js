import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  sourceDir: "src",
  dest: "docs/",
  
  lang: 'en-US',

  title: 'team lucas12',
  description: "We want to be the king of logistics data just as Rupee aims to be the pirate king.",

  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'data-blog:lucas' }],
    ['meta', { property: 'og:description', content: "We are a data analysis team" }],
    ['meta', { property: 'og:image', content: 'https://lucas-hub12.github.io/images/Social preview.png' }],
    ['meta', { property: 'og:url', content: 'https://lucas-hub12.github.io/' }],
  ],
  
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/en/': {
      lang: 'en-US',
    //   title: 'data-blog:lucas',
    //   description: "We are a data analysis team, and just as Rupee aims to be the pirate king, we aspire to be the king of logistics data.",
    },
    '/': {
      lang: 'ko-KR',
    //   title: 'data-blog:lucas',
    //   description: "We are a data analysis team, and just as Rupee aims to be the pirate king, we aspire to be the king of logistics data.",
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
    logoDark: "/images/onepiece.webp",

    repo: "https://github.com/oss-cashmallow/oss-cashmallow.github.io/discussions",
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
