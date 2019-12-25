//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    //请求数据
    
   
    // console.log(this.globalData.checkLoad)
  },
  rankList:function(){
    return new Promise((resolve,reject)=>{
      wx.request({
        url: "https://wujunhui.xyz/getfenleilist",
        data: {},
        // header: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "get",
        success: (res)=> {
          // 回调成功执行resolve
          this.globalData.rankList = res.data;
          resolve(this.globalData.rankList)
        },
        fail: function (data) {
          // 回调失败时
          if (typeof reject == 'function') {
            reject(this.globalData.rankList);
          } else {
            console.log(data);
          }
        },
      })
    
    })
  },
  authorList:function(){
    return new Promise((resolve,reject)=>{
      wx.request({
        url:"https://wujunhui.xyz/getwriters",
        data: {},
        // header: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "get",
        success: (res)=> {
          // 回调成功执行resolve
          this.globalData.authorList = res.data;
          resolve(this.globalData.authorList)
        },
        fail: function (data) {
          // 回调失败时
          if (typeof reject == 'function') {
            reject(this.globalData.authorList);
          } else {
            console.log(data);
          }
        },
      })
    
    })
  },
  bookList:function(){
    return new Promise((resolve,reject)=>{
      wx.request({
        url:"https://wujunhui.xyz/getbooks",
        data: {},
        // header: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "get",
        success: (res)=> {
          // 回调成功执行resolve
          this.globalData.bookList = res.data;
          resolve(this.globalData.bookList)
        },
        fail: function (data) {
          // 回调失败时
          if (typeof reject == 'function') {
            reject(this.globalData.bookList);
          } else {
            console.log(data);
          }
        },
      })
    
    })
  },
  hotSearch:function(){
    return new Promise((resolve,reject)=>{
      wx.request({
        url:"https://wujunhui.xyz/gethostser",
        data: {},
        // header: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "get",
        success: (res)=> {
          // 回调成功执行resolve
          this.globalData.hotSearch = res.data;
          resolve(this.globalData.hotSearch)
        },
        fail: function (data) {
          // 回调失败时
          if (typeof reject == 'function') {
            reject(this.globalData.hotSearch);
          } else {
            console.log(data);
          }
        },
      })
    
    })
  },
  
  globalData: {
    rankList:[],
    authorList:[],
    bookList:[],
    hotSearch:[],
  }
})