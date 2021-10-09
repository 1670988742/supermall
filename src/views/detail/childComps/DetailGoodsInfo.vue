<template>

  <div v-if="Object.keys(introduce).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{introduce.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{introduce.detailImage[0].key}}</div>
    <div class="info-list">
      <img @load="imLoad()" v-for="(item, index) in introduce.detailImage[0].list" :src="item" alt="" :key="index">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    introduce: {
      type: Object
    }
  },
  data() {
    return {
      counter: 0,
      imageLength: 0
    }
  },

  methods: {
    imLoad() {
      //监听穿着效果图片是否加载完成，确定完成之后调用refresh
      this.counter += 1;
      if(this.counter === this.imageLength) {
        this.$emit('imgLoad')
        // console.log('adasklhfdas');
      }
    }
  },
  watch: {
    introduce() {
      this.imageLength = this.introduce.detailImage[0].list.length
      // console.log(this.imageLength);
    }
  }

}
</script>

<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 20px;
}

.info-desc .start, .info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before, .info-desc .end::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 20px 0;
  font-size: 14px;
}

.info-key {
  margin: 20px 15px 20px 15px;
  background-color: #002FA7;
  color: white;
  font-size: 17px;
  text-align: center;
  width: 25%;
  border-radius: 20px;

}

.info-list img {
  width: 100%;
}
</style>
