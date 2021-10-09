<template>
  <div v-if="Object.keys(comInfo).length !== 0" class="comment">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多<i class="arrow-right"></i>
      </div>

    </div>

    <div class="info-user">
      <img :src="comInfo.user.avatar" alt="">
      <span class="user-name">{{comInfo.user.uname}}</span>
    </div>

    <div class="info-detail">
      <p>{{comInfo.content}}</p>
    </div>

    <div class="info-other">
      <span class="date">{{comInfo.created | showDate}}</span>
      <span class="style">{{comInfo.style}}</span>
    </div>

    <div class="info-imgs">
      <img :src="item" v-for="(item, index) in comInfo.images" :key="index">
    </div>
  </div>
</template>

<script>
  import {formatDate} from "../../../common/utils";
export default {
  name: "DetailComment",
  props: {
    comInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    showDate: function (value) {
      let date = new Date(value*1000);
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  // mounted() {
  //   setTimeout(() => {
  //     console.log(this.comInfo.user);
  //   },1000)
  // }
}
</script>

<style scoped>
.comment {
  border-bottom: 5px solid #f2f5f8;
  padding-bottom: 10px;
}
 .info-header {
   height: 50px;
   text-align: center;
   display: flex;
   padding: 10px 13px;
   border-bottom: 1px solid rgba(0,0,0,0.1);
 }
 .header-more {
   position: absolute;
   right: 16px;

 }
 .arrow-right {
   margin-top: 5px;
   border-top: 1px solid #999;
   border-left: 1px solid #999;
   width: 9px;
   height: 9px;
   background-color: transparent;
   -webkit-transform: rotate(
     135deg
   );
   transform: rotate(
     135deg
   );
   display: inline-block;
   margin-left: .1rem;
 }
 .info-user{
   padding: 10px 10px;

 }
 .info-user img {
   height: 50px;
   width: 50px;
   border-radius: 50px;
 }
 .user-name{
   /*margin-bottom: 10px;*/
   position: relative;
   font-size: 13px;
   top: -18px;
   margin-left: 10px;
 }
 .info-detail {
   padding: 10px 20px;

 }
 .info-detail p{
   font-size: 15px;
 }
 .date {
   padding: 10px 20px;
 }
 .date, .style {
   font-size: 12px;
 }
 .info-imgs {
   margin-top: 10px;
   margin-left: 20px;
 }

 .info-imgs img {
   width: 70px;
   height: 70px;
   margin-right: 5px;
   margin-bottom: 10px;
 }
</style>
