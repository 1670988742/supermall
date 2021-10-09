<template>
  <div class="button-bar">
    <div class="bar">
      <div class="customer-service">
        <img src="@/assets/img/detail/customer-service.svg" alt="" class="img">
        <div>客服</div>
      </div>
      <div class="shop">
        <img src="@/assets/img/detail/shop.svg" alt="" class="img">
        <div>店铺</div>
      </div>
      <div class="collection" @click="collection">
        <img src="@/assets/img/detail/collection.svg" alt="未收藏"
             v-show="isCollectionShow" class="img">
        <img src="@/assets/img/detail/collection-right.svg" alt="收藏"
             v-show="!isCollectionShow"  class="img">
         <div>收藏</div>
      </div>
    </div>


    <div class="bar bar-right" >
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailButtonBar",
  props: {
    id: {
      default: ''
    }
  },
  // data() {
  //   return{
  //     isCollectionShow: false
  //   }
  // },
  computed: {
    isCollectionShow() {
      return !(this.$store.state.collectList.some(item => item.iid === this.id))
    }
  },
  methods: {
    collection() {
      // this.isCollectionShow = !this.isCollectionShow
      //后续利用vuex加入收藏列表
      // console.log(this.isCollectionShow);
      this.$emit('addToCollect')
      this.$toast.show('收藏成功', 1000)
    },
    addToCart() {
      this.$emit('addToCart')
      // console.log('sss');
    }
  }
}
</script>

<style scoped>
  .button-bar {
    display: flex;
    font-size: 13px;
}
  .bar{
    flex: 1;
    display: flex;
    /*border-radius:50px;*/
    margin-top: 5px;
  }
  .bar div{
    flex: 1;
    text-align: center;
    /*line-height: 60px;*/
  }
  .img{
    width: 20px;
    height: 20px;
    margin-top: 3px;
    margin-bottom: 2px;
  }
  .bar-right {
    height: 40px;
    line-height: 40px;
    color: white;
    margin-top: 5px;
    /*padding: 10px 5px;*/
    /*background-color: #002FA7;*/
  }
  .cart {
    border-radius: 40px 0 0 40px;
    background-color: #0093E9;
    background-image: linear-gradient(270deg, #0093E9 0%, #80D0C7 100%);
    border-right: 1px solid #3f6fee;

  }
  .buy {
    border-radius:0 40px 40px 0;
    background-color: #0093E9;
    background-image: linear-gradient(90deg, #0093E9 0%, #80D0C7 100%);

  }
</style>
