import { Random } from 'mockjs'
export function getdata(option) { //定义请求数据方法
  let datalist = []
  for (let i = 0; i < 5; i += 1) {
    const o = {  //mockjs模拟随机生成数据，生成20条
      recipeId: Random.guid(),
      cfirst: Random.url(),
      increment: Random.increment(),//数字递加
      email: Random.email(),
      billId: Random.string(10),
      orgId: Random.string('number', 8, 10),
      Date: Random.date('yyyy-MM-dd'),
      time: Random.time('A HH:mm:ss'),
      adress: Random.county(), //市
      viewName: Random.cword(4, 16), // 随机生成任意名称
      personName: Random.cname(),
      reason: Random.csentence(10, 32),
      isactive: Random.boolean(),
      title: Random.ctitle(),
      image2: Random.dataImage('200x100', Random.string(10),),
      image: Random.image('200x100', '#00405d', '#FFF', 'Mock.js'),
      image1: "/img/g" + 1 + ".webp",
      iid: "goods" + i

    }
    datalist.push(o)
  }
  return {
    datalist: datalist
  }
}
export function getdata2(option) { //定义请求数据方法
  const data = [
    {
      page: 0,
      list: [
        {
          image: "/img/g" + Random.string('number', 1) + ".webp",
          message: Random.cword(40),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4),
        },
        {
          image: "/img/g" + Random.string('number', 1) + ".webp",
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4),
        },

        {
          image: "/img/g" + Random.string('number', 1) + ".webp",
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4),
        },

        {
          image: "/img/g" + Random.string('number', 1) + ".webp",
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4),
        },

        {
          image: "/img/g" + Random.string('number', 1) + ".webp",
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4),
        },

        {
          image: "/img/g" + Random.string('number', 1) + ".webp",
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4),
        },

        {
          image: "/img/g" + Random.string('number', 1) + ".webp",
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4),
        },

        {
          image: "/img/g" + Random.string('number', 1) + ".webp",
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4),
        },

        {
          image: "/img/g" + Random.string('number', 1) + ".webp",
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4),
        },

        {
          image: "/img/g" + Random.string('number', 1) + ".webp",
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4),
        },

        {
          image: "/img/g" + Random.string('number', 1) + ".webp",
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4),
        },



      ]
    },

  ]
  return data


}
export function getdata1(option) { //定义请求数据方法

  const o = {
    columns: ['销量' + Random.string('number', 1, 3), "收藏" + Random.string('number', 1, 3) + "人", "默认快递"],
    detailInfo: {
      desc: "产品介绍" + Random.cword(20, 32),
      detailImage: [
        {
          anchor: "module_img", desc: '', key: "穿着效果",
          list: [
            Random.dataImage('200x100', Random.string(10),),
            Random.dataImage('200x100', Random.string(10),),
            Random.dataImage('200x100', Random.string(10),),
            Random.dataImage('200x100', Random.string(10),),
            Random.dataImage('200x100', Random.string(10),),
            Random.dataImage('200x100', Random.string(10),),
            Random.dataImage('200x100', Random.string(10),),
          ]
        },
        {
          anchor: Random.word(8), desc: "描述" + Random.cword(30), key: "包装展示",
          list: [
            Random.dataImage('200x100', Random.string(10),),
            Random.dataImage('200x100', Random.string(10),),
            Random.dataImage('200x100', Random.string(10),),
            Random.dataImage('200x100', Random.string(10),),
            Random.dataImage('200x100', Random.string(10),),
            Random.dataImage('200x100', Random.string(10),),
            Random.dataImage('200x100', Random.string(10),),
          ]
        },
        {
          anchor: Random.word(8), desc: "描述" + Random.cword(30), key: "服务说明",
          list: [
            Random.dataImage('200x100', Random.string(10),),
            Random.dataImage('200x100', Random.string(10),),
            Random.dataImage('200x100', Random.string(10),),
            Random.dataImage('200x100', Random.string(10),),
            Random.dataImage('200x100', Random.string(10),),
            Random.dataImage('200x100', Random.string(10),),
            Random.dataImage('200x100', Random.string(10),),
          ]
        }]
    },
    itemInfo: {},
    itemParams: {
      info: { anchor: Random.word(8), key: "产品参数", set: {} },
      rule: { anchor: Random.word(8), disclamer: "以上尺寸为实物人工测量，因测量当时不同会有1-2cm的误差，相关数据只做参考" },
      tables: [["尺寸", "M适合95-110斤|"], ["臀围", "M适合95-110斤|"], ["腰围", "M适合95-110斤|"]]
    },
    rate: {
      cRate: Random.string("number", 1, 5),
      list: [{ content: "评论" + Random.cword(8, 100), created: Random.string("number", 10) }]
    },
    shopInfo: {
      allGoodsUrl: Random.url(),
      cFans: Random.string('number', 5),
      cGoods: Random.string('number', 3, 5),
      cSells: Random.string('number', 6),
      categorigs: [{}, {}, {}, {}, {}, {},],
      isMarked: Random.boolean(),
      level: Random.string('number', 1),
      name: Random.cword(2, 5),
      score: [
        { isBetter: Random.boolean(), name: "描述相符", score: 4.64 },
        { isBetter: Random.boolean(), name: "价格合理", score: 5 },
        { isBetter: Random.boolean(), name: "质量满意", score: 4.43 },],
      servivices: [{}, {}, {}, {}, {},],
      shopId: Random.string(6),
      shopLogo: Random.image('100x100', 'Logo'),
      shopUrl: Random.url(),
      type: Random.increment(),
      userId: Random.string(6),

    },
    skuInfo: {},
    topBar: {}

  }
  let datalist = o
  return {
    datalist: datalist
  }
}
export function hometarbar() {
  const o = [
    { title: "首页", image1: "/img/tb1true.png", image2: "/img/tb2true.png" },
    { title: "商城", image1: "/img/tb3true.png", image2: "/img/tb4true.png" },
    { title: "优惠", image1: "/img/tb5true.png", image2: "/img/tb6true.png" },
    { title: "个人中心", image1: "/img/tb7true.png", image2: "/img/tb8true.png" }
  ]
  return o
}
export function homeswiper() {
  const o = {
    homeSwiper: [
      "/img/hw0true.jpg",
      "/img/hw1true.jpg",
      "/img/hw2true.jpg",
      "/img/hw3true.png",
      "/img/hw4true.png",
      "/img/hw5true.jpg",
    ],
    homeRecommend: [
      { images: "/img/hr0true.png", title: "话费充值" },
      { images: "/img/hr1true.png", title: "流量充值" },
      { images: "/img/hr2true.png", title: "账单查询" },
      { images: "/img/hr3true.png", title: "套餐余量" },
      { images: "/img/hr4true.png", title: "已订业务" },
      { images: "/img/hr5true.png", title: "国漫专区" },
      { images: "/img/hr6true.png", title: "5G专区" },
      { images: "/img/hr7true.png", title: "买手机" },
      { images: "/img/hr8true.png", title: "办业务" },
      { images: "/img/hr9true.png", title: "选靓号" },
    ],
    familyJoin: {
      title: "全家享",
      goods: [
        { tedian: "宽带装新", h2: "家居必备", image: "/img/fi0true.png" },
        { tedian: "全国亲情网", h2: "成员多至19人", image: "/img/fi1true.png" }]
    },
    phone: {
      title: "终端推荐",
      color: "#fd4c82",
      goods: [
        { price: 1899, name: "华为畅享20Pro", image: "/img/ph0true.png" },
        { price: 3598, name: "vivo iQOO7", image: "/img/ph1true.png" },
        { price: 2900, name: "华为畅享20Pro", image: "/img/ph2true.png" },
        { price: 1344, name: "vivo iQOO7", image: "/img/ph3true.png" },
      ]
    },
    business: {
      title: "业务推荐",
      color: "#9832ff",
      more: "更多业务",
      goods: [
        { dis: "月末流量包", dis1: "月末流量救急", image: "/img/bus0true.png" },
        { dis: "流量小时套餐", dis1: "流量救急", image: "/img/bus0true.png" },
      ]
    },
    phoneNumber: {
      title: "号卡推荐",
      color: "#23b3e9",
      goods: [
        { images: "/img/hr1true.png", p1: "4G专区", p2: "移动4G就是快" },
        { images: "/img/hr2true.png", p1: "VoLTE专区", p2: "4G视频通话服务" },
      ],
      recommend: [{ images: "/img/hr0true.png", p1: "4G靓号", p2: "号码随心选" },]
    },
    feature: {
      title: "特色专区",
      color: "#117dea",
      goods: [
        { p1: "国际 / 港澳台", p2: "畅游各地不断网", images: "/img/hr0true.png" },
        { p1: "活动专区", p2: "用户福利全在这里", images: "/img/hr1true.png" },
        { p1: "宽带专区", p2: "百兆宽带优惠享", images: "/img/hr2true.png" },
        { p1: "手机病毒预警", p2: "保护个人信息安全", images: "/img/hr3true.png" },
        { p1: "5G专区", p2: "5G时代看移动", images: "/img/hr4true.png" },
        { p1: "资费专区", p2: "自由选择，随心组合", images: "/img/hr5true.png" },
        { p1: "流量可选包", p2: "便捷您为先，服务在", images: "/img/hr6true.png" },
        { p1: "月末流量包", p2: "两档任您选", images: "/img/hr7true.png" },
      ]
    },
    favourite: {
      title: "猜你喜欢",
      color: "#e40077",
      goods: [
        { p1: "百度包9元15GB", p2: "", image: "/img/fav0true.png" },
        { p1: "自选套餐- 彩信包", p2: "", image: "/img/fav1true.png" },
        { p1: "气象预报", p2: "", image: "/img/fav2true.png" },
        { p1: "【移动商城】一加 OnePlus 8 Pro 5G手机", p2: "承诺在网24个月 信用购机至高优惠4180元", image: "/img/fav3true.png" },
        { p1: "【全球通优惠购】iPhone 12 Pro 5G全网通", p2: "全球通客户承诺在网6个月购机优惠500元", image: "/img/fav4true.png" },
        { p1: "【移动商城】iPhone 12 Pro Max 公开版", p2: "承诺在网6个月购机", image: "/img/fav5true.png" },
      ]
    }


























  }
  return o
}
export function discounts() {
  const o = {
    header: "优惠",
    title: "欢迎来到中国移动掌上营业厅",
    goods: [
      { image: " /img/discounts1true.jpg", title: "5G靓号重磅上线" },
      { image: " /img/discounts2true.jpg", title: "超100款APP免流" },
      { image: " /img/discounts3true.jpg", title: "孝心卡" },
      { image: " /img/discounts4true.jpg", title: "动感地带M" },
      { image: " /img/discounts5true.jpg", title: "动感地带Xback卡" },
      { image: " /img/discounts6true.jpg", title: "宽带一键报装" },
      { image: " /img/discounts7true.jpg", title: "浏览页面抽大奖！" },
      { image: " /img/discounts8true.jpg", title: "您的积分使用了吗？" },
      { image: " /img/discounts9true.jpg", title: "夏日积分嘉年华" },
      { image: "/img/discounts10true.jpg", title: "原来这就是快乐星球" },
      { image: "/img/discounts11true.jpg", title: "全球通卡路里大作战" },
      { image: "/img/discounts12true.jpg", title: "积分兑话费" },
      { image: "/img/discounts13true.jpg", title: "高效办公，音乐随行" },
      { image: "/img/discounts14true.jpg", title: "全网独家！权威上新！" },
      { image: "/img/discounts15true.jpg", title: "美食有礼，开通就领" },
      { image: "/img/discounts16true.jpg", title: "和粉答人" },
      { image: "/img/discounts17true.jpg", title: "0.6元/天开学特惠" },
      { image: "/img/discounts18true.jpg", title: "爱奇艺首月1分钱" },
      { image: "/img/discounts19true.jpg", title: "奇闻妙趣学古诗" },
      { image: "/img/discounts20true.jpg", title: "健康权益0元随心领" },
      { image: "/img/discounts21true.jpg", title: "儿童诗词群英会开启！" },
      { image: "/img/discounts22true.jpg", title: "网课随心选五一送礼" },
      { image: "/img/discounts23true.jpg", title: "欢迎来到中国移动掌上营业厅去登录" },
      { image: "/img/discounts24true.jpg", title: "首月1分起免流追剧" },
      { image: "/img/discounts25true.jpg", title: "首月1分起免流追剧" },
      { image: "/img/discounts26true.jpg", title: "1元随心追剧" },
      { image: "/img/discounts27true.jpg", title: "金秋特惠放大招" },
      { image: "/img/discounts28true.jpg", title: "腾讯视频1分钱购" },
      { image: "/img/discounts29true.jpg", title: "优酷视频1分购" },
      { image: "/img/discounts30true.jpg", title: "阿里系专属流量来啦！" },
      { image: "/img/discounts31true.jpg", title: "免流畅玩哔哩哔哩！" },
      { image: "/img/discounts32true.jpg", title: "百度爱奇艺流量包来啦" },
    ]
  }
  return o
}
export function profile() {
  const o = {
    image: ["/img/proswp0true.png", "/img/proswp1true.png", "/img/proswp2true.png",]
  }
}









