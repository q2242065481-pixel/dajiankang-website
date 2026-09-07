import ogImageSrc from '@images/social.png';

export const SITE = {
  title: '卓越大健康',
  tagline: '卓越教育旗下 · 广州医养结合',
  description:
    '卓越大健康是卓越教育集团旗下医养品牌，旗下拥有宽逸颐养院、英明老人疗养院、桃花源颐养院三家养老机构与小港中医医院，全部院区均为长护险定点机构，医保可结算，为广州长者提供「楼上养老、楼下治病」的医养结合服务。',
  description_short: '卓越教育旗下卓越大健康 · 广州医养结合，三院长护险定点，医保可结算。',
  url: 'https://www.zhuoyue-health.example.cn', // 上线前替换为真实域名
  author: '卓越大健康',
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: 'zh-CN',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: 'zh_CN',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title} · 广州医养结合`,
  description: SITE.description_short,
  image: ogImageSrc,
};
