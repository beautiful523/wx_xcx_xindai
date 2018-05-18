Page({
  /**
   * 页面的初始数据
   */
  data: {
    title:null,
    desc:null,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var desc = wx.getStorageSync('desc');
    this.setData({
      title: options.title,
      desc: desc,
    })
    
  },
})