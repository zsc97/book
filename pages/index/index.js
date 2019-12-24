//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    flag:true,
    flag1:true,
    
    title1:{
        titlename:"分类排行",
        titlemore:"查看全部 >",
        titleurl: "../logs/logs"
      },
    title2:{
      titlename:"作者排行",
      titlemore:"查看全部 >",
      titleurl: "../logs/logs"
    },
    title3:{
      titlename:"新发布",
      titlemore:"查看全部 >",
      titleurl: "../logs/logs"
    },
    title4:{
      titlename:"热门搜索",
    },
    title5:{
      titlename:"热销榜",
      titlemore:"查看全部 >",
      titleurl: "../logs/logs"
    },
    hotsearch:[
      {
        name:"2018排行榜",
        color:"#c3446e",
        url: "../logs/logs"
      },
      {
        name:"职场热门",
        color:"#4c906d",
        url: "../logs/logs"
      },

      {
        name:"都市言情",
        color:"#ec575e",
        url: "../logs/logs"
      },
      {
        name:"哈佛大学经济管理类",
        color:"#875cd9",
        url: "../logs/logs"
      },
      {
        name:"领导才能",
        color:"#ded658",
        url: "../logs/logs"
      },
    ],
    rankList:[],
    authorList:[],
    bookList:[]
  },
  onLoad:function(){
    
    requestData:{
      let that = this;
      let req = function(obj){
        return new Promise((resolve,reject)=>{
          wx.request({
            url: obj.url,
            data: obj.data,
            // header: { "Content-Type": "application/x-www-form-urlencoded" },
            method: obj.method == undefined ? "get" : obj.method,
            success: function (data) {
              // 回调成功执行resolve
              resolve(data)
            },
            fail: function (data) {
              // 回调失败时
              if (typeof reject == 'function') {
                reject(data);
              } else {
                console.log(data);
              }
            },
          })
        })
      }
      let req1 = req({
        url:"https://wujunhui.xyz/getfenleilist",
        data:{},
      }).then(function(res){ 
        // console.log(app)
        app.globalData.rankList = res.data;
        console.log(res.data)
        that.setData({
          rankList:app.globalData.rankList 
        })    
      })
     
      let req2 = req({
        url:"https://wujunhui.xyz/getwriters",
        data:{}
      }).then(function(res){
        app.globalData.authorList = res.data;
        console.log(res.data)
        that.setData({
          authorList:app.globalData.authorList
        })
  
      })
      let req3 = req({
        url:"https://wujunhui.xyz/getbooks",
        data:{}
      }).then(function(res){
        app.globalData.bookList = res.data;
        that.setData({
          bookList:app.globalData.bookList
        })
      })
    }

  },
  onShow:()=>{
   
  }
   
})
