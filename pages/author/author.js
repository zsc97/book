// pages/author/author.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    author: [],
    book: [],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.authorList)
    console.log(app.globalData.bookList)

    let newauthor = app.globalData.authorList.filter((item, index)=> {
      if (item.name === this.options.name) {
        return item;
      }
    })
    let newbook = app.globalData.bookList.filter((item, index)=> {
      if (item.writername === this.options.name) {
        return item;
      }
    })
    this.setData({
      author: newauthor,
      book:newbook
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