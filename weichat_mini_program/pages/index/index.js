//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true, //轮播图的三个点
    autoplay: true,
    interval: 5000,
    duration: 1000,
    pro_list:null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getProList()
  },
  to_detail: function(e){
    var index = e.currentTarget.dataset.aaa;
    var proList = this.data.pro_list;
    var title = proList[index].title;
    var desc = proList[index].desc;
    
    wx.navigateTo({
      url: '/pages/detail/detail?title='+title,
    });
    wx.setStorageSync('desc', desc)
  },
  getProList: function(){
    var self = this;
    wx.request({
      url: app.globalData.host,
      method:'GET',
      success: function(res){
        self.setData({
          pro_list: res.data
        })
      },
      fail:function(){
        console.log(111)
      }
    })
  }
})
