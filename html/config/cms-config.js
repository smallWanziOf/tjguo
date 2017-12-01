CMSConfig = {
  loginRegisterBanner: '/images/login.jpg',
  passwordFindBanner: '/images/login.jpg',
  categories: [],
  pages: [
  {
    path: '/',
    title: '首页',
    tplt: 'HeaderFooterTemplate',
    components: {
      'section1': {
        component: 'Slider',
        props: {
          slider: true,
          items: [{
            advertImageUrl: '/images/Home/index-joinbackground.jpg',
            href: ''
          },{
            advertImageUrl: '/images/Home/index-joinbackground.jpg',
            href: ''
          },{
            advertImageUrl: '/images/Home/index-joinbackground.jpg',
            href: ''
          }]
        }
      },
      'section2': {
        component: 'Notice',
        props: {
          notice: true,
          items: [{
            text: '王的网促销公告',
            href: ''
          },{
            src: '王的网打折公告',
            href: ''
          },{
            src: '王的网免费送货公告',
            href: ''
          },{
            src: '王的网物流公告',
            href: ''
          },{
            src: '王的网会员公告',
            href: ''
          }]
        }
      },
      'section3': {
        component: 'Business',
        props: {
          business:true,
          html: '<div class="conMall1">• <span style="color:#000">包装商城</span> Packaging mall</div><img src="/images/Home/img_01.png"/>'
        }
      },
      'section4': {
        component: 'SliderMid',
        props: {
          sliderMid:true,
          items: [{
            advertImageUrl: '',
            href: ''
          },{
            advertImageUrl: '',
            href: ''
          },{
            advertImageUrl: '',
            href: ''
          }]
        }
      },
      'section5': {
        component: 'Financing',
        props: {
          financing:true,
        },
      },
      'section6': {
        component: 'League',
        props: {
          league:true,
        },
      }
    }
  },
  {
    path: '/product-list.html',
    title: '产品列表',
    tplt: 'ProductListTemplate'
  },
  {
    path: '/product-detail.html',
    title: '产品详情',
    tplt: 'ProductDetailTemplate'
  },
  {
    path: '/product-channels.html',
    title: '产品频道',
    tplt: 'ProductChannelsTemplate'
  },
  {
    path: '/cart.html',
    title: '购物车',
    tplt: 'CartTemplate'
  }],
}
