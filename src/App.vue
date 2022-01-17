<template>
  <div id="app">
    <d-button type="primary" @click="login">登录</d-button>
    <d-button type="success">注册</d-button>
    <d-button type="danger">危险</d-button>
    <d-button type="primary" disabled>禁用</d-button>
    <d-button type="text">文本按钮</d-button>
  </div>
</template>

<script>
import DButton from "./components/DButton/index";

export default {
  name: "App",
  components: {
    DButton,
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
