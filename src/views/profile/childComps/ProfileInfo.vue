<template>
  <div class="profile-info">
    <div class="user">
        <div class="user-head">
          <img src="~assets/img/profile/user.jpg" alt="">
        </div>
        <div>
          <div>用户:{{this.$store.state.user.username}}</div>
          <div>{{this.$store.state.user.userLevel}}</div>
        </div>
    </div>

    <div class="order">
      <div class="order-left">待付款({{this.$store.state.user.pendingPayment.length}})</div>
      <div>待确认({{this.$store.state.user.toBeConfirmed.length}})</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileInfo",
  // computed: {
  //   url() {
  //     return "~assets/img/profile/" + this.$store.state.user.headUrl
  //     // console.log("~assets/img/profile/" + this.$store.state.user.headUrl);
  //   }
  // }
}
</script>

<style scoped>
  .profile-info {
    background-color: #ffffff;
    background-image: linear-gradient(0deg, #ffffff 0%, #002fa7 100%);

    color: white;
    width: 100%;

    padding-top: 30px ;
    font-size: 15px;

  }
  .user {
    display: flex;
    justify-content:center;
    align-items:Center;
    /*margin: 20px 0;*/

  }
  .user-head img{
    height: 80px;
    width: 80px;
    border-radius: 20px;
    margin-right: 5px;
  }
  .order {
    height: 60px;
    bottom: 0;
    margin-top: 30px;
    display: flex;
    justify-content:center;
    align-items: center;
    text-align: center;
    background-color: rgba(0,0,0,0.1);
  }
  .order div {
    flex: 1;
  }
  .order-left {
    border-right: solid 1px white;
  }
</style>
