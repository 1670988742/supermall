<template>
  <div >
    <swiper class="home-swiper">
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper"

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    imageLoad() {
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        // console.log('...');
        this.isLoad = true
      }

    }
  }
}
</script>

<style scoped>
  .home-swiper {
    border-radius: 5%;
    /*width: 90%;*/
  }
/*.img {*/
/*  width: 100%;*/
/*  height: 200px;*/
/*}*/
</style>
