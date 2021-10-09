<template>
  <div  class="goods-list">

    <goods-list-item v-for="(item, index) in goodsdata" :key="index" :good="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goodsdata: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-around;
    padding: 2px;
  }
</style>
