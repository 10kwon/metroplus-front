import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '77564f6a971c45a4814b54f107603fa4',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '메트로+',
  domain: 'mp.injeonmetro.co.kr',
  author: '(주)한인승',

  // open graph metadata (optional)
  description: '상상이 현실로, 여기는 메트로+입니다.',

  // social usernames (optional)
discord: 'SfVUt3qc',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
   pageUrlOverrides: {
     '/factcheck': '590f6c2b67de42c89a763f24edfc3af8',
     '/rules': '0c8bbba3520542d7858545807a7bc14f'
   },
  // whether to use the default notion navigation style or a custom one with links to
  // important pages
   navigationStyle: 'custom',
   navigationLinks: [
     {
       title: '규칙',
       pageId: '0c8bbba3520542d7858545807a7bc14f'
     },
     {
      title: '팩트체크',
      pageId: '590f6c2b67de42c89a763f24edfc3af8'
    },
     {
       title: '채용 바로가기',
       pageId: 'a3e1c19a121f41dda06d7791621c9f40'
     }
   ]
})
