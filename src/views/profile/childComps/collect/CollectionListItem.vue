<template>
  <div class="list-item" @click="detailClick">
    <div class="item-img">
      <img :src="item.imgURL" alt="商品图片">
    </div>

    <div class="item-info">
      <div class="item-title">{{item.title}}</div>

      <div class="item-desc">￥{{item.realPrice}}</div>

      <div class="info-bottom">
        <div class="item-count">{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollectionListItem",
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    detailClick() {
      // this.good.tradeItemId= this.item.iid
      // console.log(this.good.tradeItemId);
      this.$router.push('/detail/' + this.item.iid)
    }
  }
}
</script>

<style scoped>
.list-item {
  height: 130px;
  width: 100%;
  display: flex;
  font-size: 15px;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}


.item-title, .item-desc {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 60px;
  height: 80px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 15px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {

  /*font-size: 12px;*/
  /*color: #666;*/
  margin-top: 15px;
}

.info-bottom {
  font-size: 13px;
  margin-top: 12px;
  height: 20px;
  line-height: 20px;
}
.item-count {
  color: #002FA7;
}



</style>
