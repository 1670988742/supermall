<template>
  <div v-if="Object.keys(paramInfo).length !== 0" class="para-info">
    <div class="disclaimer">{{paramInfo.rule.disclaimer}}</div>
    <div class="size_title">{{paramInfo.rule.key}}</div>

    <table v-for="(ttr, index) in paramInfo.rule.tables" class="info-size" :key="index">
      <tr v-for="(tr, indey) in ttr" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>

    <div class="product_title">{{paramInfo.info.key}}</div>
    <table class="intro-param">
      <tr v-for="(item, index) in paramInfo.info.set" :key="index">
        <td class="intro-paramkey">{{item.key}}</td>
        <td class="param-value">{{item.value}}</td>
      </tr>
    </table>
<!--    <div class="info-img" v-if="paramInfo.image.length !== 0">-->
<!--      <img :src="paramInfo.image" alt="">-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "DetailParaInfo",
  props: {
    paramInfo: {
      typ: Object
    }
  },

  // mounted() {
  //   setTimeout(() => {
  //     // console.log(this.paramInfo);
  //   },1000)
  // }
}
</script>

<style scoped>
 .para-info {

 }
 .disclaimer {
   padding: 18px 15px;
   font-size: 10px;
   text-align: center;
 }
 .size_title, .product_title{
   padding: 18px 15px;
   font-size: 10px;
   text-align: center;
 }
 .para-info table {
   width: 100%;
   padding-left: 20px;
   font-size: 13px;

 }
 .info-size, .intro-param{
   margin-bottom: 20px;
   border-bottom: 5px solid #f2f5f8
 }
 .info-size tr  td{
   height: 30px;
   border-bottom: 1px solid rgba(100,100,100,.1);
 }
 .intro-param  tr  td{
   height: 30px;
   border-bottom: 1px solid rgba(100,100,100,.1);
 }
  .intro-paramkey {
    width: 95px;
  }
 .param-value {
   color: red;
 }
</style>
