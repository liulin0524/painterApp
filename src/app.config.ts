export default defineAppConfig({
  pages: [
    'pages/index/index', //广场首页
    'pages/painter/index', //创作
    'pages/mine/index', //我的
    'pages/log/index', // 创作记录
    'pages/record/index', // 记录
    'pages/buy/index', // 购买
  ],
  tabBar: {
    color: '#777E99',
    selectedColor: '#3e74ca',
    backgroundColor: '#fff',
    borderStyle: 'white',
    // custom: true,
    list: [{
      iconPath: './assets/image/tabbar/tab_home.png',
      selectedIconPath: './assets/image/tabbar/tab_home_a.png',
      pagePath: 'pages/index/index',
      text: '首页'
    }, 
    {
      iconPath: './assets/image/tabbar/tab_chain.png',
      selectedIconPath: './assets/image/tabbar/tab_chain_a.png',
      pagePath: 'pages/painter/index',
      text: ''
    }, 
    {
      iconPath: './assets/image/tabbar/tab_me.png',
      selectedIconPath: './assets/image/tabbar/tab_me_a.png',
      pagePath: 'pages/mine/index',
      text: '我的'
    }],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
