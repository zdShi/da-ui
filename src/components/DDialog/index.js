import Vue from 'vue'
import DDialog from './index.vue'

const createDDialog = propsData => {
  //创建构造器
  const Dd = Vue.extend(DDialog)
  //实例化组件
  const dd = new Dd({ propsData }).$mount()
  dd.$on('update:show', flag => {
    // console.log(dd.$el, flag)
    dd.show = flag
  })
  //添加到子节点
  document.body.appendChild(dd.$el)
  //返回弹窗的对象, 再触发位置可以获取对象, 并调用手动方法, 关闭弹窗
  return dd
}

// Vue.prototype.$dDialog = createDDialog
export { createDDialog }
