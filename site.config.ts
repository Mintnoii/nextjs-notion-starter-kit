import { siteConfig } from './lib/site-config'

export default siteConfig({
  // 网站的的 root notion page(必选)
  rootNotionPageId: 'a2d338fb2c0c4522a7aca806b4eb599a',

  // 如果你想将页面限制为单个概念工作区(可选)
  //(这应该是一个Notion ID; 参考文档了解如何提取这个id)
  // rootNotionSpaceId: 'fde5ac74eea345278f004482710e1af3',

  // basic site info (required)
  name: 'Mintnoii',
  domain: 'mintnoii.com',
  author: 'Mintnoii',

  // open graph metadata (optional)
  description: `Mintnoii's Blog`,

  // 社交账户昵称 (可选)
  github: 'Mintnoii',
  // newsletter: '#', // optional newsletter URL

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: '',
  defaultPageCover: 'https://transitivebullsh.it/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  pageUrlAdditions: {
    // '/the-social-audio-revolution': 'c4deaf33cc924ad7a5b9f69c6ae04a01'
  },

  // 是使用 Notion 默认导航样式还是具有指向重要页面链接的自定义 notion 样式
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '今天学到了',
      icon: 'calendar',
      pageId: 'd42b56b4e2da41db81878424f6a7dfe3'
    }
  ]
})
