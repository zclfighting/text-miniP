// components/w-topback/w-topback.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
      backtop(){
        wx:wx.pageScrollTo({
          scrollTop: 0,
          duration: 100
        })
      }
  }
})
