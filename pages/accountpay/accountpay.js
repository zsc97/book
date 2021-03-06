// pages/accountpay/accountpay.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money:'',
    flag:true,
    bg: "",
    userinfo:{}
  },
  getMoney(e) {
    if (e.detail.value.trim().length === 0) {
      wx.showToast({
        title: '请输入要充值的钱数',
        icon: 'none',
        duration: 2000
      })
    }
    else {
      let reg = /^[1-9]+[0-9]*$/
      if (reg.test(e.detail.value)) {
        this.setData({
          money:e.detail.value
        })
      }
      else {
        wx.showToast({
          title: '只能输入数字且不能以0开头',
          icon: 'none',
          duration: 2000
        })
      }
    }
  },
  next(){
    this.setData({
      flag:false,
      bg:"#0d1012"
    })
  },
  close(){
    this.setData({
      flag:true,
      bg:""
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      userinfo:app.globalData.userInfo
    })
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