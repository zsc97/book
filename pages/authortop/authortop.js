// pages/authortop/authortop.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
 
  data: {
    title1: {
      titlename:"热门作者",
      titlemore:"查看全部 >",
      titleurl: "../logs/logs"
    },
    title2: {
      titlename:"新晋作者",
      titlemore:"查看全部 >",
      titleurl: "../logs/logs"
    },
    title3: {
      titlename:"其他作者",
      titlemore:"查看全部 >",
      titleurl: "../logs/logs"
    },
    rankList: [],
    topauthor: [],
    guanzhu: [
      { no: "+关注" },
      {yes:"已关注"}
    ]
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
    
    console.log(app.globalData.authorList)
    this.setData({
      rankList: app.globalData.authorList,
      topauthor: app.globalData.authorList.filter(function (item, index) {
        return index < 3;
      })
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