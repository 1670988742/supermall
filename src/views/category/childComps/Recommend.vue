<template>
  <div class="recommend">
    <recommend-item v-for="(item, index) in recommendList"
                    :key="index"
                    :title="item.cat_name"
                    :imglist="item.cat_icon"
                    :imgurl="item"
                    :index="index"
                    ></recommend-item>
  </div>
</template>

<script>
  import RecommendItem from "./RecommendItem";
export default {
  name: "Recommend",
  props: {
    index: Number,
    recommendList: []
  },
  components: {
    RecommendItem
  },
  updated() {
    console.log(this.recommendList);
  },
  // computed: {
  //   showimg() {
  //     return this.recommendlist.children
  //   }
  // }
}
</script>

<style scoped>
  .recommend {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    /*display: flex;*/
    /*flex: 1;*/
    /*flex-wrap: wrap;*/
    /*justify-content: center;*/
  }
</style>
