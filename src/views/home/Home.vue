 <template>
  <div id="home">
    <nav-bar class="homenav"><div slot="center">PUFFER</div></nav-bar>
<!--    <tab-control :titles="['流行', '新款', '精选',]" class="tab-control"-->
<!--                 @tabcntrolclick="titleclick"></tab-control>-->

    <tab-control :titles="['流行', '新款', '精选',]"
                 @tabcntrolclick="titleclick"
                 ref="tabControl1" class="tabControl" v-show="isShowTabControl"></tab-control>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <div>
<!--        轮播图-->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
<!--        推荐-->
      <home-recommend :recommends="recommends"></home-recommend>
<!--        特色图-->
      <feature-view></feature-view>
<!--        分类-->
      <tab-control :titles="['流行', '新款', '精选',]"
                   @tabcntrolclick="titleclick"
                   ref="tabControl2" ></tab-control>
      <goods-list :goodsdata="showgoods"></goods-list>
      </div>
    </scroll>
    <back-top class="back-top" @click.native="backClick" v-show="isShowBackTop"></back-top>


  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";
  import Scroll from "../../components/common/scroll/Scroll";
  // import BackTop from "../../components/content/backTop/BackTop";

  import {getHomeMultidata, getHomeGoods} from "../../network/home";
  // import {debounce} from "../../common/utils";

  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";
  import FeatureView from "./childComps/FeatureView";

  import GoodsList from "../../components/content/goods/GoodsList";
  import {BackTopMixin, itemListenerMixin} from "../../common/mixin";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    // BackTop

  },
  mixins: [itemListenerMixin, BackTopMixin] ,
  data() {
    return {
      banners: [],
      recommends: [],
      currentIndex: 'pop',
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      // isShowBackTop: false,
      isShowTabControl: false,
      tabOffsetTop: 0,
      saveY: 0,
      itemImgListener: null
    }
  },
  computed: {
    showgoods() {
        return this.goods[this.currentIndex].list
      }

  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 20)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    // console.log(this.$refs.scroll.getscrollY());
    //离开时记住Y值
    this.saveY = this.$refs.scroll.getscrollY()

    //离开时取消全局事件监听
    this.$bus.$off('imageload', this.itemImgListener)

  },
  created() {
    //1.组件创建后请求多个数据
    this.getHomeMultidata();

    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell')


  },
  mounted() {
    //1.事件监听
    //推荐商品加载防抖放在了混入里
    //this.$refs.scroll.refresh不能加小括号，加了小括号传入的是函数的返回值
    // const refresh = debounce(this.$refs.scroll.refresh, 500)
    // this.itemImgListener = () => {
    //   refresh()
    // }
    // this.$bus.$on('imageload', this.itemImgListener)

    //2.获取tabControl的offsetTop
    // setTimeout(() =>{
    //   console.log(this.$refs.tabControl.$el.offsetTop);
    // }, 1000)


  },

  methods: {
    //事件监听
    titleclick(index) {
      switch (index) {
        case 0:
          this.currentIndex = 'pop'
          break;
        case 1:
          this.currentIndex = 'new'
          break;
        case 2:
          this.currentIndex = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;

    },
    //父组件访问子组件调用子组件scroll的滚动方法
    //滚动到某个位置，x,y 代表坐标，time 表示动画时间
    // backClick() {
    //   this.$refs.scroll.scrollTo(0,0,300)
    //   console.log('backClick');
    // },
    //根据子组件监听的滚动位置，若位置到了设定的位置，v-show值设为true，将backup按钮显示
    //1.判断backtop是否显示 2.判断tabcontrol是否吸顶
    contentScroll(position) {
      // console.log(position);
      this.isShowBackTop = -position.y > 1000
      this.isShowTabControl = (-position.y) > this.tabOffsetTop
    },
    //根据子组件返回的事件调用加载数据的方法
    //下载加载更多数据
    loadMore() {
      this.getHomeGoods(this.currentIndex)
      console.log(this.currentIndex);
      this.$refs.scroll.refresh()
    },
    //首页轮播图加载完成后计算tabcontrol距离顶部的距离
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    //网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(this.banners);
      })
    },
    //请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      // console.log(page);
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        const goodslist = res.data.list;
        this.goods[type].list.push(...goodslist);
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    },
    //防抖函数
    //设置个timer，加载完一张图执行一次refresh，延迟delay时间，若在延迟时间内被再次执行则再次延迟
    // debounce(func, delay) {
    //   let timer = null
    //   return function (...args) {
    //     if(timer) clearTimeout(timer)
    //     timer = setTimeout(() => {
    //       func.apply(this, args)
    //     },delay)
    //   }
    // },

  }
}
</script>

<style>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
  .homenav {
    background-color: #89a4ea;
    color: white;
    /*position: fixed;*/
    /*left: 0;;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/

  }
  /*.tab-control {*/
  /*  position: sticky ;*/
  /*  top: 44px;*/
  /*  background-color: white;*/
  /*}*/
  /*方案一*/
  /*.content {*/
  /*  height: calc(100% - 93px);*/
  /*  margin-top: 44px;*/
  /*  overflow: hidden;*/
  /*}*/
  /*方案二*/
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
  .wrapper {
    height: 100%;
    overflow: hidden;
  }
  .back-top {
    clear: both;
    position: fixed;
    right: 10px;
    bottom: 55px;
  }
  .back-top img {
    width: 43px;
    height: 43px;
  }
  /*.fixed {*/
  /*  position: fixed;*/
  /*  top: 44px;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  !*z-index: 9;*!*/
  /*}*/
  .tabControl {
    position: relative;
    z-index: 9;
  }
</style>
