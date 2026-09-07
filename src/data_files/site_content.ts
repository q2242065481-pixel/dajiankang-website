// 卓越大健康官网内容数据（文案来源：官方资料《三院宣传卖点归纳》2026-08 版）
// 合规要求：仅宽逸颐养院可使用"医养结合/楼上养老楼下医院"表述；不出现绝对化用语

export interface Institution {
  id: string;
  name: string;
  tagline: string;
  tags: string[];
  description: string;
  image: string;
  imageAlt: string;
  articleUrl?: string; // 公众号图文链接
  bound?: string; // 物理绑定说明
  facts: { label: string; value: string }[];
}

export const institutions: Institution[] = [
  {
    id: 'kuanyi',
    name: '宽逸颐养院',
    tagline: '一碗汤的距离，楼上养老楼下医院',
    tags: ['医养结合旗舰', '长护险定点', '医保可结算', '城央地段'],
    description:
      '卓越教育旗下首家医养结合旗舰颐养院，位于海珠区城央核心地段，130余张床位，入住率达90%以上。设认知症专区，智能呼叫、无障碍卫生间、新风系统等适老化硬件齐全，五星级服务标准。',
    image: '/images/card-kuanyi.jpg',
    imageAlt: '宽逸颐养院门头',
    articleUrl: 'https://mp.weixin.qq.com/s/4d18PdL4kkLzyeThZRNNog',
    bound: '与小港中医医院同址一体，实现「楼上养老、楼下医院」',
    facts: [
      { label: '区域', value: '海珠区城央核心地段' },
      { label: '床位', value: '130余张' },
      { label: '交通', value: '8号线晓港站 + 2号线江南西站（双地铁）' },
      { label: '医疗', value: '楼下即小港中医医院，广医二院10分钟车程' },
      { label: '特色', value: '认知症专区 · 长幼共融活动 · 定制食谱' },
    ],
  },
  {
    id: 'xiaogang',
    name: '小港中医医院',
    tagline: '养老就在楼上，看病就在楼下',
    tags: ['医保定点', '中医特色', '康复理疗', '住院服务'],
    description:
      '卓越大健康旗下中医医院，医保定点机构，设老年病科、康复大厅、中医推拿室、住院部等，为院区长者与周边居民提供中医诊疗、康复训练、慢病管理服务。',
    image: '/images/card-xiaogang.jpg',
    imageAlt: '小港中医医院门头',
    articleUrl: 'https://mp.weixin.qq.com/s/Gq4ymfu7PxZVIJUvgVyMng',
    bound: '与宽逸颐养院同址一体，是「楼上养老、楼下医院」的医疗支撑',
    facts: [
      { label: '区域', value: '海珠区（与宽逸颐养院同址）' },
      { label: '资质', value: '医保定点机构' },
      { label: '科室', value: '老年病科 · 康复大厅 · 中医推拿 · 住院部' },
      { label: '服务', value: '中医诊疗 · 康复训练 · 慢病管理' },
    ],
  },
  {
    id: 'yingming',
    name: '英明老人疗养院',
    tagline: '百米到省中医，老城区里的粤曲晚年',
    tags: ['长护险定点', '老城区', '粤曲文化', '医疗密集'],
    description:
      '位于荔湾芳村老城区，与广东省中医院（慈善医院）仅百米之隔，周边3公里汇聚8家三甲医院。院内设医务室，粤曲活动、英明币·英明家年华、社工个案服务等特色鲜明，充满老广州生活气息。',
    image: '/images/card-yingming.jpg',
    imageAlt: '英明老人疗养院门头',
    articleUrl: 'https://mp.weixin.qq.com/s/dgOmvj64kjqvNr9WXCgECg',
    facts: [
      { label: '区域', value: '荔湾区芳村老城区' },
      { label: '月费', value: '5K起' },
      { label: '交通', value: '1/11/22号线芳村站' },
      { label: '医疗', value: '省中医院仅百米之隔，3公里内8家三甲' },
      { label: '特色', value: '粤曲活动 · 英明币 · 社工个案服务' },
    ],
  },
  {
    id: 'taohuayuan',
    name: '桃花源颐养院',
    tagline: '4K起住白云站旁庭院式养老院',
    tags: ['长护险定点', '普惠养老', '庭院式', '高铁站旁'],
    description:
      '卓越教育旗下首家庭院式普惠颐养院，约180张床位，月费4K起。庭院式环境带小花园，房间带阳台、南北通透，毗邻广州白云站，子女外地往返也方便。设认知症专区，提供早茶服务与养生炖汤。',
    image: '/images/card-taohuayuan.jpg',
    imageAlt: '桃花源颐养院环境',
    articleUrl: 'https://mp.weixin.qq.com/s/0Bd6NYD0WthosO2NvcPV2w',
    facts: [
      { label: '区域', value: '白云区' },
      { label: '床位', value: '约180张' },
      { label: '月费', value: '4K起' },
      { label: '交通', value: '8号线石潭站步行5分钟，毗邻广州白云站' },
      { label: '特色', value: '庭院+阳台 · 认知症专区 · 早茶炖汤' },
    ],
  },
  {
    id: 'daxue',
    name: '老年大学',
    tagline: '让晚年成为另一场芳华',
    tags: ['一老一小', '文娱课程', '精神家园'],
    description:
      '依托卓越教育29年教育底蕴，为长者开设丰富文娱课程，三院长者均可参与每月生日会、志愿者陪伴、每日早操等活动，打造「一老一小」长幼共融的精神家园。',
    image: '/images/fac-kangfu.jpg',
    imageAlt: '长者活动空间',
    facts: [
      { label: '底蕴', value: '卓越教育29年教育品牌' },
      { label: '课程', value: '文娱课程 · 每日早操 · 月度生日会' },
      { label: '理念', value: '一老一小 · 长幼共融' },
    ],
  },
];

export const newsArticles = [
  {
    tab: 'jigou',
    tabName: '机构动态',
    items: [
      {
        title: '宽逸颐养院 · 公众号图文介绍',
        date: '2026',
        url: 'https://mp.weixin.qq.com/s/4d18PdL4kkLzyeThZRNNog',
      },
      {
        title: '小港中医医院 · 公众号图文介绍',
        date: '2026',
        url: 'https://mp.weixin.qq.com/s/Gq4ymfu7PxZVIJUvgVyMng',
      },
      {
        title: '英明老人疗养院 · 公众号图文介绍',
        date: '2026',
        url: 'https://mp.weixin.qq.com/s/dgOmvj64kjqvNr9WXCgECg',
      },
      {
        title: '桃花源颐养院 · 公众号图文介绍',
        date: '2026',
        url: 'https://mp.weixin.qq.com/s/0Bd6NYD0WthosO2NvcPV2w',
      },
    ],
  },
  {
    tab: 'pinpai',
    tabName: '品牌动态',
    items: [
      {
        title: '【待补充】集团品牌动态公众号文章链接',
        date: '—',
        url: '#',
      },
    ],
  },
];
