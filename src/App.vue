<template>
  <div id="app">
    <d-button type="primary" @click="login">登录</d-button>
    <d-button type="success" @click="isShow = true">显示弹窗</d-button>
    <d-button type="danger" @click="isShow = false">关闭弹窗</d-button>
    <d-button type="primary" disabled>禁用</d-button>
    <d-button type="text">文本按钮</d-button>
    <d-dialog :show.sync="isShow" msg="这是一段测试文字!!" />
  </div>
</template>

<script>
import DButton from "./components/DButton/index";
import DDialog from "@/components/DDialog";

export default {
  name: "App",
  components: {
    DDialog,
    DButton,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    login() {
      alert("点击登录按钮!");
    },
  },
};
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
