<template>
  <div class="root">
    <scroll class="content" ref="scroll">
      <div>
        <recommend-item v-for="(item, index) in recommendList"
                        :key="index"
                        :item="item"

        ></recommend-item>
      </div>
    </scroll>

  </div>
</template>

<script>
  import RecommendItem from "./RecommendItem";
  import Scroll from "../../../components/common/scroll/Scroll";
export default {
  name: "Recommend",
  props: {
    recommendList: []
  },
  components: {
    RecommendItem,
    Scroll
  },
  // updated() {
  //   console.log(this.recommendList);
  // },

}
</script>

<style scoped>
  .root {
    height: 100%;
    position: relative;
  ;
  }
  .content {
    position: absolute;
    /*overflow: hidden;*/
    text-align: center;
  }
</style>
