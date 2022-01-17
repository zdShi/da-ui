<template>
  <transition name="show-dialog" appear>
    <div class="d-dialog" v-if="this.show">{{ this.msg }}</div>
  </transition>
</template>

<script>
export default {
  name: 'DDialog',
  props: {
    //弹窗的消息内容
    msg: { type: String, default: '这是一条弹窗消息!' },
    //是否显示弹窗
    show: {
      type: Boolean,
      default: false
    },
    //设置持续时间
    duration: {
      type: Number,
      default: 2000
    }
  },
  watch: {
    show() {
      // console.log(this.show)
      !this.show || this.autoClose()
    }
  },
  data() {
    return {
      timer: null
    }
  },
  mounted() {
    !this.show || this.autoClose()
  },
  methods: {
    // 自动关闭
    autoClose() {
      if (this.duration !== 0 && this.show === true) {
        this.timer = setTimeout(() => {
          this.$emit('update:show', false)
        }, this.duration + 500)
      }
    }
  },
  beforeUpdate() {},
  beforeDestroy() {
    //清理定时器
    clearTimeout(this.timer)
  }
}
</script>

<style scoped>
.d-dialog {
  width: 30%;
  height: 40px;
  line-height: 40px;
  position: fixed;
  top: 15px;
  margin: 0 auto;
  border-radius: 10px;
  left: 0;
  right: 0;
  background-color: silver;
  color: #ffffff;
}
.show-dialog-enter,
.show-dialog-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.show-dialog-enter-active,
.show-dialog-leave-active {
  transition: 0.5s;
}
</style>
