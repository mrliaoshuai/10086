export function store() {
  const o = {
    swiper: [
      { image: "/img/sswp2true.png" },
      { image: "/img/sswp3true.png" },
      { image: "/img/sswp4true.png" },
      { image: "/img/sswp5true.png" },
      { image: "/img/sswp6true.png" },
    ],
    recommend: [
      { image: "/img/sre1true.png", title: "充值交费" },
      { image: "/img/sre2true.png", title: "我的账单" },
      { image: "/img/sre3true.png", title: "套餐余量" },
      { image: "/img/sre4true.png", title: "已订业务" },
      { image: "/img/sre5true.png", title: "充流量" },
      { image: "/img/sre6true.png", title: "办号卡" },
      { image: "/img/sre7true.png", title: "个人中心" },
      { image: "/img/sre8true.png", title: "优惠专区" },
    ],
    sel: {
      title: "办套餐",
      color: "#ffea00",
      goods: [
        { image: "/img/ssle1true.png", p1: "全球通无限尊享套餐", p2: "三档选择" },
        { image: "/img/ssle2true.png", p1: "全球通畅享套餐", p2: "办套餐" },
        { image: "/img/ssle3true.png", p1: "月末流量包", p2: "月享超大流量" },
        { image: "/img/ssle4true.png", p1: "流量可选包", p2: "10元2GB" },
      ]
    },
    sphone: {
      title: "买手机",
      color: "#46c900",
      goods: [
        { image: "/img/sphone1true.png", p1: "iPhone 1...", p2: "5G手机", price: "¥5399" },
        { image: "/img/sphone2true.png", p1: "Redmi K3...", p2: "Redmi K30 ...", price: "¥1599" },
        { image: "/img/sphone3true.png", p1: "苹果12ProM...", p2: "5G手机", price: "¥8699" },
        { image: "/img/sphone4true.png", p1: "OPPO A93", p2: "5G手机", price: "¥1649" },
      ]
    },
    business: {
      title: "办业务",
      color: "#0167c9",
      goods: [
        { image: "/img/image1true.png", p1: "流量小时包", p2: "4小时有效" },
        { image: "/img/image2true.png", p1: "流量日包", p2: "3元1G起" },
        { image: "/img/image1true.png", p1: "月末流量包", p2: "月末流量救急" },
        { image: "/img/image2true.png", p1: "夜间流量包", p2: "夜间上网也放心" },
      ],
    },
    selnum: {
      title: "选号码",
      color: "#9e00b9",
      goods: [
        { image: "/img/ssnum1true.png" },
        { image: "/img/ssnum2true.png" },
        { image: "/img/ssnum3true.png" },
      ],
    },
    accessories: {
      title: " 挑配件",
      color: "#ff9e02",
      goods: [
        { image: "/img/peijian1true.png", p1: "华为Mini蓝牙音箱", p2: "迷你小音箱", price: "¥99" },
        { image: "/img/peijian2true.png", p1: "和目智能锁", p2: "防盗门电子门锁", price: "¥699" },
      ],
    },
  }
  return o
}