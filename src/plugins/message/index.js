import DDialog from '@/components/DDialog/index.vue'
import { createDDialog } from '@/components/DDialog/index.js'

export default {
  install(Vue) {
    //再全局注册组件
    Vue.component(DDialog.name, DDialog)
    //在原型上添加创建组件的方法
    Vue.prototype.$dDialog = createDDialog
  }
}
