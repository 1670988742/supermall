<template>
  <div class="dbar">
    <nav-bar >
      <img slot="left" src="~assets/img/common/back.svg" alt="" class="backimg" @click="backclick">
      <div slot="center" class="detailnavbar">
        <div v-for="(item, index) in titles"
             :value="item"
             :key="index"
             class="titleitem"
             @click="titleclick(index)"
            :class="{active: index === currentIndex}">
          {{item}}
        </div>
      </div>

    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
  export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    backclick() {
      this.$router.back(-1)
    },
    titleclick(index) {
      this.currentIndex = index
      this.$emit('titleClick',index)
    }
  }
}
</script>

<style scoped>
  /*.detail-navbar{*/
  /*  display: flex;*/
  /*}*/
  .backimg {
    margin-top: 10px;
    padding-left: 20px;
  }
 .detailnavbar {
   display: flex;
   font-size: 13px;
 }
 .titleitem {
    flex: 1;
 }
 .active {
   color: red;
 }
</style>
