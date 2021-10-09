<template>
  <div class="profile-set">
    <div class="item">
      <div><img src="~assets/img/profile/allorder.svg" alt=""></div>
      <div>全部订单</div>
    </div>

    <div class="item">
      <div><img src="~assets/img/profile/refund.svg" alt=""></div>
      <div>退款/售后</div>
    </div>

    <div class="item">
      <div><img src="~assets/img/profile/shopscollect.svg" alt=""></div>
      <div>店铺收藏</div>
    </div>

    <div class="item" @click="collectclick">
      <div><img src="~assets/img/profile/goodscollect.svg" alt=""></div>
      <div>宝贝收藏</div>
    </div>

    <div class="item">
      <div><img src="~assets/img/profile/vip.svg" alt=""></div>
      <div>会员中心</div>
    </div>

    <div class="item">
      <div><img src="~assets/img/profile/customer-service.svg" alt=""></div>
      <div>专属客服</div>
    </div>

    <div class="item">
      <div><img src="~assets/img/profile/address.svg" alt=""></div>
      <div>收货地址</div>
    </div>

    <div class="item">
      <div><img src="~assets/img/profile/password.svg" alt=""></div>
      <div>密码修改</div>
    </div>



  </div>
</template>

<script>
export default {
  name: "ProfileSet",
  methods: {
    collectclick() {
      this.$router.push('/collection')
    }
  }
}
</script>

<style scoped>
 .profile-set {
   height: 200px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   padding: 10px 5px;
   font-size: 13px;
   align-items: center;
   text-align: center;
   border: solid 1px rgb(231,231,231);

 }
 .item {
   width: 24%;
 }
 .item img {
   height: 32px;
   width: 32px;
   margin-bottom: 3px;
 }
</style>
