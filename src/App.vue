<template>
  <div id="app">
    <d-button type="primary" @click="login">登录</d-button>
    <d-button type="success" @click="isShow = true">显示弹窗</d-button>
    <d-button type="danger" @click="isShow = false">关闭弹窗</d-button>
    <d-button type="primary" disabled>禁用</d-button>
    <d-dialog :show.sync="isShow" msg="这是一段测试文字!!" />
    <d-button type="text" @click="showDialog">函数式调用弹窗</d-button>
    <d-button type="text" @click="closeDialog">关闭函数式弹窗</d-button>
  </div>
</template>

<script>
import DButton from './components/DButton/index'
// import DDialog from '@/components/DDialog/index.vue'

export default {
  name: 'App',
  components: {
    // DDialog,
    DButton
  },
  data() {
    return {
      isShow: false,
      //用来接收弹窗对象
      dd: null
    }
  },
  methods: {
    login() {
      alert('点击登录按钮!')
    },
    showDialog() {
      this.dd = this.$dDialog({
        msg: '这是一个函数式弹窗消息',
        show: true,
        //测试持续时间为0时, 是否可以手动控制
        duration: 0
      })
    },
    closeDialog() {
      this.dd.show = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
