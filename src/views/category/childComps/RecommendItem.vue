<template>
  <div class="item">

      <img :src="item.image" alt="" class="img">

    <div>{{item.title}}</div>
  </div>
</template>

<script>
export default {
  name: "RecommendItem",
  props: {
    item: {},
  }

}
</script>

<style scoped>
  .item {
    display: inline-block;
    width: 26%;
    text-align: center;
    margin: 16px 5px;
    font-size: 12px;
  }
  .img {
    height: 100%;
    width: 100%;
    margin-bottom: 5px;
  }
</style>
