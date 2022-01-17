<script>
export default {
  name: "DButton",
  render() {
    return (
      <button class={this.btnClass} disabled={this.disabled}>
        {this.$slots.default}
      </button>
    );
  },
  props: {
    //类型, 颜色相关
    type: {
      type: String,
      default: "primary", //默认样式
      // 检测, 已有类型
      validator(value) {
        return ["primary", "success", "danger", "text"].includes(value);
      },
    },
    //是否禁用
    disable: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    //设置按钮的类
    btnClass() {
      return `btn btn-${this.type} btn-${this.size}`;
    },
  },
};
</script>
<style scoped>
.btn {
  padding: 5px 10px;
  transition-duration: 200ms;
  margin: 5px 10px;
  border-radius: 5px;
  border: none;
}
.btn:hover {
  cursor: pointer;
  box-shadow: 0 0 5px 5px #2c3e5033;
}
.btn:disabled {
  background-color: silver !important;
  color: #ffffff !important;
  cursor: not-allowed !important;
  box-shadow: 0 0 0 0 !important;
}
.btn-primary {
  background-color: orange;
  color: #fff;
}
.btn-success {
  background-color: skyblue;
  color: #ffffff;
}
.btn-danger {
  background-color: red;
  color: #ffffff;
}
.btn-text {
  background-color: transparent;
  font-weight: 600;
  box-shadow: 0 0 0 0;
}
.btn-text:hover {
  box-shadow: 0 0;
  color: blue;
}
</style>
