// pages/classifydetail/classifydetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title1: {
      titlename:"新上架",
      titlemore:"查看全部 >",
      titleurl: "../classifydetail/classifydetail"
    },
    title2: {
      titlename:"热门",
      titlemore:"查看全部 >",
      titleurl: "../classifydetail/classifydetail"
    },
    rankList:[],
    bookList:[]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(getApp().globalData.rankList)
    this.setData({
      rankList: getApp().globalData.rankList,
      bookList: getApp().globalData.bookList
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