// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    datas:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentindex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handletabcontrol(event){
     
     const index=event.currentTarget.dataset.index;
     this.setData({
       currentindex:index
     })
      
    }
  }
})
