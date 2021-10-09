<template>
  <div class="collect">
    <nav-bar class="nav-bar">
      <img slot="left" src="~assets/img/common/back.svg" alt="" class="backimg" @click="backclick">
      <div slot="center">商品收藏({{collectLength}})</div>
    </nav-bar>

    <scroll class="content" ref="scroll">
      <div>
        <collection-list :collectionlist="collectList"></collection-list>
      </div>
    </scroll>



    <div class="botton">
      <div class="left"><div>删除</div></div>
      <div class="right"><div>分享</div></div>
    </div>
  </div>
</template>

<script>
  import NavBar from "../../../../components/common/navbar/NavBar";
  import Scroll from "../../../../components/common/scroll/Scroll";
  import CollectionList from "./CollectionList";

  import {mapGetters} from "vuex";
export default {
  name: "Collection",

  components: {
    NavBar,
    Scroll,
    CollectionList
  },
  computed: {
    ...mapGetters(["collectLength","collectList"])
  },
  methods: {
    backclick() {
      this.$router.back(-1)
    },
  }
}
</script>

<style scoped>
.collect {
  height: 100vh;
  z-index: 99;
}
.nav-bar {
  border-bottom: solid 1px rgb(231,231,231);
  font-weight: bold;
  font-size: 15px;
  color: #002FA7;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 89px;
}
  .backimg {
    margin-top: 10px;
    padding-left: 20px;
  }



.botton {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: 49px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

}
.left, .right{
  font-size: 15px;
  line-height: 30px;
  /*flex: 1;*/
  height: 30px;
  width: 120px;
  border: solid 1px rgb(231,231,231);
  border-radius: 15px;

}
</style>
