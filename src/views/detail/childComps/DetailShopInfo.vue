<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <div class="title">{{shop.name}}</div>
    </div>

    <div class="shop-middle">
      <div class="shop-middle-left shop-middle-item">
        <div class="sells-info">
          <div class="sells-count">{{shop.sells | sellCountFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="goods-info">
          <div class="goods-count">{{shop.goods}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>

      <div class="shop-middle-right shop-middle-item">
        <table>
        <tr v-for="(item, index) in shop.score" :key="index">
          <td>{{item.name}}</td>
          <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
          <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
        </tr>
        </table>
      </div>
    </div>

    <div class="shop-button">
      <div class="enter-shop">进店逛逛</div>
    </div>

  </div>

</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,

    }
  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value/10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
  .shop-info {
    padding: 25px 8px;
    /*height: 500px;*/
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .shop-top {
    display: flex;
    margin-bottom: 10px;
    height: 50px;
  }
  .shop-top img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.5);
  }
  .title{
    margin-bottom: 10px;
    margin-left: 5px;
    line-height: 50px;
  }
  .shop-middle {
    height: 100px;
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
  .shop-middle-item {
    flex: 1;
  }
  .shop-middle-left {
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    border-right: 1px solid rgba(100,100,100,.5);
  }
  .sells-count, .goods-count {
    font-size: 18px;
  }
  .sells-text, .goods-text {
    margin-top: 10px;
    font-size: 12px;
  }
  .shop-middle-right{
    font-size: 13px;
    margin-left: 40px;
  }
  .shop-middle-right table {
    margin-left: 30px;
  }
  .shop-middle-right table td {
    padding: 5px 2px;
  }
  .score-better, .better-more {
    color: red;
  }
  .shop-middle-right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }
  .shop-middle-right .better-more span {
    background-color: #f13e3a;
  }
  .shop-button {
    text-align: center;
    margin-top: 15px;
  }
  .enter-shop {
    display: inline-block;
    font-size: 14px;
    line-height: 30px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    border-radius: 10px;
  }
</style>
