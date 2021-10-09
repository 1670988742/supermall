<template>
  <div class="goodsdetail">
    <detail-nav-bar @titleClick="titleClick" ref="title"></detail-nav-bar>

    <scroll class="content"
            ref="scroll"
            @scroll="contentScroll"
            :probe-type="3">
      <div>
        <!--轮播图-->
        <detail-swiper :topImages="detailSwiper"></detail-swiper>
        <!--商品信息-->
        <detail-base-info :goods="goods"></detail-base-info>
        <!--店铺信息-->
        <detail-shop-info :shop="shop"></detail-shop-info>
        <!--商品图-->
        <detail-goods-info :introduce="introduce"
                          @imgLoad="imgloaded"></detail-goods-info>
        <!--商品参数-->
        <detail-para-info :paramInfo="paraInfo" ref="params"></detail-para-info>
        <!--评价-->
        <detail-comment :comInfo="commentInfo" ref="comment"></detail-comment>
        <!--推荐商品-->
        <detail-recommend :recommend="recommend" ref="recommend"></detail-recommend>
      </div>
    </scroll>

    <back-top v-show="isShowBackTop" @click.native="backClick"></back-top>
    <detail-button-bar class="detail-button-bar"
                       @addToCart="addToCart"
                       @addToCollect="addToCollect"
                        :id="this.id"></detail-button-bar>

<!--    <toast :message="this.message" :isShow="this.isShow"></toast>-->

  </div>
</template>

<script>
  import Scroll from "../../components/common/scroll/Scroll";
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParaInfo from "./childComps/DetailParaInfo";
  import DetailComment from "./childComps/DetailComment";
  import DetailRecommend from "./childComps/DetailRecommend";
  import DetailButtonBar from "./childComps/DetailButtonBar";



  import {getDetail,
          getRecommend,
          Goodsdetail,
          Shop } from "../../network/detail";
  // import {debounce} from "../../common/utils";
  import {BackTopMixin, itemListenerMixin} from "../../common/mixin";
  // import {debounce} from "../../common/utils";
  import {mapActions} from 'vuex'

  // import Toast from "../../components/common/toast/Toast";

