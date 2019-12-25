// pages/bookdetail/bookdetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:true,
    flag1:true,
    bookList:[]
  },
  collect(){
    console.log(111)
  },
  share(){
    this.setData({
      flag1:false
    })
    console.log(111)
  },
  putIn(){
    console.log(111)
    this.setData({
      flag:false
    })
  },
  lookPage(){
    console.log(111)
  },
  lookAll(){
    wx.navigateTo({
      url: '../comment/comment',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    console.log(111)
  },
  writeComment(){
    console.log(111)
  },
  like(){
    console.log(111)
  },
  replay(){
    console.log(111)
  },
  tryLook(){
   
  },
  buy(){
    console.log(111)
  },
  okey(){
    this.setData({
      flag:true
    })
    console.log(111)
  },
  close(){
    this.setData({
      flag1:true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      bookList:app.globalData.bookList.filter((item,index)=>{
      return item.bookname === options.name
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