// pages/home/home.js
import {getMultiData,getGoodsData} from "../../servies/home.js";
 
 const types=["pop","new","sell"]
 const TOP_BACK=1000
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
        },
        currenttype:"pop",
        showback:false
        
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
      //console.log(banner, recommend);
      this.setData({
        banner,
        recommend
      }) 
    })
  },
  _getGoodsData(type){
    const page= this.data.goods[type].page+1
     getGoodsData(type,page).then(res=>{
     // console.log(res);
      //1.取出数据
      const list=res.data.data.list;
       //
       const oldList=this.data.goods[type].list;
       oldList.push(...list);
        //放入setData
        const listKey=`goods.${type}.list`
        const pageKey=`goods.${type}.page`
        this.setData({
             [listKey]:oldList,
             [pageKey]:page
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
     this._getGoodsData(this.data.currenttype);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handletab(event){
    
    const index=event.detail.index;
    //console.log(index);
    this.setData({
      currenttype:types[index]
    })
  },
  //监听页面滚动条
  onPageScroll(options){
    //console.log(options)
    const flag=options.scrollTop >=TOP_BACK
    if(flag!=this.data.showback){
      this.setData({
        showback:flag
      })
    }
  }
})