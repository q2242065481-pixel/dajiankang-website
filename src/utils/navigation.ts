// 卓越大健康官网导航与页脚链接配置
const navBarLinks = [
  { name: '首页', url: '/' },
  { name: '业务板块', url: '/jigou' },
  { name: '医养服务', url: '/services' },
  { name: '新闻动态', url: '/news' },
  { name: '关于我们', url: '/about' },
  { name: '合作共赢', url: '/contact' },
];

const footerLinks = [
  {
    section: '业务板块',
    links: [
      { name: '宽逸颐养院', url: '/jigou#kuanyi' },
      { name: '小港中医医院', url: '/jigou#xiaogang' },
      { name: '英明老人疗养院', url: '/jigou#yingming' },
      { name: '桃花源颐养院', url: '/jigou#taohuayuan' },
      { name: '老年大学', url: '/jigou#daxue' },
    ],
  },
  {
    section: '快捷入口',
    links: [
      { name: '医养服务', url: '/services' },
      { name: '新闻动态', url: '/news' },
      { name: '关于我们', url: '/about' },
      { name: '合作共赢', url: '/contact' },
    ],
  },
];

export default {
  navBarLinks,
  footerLinks,
};