export default {
  name: "Detail",
  components: {

    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParaInfo,
    DetailComment,
    DetailRecommend,
    DetailButtonBar,

    // Toast

  },
  //混入加入了第一次防抖
  mixins: [itemListenerMixin, BackTopMixin],

  data() {
    return{
      id: null,
      detailSwiper: [],
      goods: {},
      shop: {},
      introduce: {},
      paraInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopY: [],
      // getThemeTopY: null
      //导航栏同步
      currentIndex: 0,
      //加入购物车


      }
    },
  created() {
    //1.home组建传的商品id
   this.id = this.$route.params.id
    // console.log(this.id)

    //2.获取详情数据
    getDetail(this.id).then(res => {
      // console.log(res);
      const data = res.result;

      //轮播图数据
      this.detailSwiper = data.itemInfo.topImages;

      //商品详情信息
      this.goods = new Goodsdetail(data.itemInfo, data.columns, data.shopInfo.services);

      //店铺信息
      this.shop = new Shop(data.shopInfo)

      //介绍图
      this.introduce = data.detailInfo

      //商品参数等
      this.paraInfo = data.itemParams
      // console.log(this.paraInfo);

      //用户评价
      this.commentInfo = data.rate.list[0];
      // console.log(this.commentInfo);
    })

    //3.获取推荐数据
    getRecommend().then( (res, error) => {
      if (error) return
      this.recommend = res.data.list
    })


    //this.$refs.scroll.refresh不能加小括号，加了小括号传入的是函数的返回值
    // const refresh = debounce(this.$refs.scroll.refresh, 500)
    // this.itemImgListener = () => {
    //   refresh()
    // }
    //4.获取getThemeTopY数据
    // this.getThemeTopY = () => {
    //  this.themeTopY.push(0);
    //   console.log('lll');
    //   this.themeTopY.push(this.$refs.params.$el.offsetTop);
    //  this.themeTopY.push(this.$refs.comment.$el.offsetTop);
    //  this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
    // }


  },
  mounted() {
    //1.事件监听
    //推荐商品加载防抖放在了混入里
   },
  destroyed() {
    this.$bus.$off('imageload', this.itemImgListener)
  },

  methods: {
    ...mapActions(["addCart"]),
    // const refresh  = debounce(this.getThemeTopY, 500)
    // this.itemImgListener = () => {
    //   refresh()
    // }
    // this.$bus.$on('imageload', this.itemImgListener)
    //
    imgloaded() {

      this.$refs.scroll.refresh()
      console.log('穿着图片加载完成');
      this.getThemeTopY()
      // console.log(this.themeTopY);
    },
    getThemeTopY() {
      this.themeTopY.push(0);
      // console.log('safkjbasjkfbakjs');
      this.themeTopY.push(this.$refs.params.$el.offsetTop);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopY.push(Number.MAX_VALUE)

    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0,-this.themeTopY[index],500)
    },
    contentScroll(position) {
      // console.log(position);
      const positionY = -position.y
      this.isShowBackTop = positionY > 1000
      this.listenThemeY(positionY)

    },

    //监听滚动位置，使导航栏同步
    listenThemeY(positionY) {
      //第一种方案：
      // console.log(positionY);
      // const length = this.themeTopY.length
      // for(let i = 0 ; i< length; i++){
      //   //条件1：防止赋值过于频繁
      //   //条件2：[0-2]之间判断滚动的位置，并且赋值
      //   //条件3：3之后，判断是否大于themeTopY[3]的Y值，并且赋值
      //   if(i != this.currentIndex
      //     &&  ((i < length -1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])
      //     || (i === length -1 && positionY >= this.themeTopY[i] ))) {
      //       this.currentIndex = i
      //     this.$refs.title.currentIndex = i
      //     // console.log(i);
      //   }
      // }
      //第二种方案：

      // console.log(this.themeTopY);
      const length = this.themeTopY.length
      // console.log(this.themeTopY.length);
      for(let i = 0; i < length - 1; i++){
        if(i != this.currentIndex && positionY > this.themeTopY[i] && positionY < this.themeTopY[i+1]){
          this.currentIndex = i
          this.$refs.title.currentIndex = i
          console.log(i);
        }
      }
    },


    // this.goods = new Goodsdetail(data.itemInfo, data.columns, data.shopInfo.services);
    addToCart() {
      // console.log('sssss');
      // 1.获取商品信息
      const cartgoods = {}
      // 2.对象信息
      cartgoods.iid = this.id;
      cartgoods.imgURL = this.detailSwiper[0]
      cartgoods.title = this.goods.title
      cartgoods.desc = this.goods.desc;
      cartgoods.newPrice = this.goods.nowPrice;
      cartgoods.realPrice = this.goods.realPrice
      // cartgoods.count = 1
      // 3.添加到Store中
      // this.$store.dispatch('addCart', cartgoods).then(res => {
      //   console.log(res);
      // })
      this.addCart(cartgoods).then(res => {
        // this.isShow = true;
        // this.message = '成功加入购物车';
        // setTimeout(() => {
        //   this.isShow = false;
        //   this.message = '';
        // },2000)
        // console.log(res);
        this.$toast.show('加入购物车成功', 1800)
      })
    },

    addToCollect() {
      const collectgoods = {}
      collectgoods.iid = this.id;
      collectgoods.imgURL = this.detailSwiper[0]
      collectgoods.title = this.goods.title
      collectgoods.realPrice = this.goods.realPrice
      collectgoods.count = this.goods.columns[1]

      this.$store.dispatch('addCollect', collectgoods)
      // console.log(collectgoods);
    }

  }
}
</script>

<style scoped>
.goodsdetail {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 50px;
}
 .wrapper {

   overflow: hidden;
 }
 .detail-button-bar {
   height: 50px;
   background-color: rgb(235,235,235);
   z-index: 1;
   position: fixed;
   bottom: 0;
   right: 0;
   left: 0;
 }
</style>
