// pages/home/home.js
import {getMultiData,getGoodsData} from "../../servies/home.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
        banner:[],
        recommend:[],
        datas:["流行","新款","精选"],
        goods:{
          "pop": { page: 0, list: [] },
          "new": { page: 0, list: [] },
          "sell": { page: 0, list: [] }
        }
        
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  getMultiData().then(res=>{
    //    //console.log(res)
    //    const banner=res.data.data.banner.list;
    //    const recommend = res.data.data.recommend.list;
    //    console.log(banner, recommend);
    //    this.setData({
    //      banner,
    //      recommend
    //    })
    //  })
    this._getMultiData();

    this._getGoodsData("pop")
    this._getGoodsData("new")
    this._getGoodsData("sell")
  },
  // 轮播图及推荐数据请求
  _getMultiData(){
    getMultiData().then(res => {
      //console.log(res)
      const banner = res.data.data.banner.list;
      const recommend = res.data.data.recommend.list;
      console.log(banner, recommend);
      this.setData({
        banner,
        recommend
      }) 
    })
  },
  _getGoodsData(type){
    const page= this.data.goods[type].page+1
     getGoodsData(type,page).then(res=>{
      console.log(res);
      //const typeKey=`data.goods${type}.
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