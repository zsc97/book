// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList: [],
    total:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getApp().bookList().then(res => {
      console.log(res)
      this.setData({
      bookList:res.slice(0,3),
      })
      let sum = 0;
     let newsum = this.data.bookList.map((item, index) => {
        sum += parseInt(item.money)
     })
      console.log(this.data.bookList)
      this.setData({
        total: sum
        })
      
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})