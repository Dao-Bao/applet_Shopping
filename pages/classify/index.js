var app = getApp()
var that

Page({
  data: {
    imgUrls: [
      'https://s1.ax1x.com/2020/07/06/UCmZQ0.jpg',
      'https://s1.ax1x.com/2020/07/06/UCmPoQ.jpg',
      'https://s1.ax1x.com/2020/07/06/UCivHs.jpg'
    ],
    autoplay: true,
    interval: 5000,
    duration: 500,
    swiperCurrent: 0,
    // 左侧菜单列表
    leftClassesMenuList: [{
      id: 1,
      name: '掌柜推荐'
    }, {
      id: 2,
      name: '甄选鲜果'
    }, {
      id: 3,
      name: '牛奶饮料'
    }, {
      id: 4,
      name: '干果'
    }, {
      id: 5,
      name: '优质榴莲'
    }],
    // 左侧菜单选中item
    selectedLeftMenuItem: 1,
    // 商品列表
    productList: [{
      cateId: 1,
      cateName: '掌柜推荐',
      goodsList: [{
        goodsId: 11,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/03/NXqQOA.jpg',
        goodsName: '新鲜大芒果',
        goodsSpecifiate: '125g*2盒',
        goodsSellmessage: '85',
        goodsSurplusMessage: '11',
        goodsPayprice: '24.90',
      }, {
        goodsId: 12,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/07/UFW0Yt.jpg',
        goodsName: '苹果',
        goodsSpecifiate: '125g*2盒',
        goodsSellmessage: '43',
        goodsSurplusMessage: '57',
        goodsPayprice: '15.90',
      }, {
        goodsId: 13,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/03/NXLl3F.jpg',
        goodsName: '香蕉',
        goodsSpecifiate: '125g*2把',
        goodsSellmessage: '66',
        goodsSurplusMessage: '34',
        goodsPayprice: '20.90'
      }]
    }, {
      cateId: 2,
      cateName: '甄选鲜果',
      goodsList: [{
        goodsId: 21,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UCoYgf.jpg',
        goodsName: '新疆哈密瓜',
        goodsSpecifiate: '125g*1个',
        goodsSellmessage: '71',
        goodsSurplusMessage: '29',
        goodsPayprice: '16.99'
      }, {
        goodsId: 22,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UCoxIA.jpg',
        goodsName: '猕猴桃',
        goodsSpecifiate: '125g*2盒',
        goodsSellmessage: '66',
        goodsSurplusMessage: '34',
        goodsPayprice: '15.01'
      }, {
        goodsId: 23,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UCTuR0.jpg',
        goodsName: '西瓜',
        goodsSpecifiate: '3kg*1个',
        goodsSellmessage: '68',
        goodsSurplusMessage: '32',
        goodsPayprice: '12.33'
      }]
    }, {
      cateId: 3,
      cateName: '牛奶饮料',
      goodsList: [{
        goodsId: 31,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UC7PYR.png',
        goodsName: '特仑苏牛奶',
        goodsSpecifiate: '12个/箱',
        goodsSellmessage: '55',
        goodsSurplusMessage: '45',
        goodsPayprice: '55.10'
      }, {
        goodsId: 32,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UC7MtA.jpg',
        goodsName: '安慕希酸奶',
        goodsSpecifiate: '12个/箱',
        goodsSellmessage: '60',
        goodsSurplusMessage: '40',
        goodsPayprice: '58.00'
      }, {
        goodsId: 33,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UC7N7Q.jpg',
        goodsName: '纯甄酸奶',
        goodsSpecifiate: '12个/箱',
        goodsSellmessage: '53',
        goodsSurplusMessage: '47',
        goodsPayprice: '56.00'
      }]
    }, {
      cateId: 4,
      cateName: '干果',
      goodsList: [{
        goodsId: 41,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UCHKDU.jpg',
        goodsName: '巴旦木',
        goodsSpecifiate: '250g*1袋',
        goodsSellmessage: '57',
        goodsSurplusMessage: '43',
        goodsPayprice: '45.00'
      }, {
        goodsId: 42,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UCHKDU.jpg',
        goodsName: '巴旦木',
        goodsSpecifiate: '250g*1袋',
        goodsSellmessage: '57',
        goodsSurplusMessage: '43',
        goodsPayprice: '45.00'
      }, {
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UCHKDU.jpg',
        goodsName: '巴旦木',
        goodsSpecifiate: '250g*1袋',
        goodsSellmessage: '57',
        goodsSurplusMessage: '43',
        goodsPayprice: '45.00'
      }]
    }, {
      cateId: 5,
      cateName: '优质榴莲',
      goodsList: [{
        goodsId: 51,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UCbJoQ.jpg',
        goodsName: '泰国榴莲',
        goodsSpecifiate: '250g*1块',
        goodsSellmessage: '70',
        goodsSurplusMessage: '30',
        goodsPayprice: '30.00'
      }, {
        goodsId: 52,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UCbJoQ.jpg',
        goodsName: '泰国榴莲',
        goodsSpecifiate: '250g*1块',
        goodsSellmessage: '70',
        goodsSurplusMessage: '30',
        goodsPayprice: '30.00'
      }, {
        goodsId: 53,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UCbJoQ.jpg',
        goodsName: '泰国榴莲',
        goodsSpecifiate: '250g*1块',
        goodsSellmessage: '70',
        goodsSurplusMessage: '30',
        goodsPayprice: '30.00'
      }]
    }],
    toView: '', // 把第几个商品分类滚动到顶部
    address: '点击选择位置'
  },
  onLoad: function (options) {
    that = this
    that.getCategoryItemsConnection()
  },
  /* 轮播 */
  swiperChange: function (e) {
    let {current, source} = e.detail
    if (source === 'autoplay' || source === 'touch') {
      this.setData({
        swiperCurrent: e.detail.current
      })
    }
  },
  /* 点击选择位置 */
  handleAddressClick () {
    wx.getSetting({
      success (res) {
        // console.log('res是否开启授权', res)
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success () {
              // console.log('前用户发起授权请求')
              wx.chooseLocation({
                success: res => {
                  that.setData({
                    address: res.address
                  })
                  // console.log('打开地图选择位置确定', res)
                },
                fail: res => {
                  // console.log('打开地图选择位置取消', res)
                }
              })
            },
            fail () {
              // 用户重新获取授权
              that.fetchAgainLocation()
            }
          })
        } else {
          // 已经授权,直接进入地图
          wx.chooseLocation({
            success: res => {
              that.setData({
                address: res.address
              })
            //  console.log('打开地图选择位置确定', res)
            },
            fail: res => {
            // console.log('打开地图选择位置取消', res)
            }
          })
        }
      }
    })
  },
  fetchAgainLocation () {
    let that = this
    wx.getSetting({
      success: (res) => {
        var statu = res.authSetting
        if (!statu['scope.userLocation']) {
          wx.showModal({
            title: '是否授权当前位置',
            content: '需要获取您的地理位置，请确认授权，否则地图功能将无法使用',
            success: (tip) => {
              if (tip.confirm) {
                wx.openSetting({
                  success: (data) => {
                    if (data.authSetting["scope.userLocation"] === true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      wx.chooseLocation({
                        success: res => {
                          that.setData({
                            address: res.address
                          })
                          // console.log('打开地图选择确定', res)
                        }
                      })
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'success',
                        duration: 1000
                      })
                    }
                  },
                  fail: () => {},
                  complete: () => {}
                })
              }
            }
          })
        }
      },
      fail: () => {},
      complete: () => {}
    })
  },
  // 左侧菜单栏切换事件
  selectClassesClick: function (e) {
    let dataset = e.currentTarget.dataset
    let id = dataset.id
    that.setData({
      selectedLeftMenuItem: id,
      toView: 'productItem' + id
    })
  },
  // 监听右边商品列表滑动
  scrollProductList (e) {
    // console.log(e)
    that.data.productList.forEach(item => {
      if (e.detail.scrollTop >= (item.offsetTop - 355) && e.detail.scrollTop <= (item.offsetTop - 355 + item.height)) {
        that.setData({
          selectedLeftMenuItem: item.cateId
        })
        // console.log("selectedLeftMenuItem===", that.data.selectedLeftMenuItem)
      }
    })
  },
  // 获取右侧商品列表
  getCategoryItemsConnection: function () {
    let dataSource = that.data.productList
    let leftClassesMenuList = that.data.leftClassesMenuList
    that.setData({
      selectedLeftMenuItem: leftClassesMenuList[0] ? leftClassesMenuList[0].id : '',
      toView: leftClassesMenuList[0] ? 'productItem' + leftClassesMenuList[0].id : ''
    })
    // console.log("that.data.productList===", that.data.productList)
    // 给右侧商品列表循环赋值列表项的上边界坐标和高度
    that.data.productList.forEach(item => {
      // console.log("item===", item)
      // 添加节点的布局位置的查询请求
      wx.createSelectorQuery().select('#productItem' + item.cateId).boundingClientRect(rect => {
        // console.log(rect.top, "rect.top===")
        item.offsetTop = rect.top
        item.height = rect.height
      }).exec()
    })
  }
  /* 加数 */
  /* 减数 */
})