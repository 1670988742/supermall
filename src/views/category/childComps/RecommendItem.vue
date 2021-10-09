<template>
  <div class="item">
    <div><img :src="imglist" alt="">
      <img :src="showimg" alt="" class="img">
    </div>
    <div>{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "RecommendItem",
  props: {
    // imglist: {
    //   type: Array,
    //   default() {
    //     return []
    //   }
    //
    // },
    imglist: String,
    title: String,
    imgurl: {},
    index: Number

  },
  computed: {
    // showtitle() {
    //   return this.recommenditem.cat_name
    // },
    showimg() {
      return this.imgurl.children[this.index].cat_icon
      // return this.imgURL[0].cat_icon
    }
  }
}
</script>

<style scoped>
  .item {
    /*padding-bottom: 40px;*/
    /*position: relative;*/
    /*width: 45%;*/
    /*height: 25vh;*/
    /*text-align: center;*/

    /*display: inline-block;*/
    /*vertical-align: top;*/
    /*font-size: 16px;*/
    /*width: 25%;*/

    display: inline-block;
    width: 33.3%;
    text-align: center;

  }
  .img {
    height: 100px;
    width: 100px;
  }
</style>
