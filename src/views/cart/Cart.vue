<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <scroll class="content" ref="scroll">
      <div>
        <cart-list :cartlist="list"></cart-list>
      </div>
    </scroll>

    <cart-check-out class="check-box"></cart-check-out>


  </div>



</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";
  import CartList from "./childComps/CartList";
  import CartCheckOut from "./childComps/CartCheckOut";
  import {mapGetters} from 'vuex'



export default {
  name: "Cart",
  components: {
    NavBar,
    Scroll,
    CartList,
    CartCheckOut,


  },
  computed: {
    //1.数组用法
    // ...mapGetters(['cartLength','cartList'])
    //2.对象用法
    ...mapGetters({
      length: 'cartLength',
      list: 'cartList'
    })
  },
  activated() {
    this.$refs.scroll.refresh()
    // console.log('活跃时刷新content高度');
  }
}
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: #89a4ea;
  color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 89px;
}
.check-box {
  background-color: rgb(231,231,231);
  height: 40px;
  position: fixed;
  bottom: 49px;
  z-index: 33;
  right: 0;
  left: 0;
}
</style>
