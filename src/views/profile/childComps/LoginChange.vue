<template>
  <div class="change" @click="change">
    <div class="info">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Change",
  data() {
    return {
      message: '登录切换'
    }
  },
  methods: {
    change() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .change {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 50px;

  }
  .info {
    width: 150px;
    height: 30px;
    background-color: rgb(231,231,231);
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>
