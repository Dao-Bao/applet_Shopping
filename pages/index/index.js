Page({
  data: {
    inputShowed: false,
    inputVal: '',
    background: [
      'https://s1.ax1x.com/2020/06/24/NdvQ4x.jpg',
      'https://s1.ax1x.com/2020/06/24/NdxAII.jpg',
      'https://s1.ax1x.com/2020/06/28/NcHMIH.jpg',
      'https://s1.ax1x.com/2020/06/28/NcH1JA.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    beforeColor: 'white',
    afterColor: '#5ebed6',
    icon: [
      { src: 'https://s1.ax1x.com/2020/06/29/Nfic7D.png', desc: '苏宁拼购' },
      { src: 'https://s1.ax1x.com/2020/06/29/Nfic7D.png', desc: '苏宁拼购' },
      { src: 'https://s1.ax1x.com/2020/06/29/Nfic7D.png', desc: '苏宁拼购' },
      { src: 'https://s1.ax1x.com/2020/06/29/Nfic7D.png', desc: '苏宁拼购' },
      { src: 'https://s1.ax1x.com/2020/06/29/Nfic7D.png', desc: '苏宁拼购' },
      { src: 'https://s1.ax1x.com/2020/06/29/Nfic7D.png', desc: '苏宁拼购' }
    ],
    recommend: [
      'https://s1.ax1x.com/2020/06/29/Nfmz01.jpg',
      'https://s1.ax1x.com/2020/06/29/Nfnh9O.jpg'
    ],
    recommendtwo: [
      'https://s1.ax1x.com/2020/06/29/Nf109x.jpg',
      'https://s1.ax1x.com/2020/06/29/Nf1rjO.jpg'
    ],
    toprecommend: [
      {
        src: 'https://s1.ax1x.com/2020/06/29/Nfw6AK.jpg',
        desc: '绝地求生三级 时尚双肩包',
        price: '999.0',
        sell: '0'
      },
      {
        src: 'https://s1.ax1x.com/2020/06/29/NfwR9e.jpg',
        desc: '迷彩冲锋衣阿巴阿巴奔萨卡拉奔萨卡拉阿巴阿巴',
        price: '799.0',
        sell: '0'
      }
    ],
    special: [
      { src: 'https://s1.ax1x.com/2020/06/29/NfWGHe.jpg', desc: '女装专区' },
      { src: 'https://s1.ax1x.com/2020/06/29/NfWa9I.jpg', desc: '彩妆专区' },
      { src: 'https://s1.ax1x.com/2020/06/29/NfWRCn.jpg', desc: '文具专区' },
      { src: 'https://s1.ax1x.com/2020/06/29/NfWzDO.jpg', desc: '活动专区' }
    ]
  },
  showInput () {
    this.setData({
      inputShowed: true
    })
  },
  // hideInput () {
  //   this.setData({
  //     inputVal: '',
  //     inputShowed: false
  //   })
  // },
  clearInput () {
    this.setData({
      inputVal: '',
      inputShowed: false
    })
  },
  inputTyping (e) {
    this.setData({
      inputVal: e.detail.value
    })
  },
  changeIndicatorDots () {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay () {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  swiperChange (e) {
    let {current, source} = e.detail
    if (source === 'autoplay' || source === 'touch') {
      this.setData({
        currentSwiper: e.detail.current
      })
    }
  }
})