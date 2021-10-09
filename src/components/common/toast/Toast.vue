<template>
  <div class="toast" v-show="isShow">
    <img src="~assets/img/detail/success.svg" alt="加购成功图片" class="right">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "Toast",
  // props: {
  //   message: {
  //     type: String,
  //     default: ''
  //   },
  //   isShow: {
  //     type: Boolean,
  //     default: false
  //   }
  //
  // }

  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message, delay=1800) {
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.message = ''
        this.isShow = false
      }, delay)
    }
  }
}
</script>

<style scoped>
 .toast {
   display: flex;
   justify-content:center;
   align-items:center;
   flex-direction: column;
   /*height: 80px;*/
   z-index: 2;
   position: fixed;
   top: 50%;
   /*bottom: 50%;*/
   left: 50%;
   /*right: 50%;*/
   transform: translate(-50%, -50%);
   color: white;
   padding: 5px 10px;
   border-radius: 5px;
   background-color: rgba(0, 0, 0, 0.8);
 }
 .right{
   height: 64px;
   width: 64px;
   margin: 8px 0;
 }
</style>
