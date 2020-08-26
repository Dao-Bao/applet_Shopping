// pages/shopcart/shopcart.js
Page({
  data: {
    goodList: [
      {
        goodsId: 11,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/03/NXqQOA.jpg',
        goodsName: '新鲜大芒果',
        goodsSpecifiate: '125g*2盒',
        goodsPayprice: '24.90',
        count: 1,
        checked: false
      }, {
        goodsId: 12,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/07/UFW0Yt.jpg',
        goodsName: '苹果',
        goodsSpecifiate: '125g*2盒',
        goodsPayprice: '15.90',
        count: 1,
        checked: false
      }, {
        goodsId: 13,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/03/NXLl3F.jpg',
        goodsName: '香蕉',
        goodsSpecifiate: '125g*2把',
        goodsPayprice: '20.90',
        count: 1,
        checked: false
      }, {
        goodsId: 21,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UCoYgf.jpg',
        goodsName: '新疆哈密瓜',
        goodsSpecifiate: '125g*1个',
        goodsPayprice: '16.99',
        count: 1,
        checked: false
      }, {
        goodsId: 22,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UCoxIA.jpg',
        goodsName: '猕猴桃',
        goodsSpecifiate: '125g*2盒',
        goodsPayprice: '15.01',
        count: 1,
        checked: false
      }, {
        goodsId: 23,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UCTuR0.jpg',
        goodsName: '西瓜',
        goodsSpecifiate: '3kg*1个',
        goodsPayprice: '12.33',
        count: 1,
        checked: false
      }, {
        goodsId: 31,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UC7PYR.png',
        goodsName: '特仑苏牛奶',
        goodsSpecifiate: '12个/箱',
        goodsPayprice: '55.10',
        count: 1,
        checked: false
      }, {
        goodsId: 32,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UC7MtA.jpg',
        goodsName: '安慕希酸奶',
        goodsSpecifiate: '12个/箱',
        goodsPayprice: '58.00',
        count: 1,
        checked: false
      }, {
        goodsId: 33,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UC7N7Q.jpg',
        goodsName: '纯甄酸奶',
        goodsSpecifiate: '12个/箱',
        goodsPayprice: '56.00',
        count: 1,
        checked: false
      }, {
        goodsId: 41,
        goodsImgUrl: 'https://s1.ax1x.com/2020/07/06/UCHKDU.jpg',
        goodsName: '巴旦木',
        goodsSpecifiate: '250g*1袋',
        goodsPayprice: '45.00',
        count: 1,
        checked: false
      }
    ],
    checkAll: false,
    totalCount: 0,
    totalPrice: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 计算商品总数
   */
  calculateTotal: function () {
    var goodList = this.data.goodList
    var totalCount = 0
    var totalPrice = 0
    for (var i = 0; i < goodList.length; i++) {
      var good = goodList[i]
      if (good.checked) {
        totalCount += good.count
        totalPrice += good.count * good.goodsPayprice
      }
    }
    totalPrice = totalPrice.toFixed(2)
    this.setData({
      'totalCount': totalCount,
      'totalPrice': totalPrice
    })
  },

  /**
   * 用户点击商品减1
   */
  subtracttap: function (e) {
    var index = e.target.dataset.index
    var goodList = this.data.goodList
    var count = goodList[index].count
    if (count <= 1) {
      return
    } else {
      goodList[index].count--
      this.setData({
        'goodList': goodList
      })
      this.calculateTotal()
    }
  },

  /**
   * 用户点击商品加1
   */
  addtap: function (e) {
    var index = e.target.dataset.index
    var goodList = this.data.goodList
    var count = goodList[index].count
    goodList[index].count++
    this.setData({
      'goodList': goodList
    })
    this.calculateTotal()
  },
  /**
   * 选择购物车商品
   */
  checkboxChange: function (e) {
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    var checkboxItems = this.data.goodList
    var values = e.detail.value
    for (var i = 0; i < checkboxItems.length; ++i) {
      checkboxItems[i].checked = false
      for (var j = 0; j < values.length; ++j) {
        if (checkboxItems[i].goodsId == values[j]) {
          checkboxItems[i].checked = true
          break
        }
      }
    }

    var checkAll = false
    if (checkboxItems.length == values.length) {
      checkAll = true
    }

    this.setData({
      'goodList': checkboxItems,
      'checkAll': checkAll
    })
    this.calculateTotal()
  },

  /**
   * 用户点击全选
   */
  selectalltap: function (e) {
    // console.log('用户点击全选，携带value值为：', e.detail.value)
    var value = e.detail.value
    var checkAll = false
    if (value && value[0]) {
      checkAll = true
    }

    var goodList = this.data.goodList
    for (var i = 0; i < goodList.length; i++) {
      var good = goodList[i]
      good['checked'] = checkAll
    }

    this.setData({
      'checkAll': checkAll,
      'goodList': goodList
    })
    this.calculateTotal()
  }
})