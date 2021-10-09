<template>
  <div class="recommend">
    <div class="info-header">热门推荐</div>
    <goods-list :goodsdata="recommend"></goods-list>
  </div>
</template>

<script>
  import GoodsList from "../../../components/content/goods/GoodsList";

export default {
  name: "DetailRecommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsList,

  }
}
</script>

<style scoped>
  .recommend {
    margin-top: 20px;
  }
  .info-header {
    margin: 35px 15px ;
    background-color: #002FA7;
    color: white;
    font-size: 17px;
    text-align: center;

    border-radius: 20px;
  }
</style>
