<template>
  <div class="category">
    <category-nav-bar></category-nav-bar>

    <scroll class="content" ref="scroll">
      <div>
        <category-list :list="categories" @listClick="listClick"></category-list>
      </div>
    </scroll>

    <recommend :recommendList="recommendlist" class="recommend" :index="currentIndex"></recommend>

  </div>

</template>

<script>
  import CategoryNavBar from "./childComps/CategoryNavBar";
  import CategoryList from "./childComps/CategoryList";
  import Scroll from "../../components/common/scroll/Scroll";
  import Recommend from "./childComps/Recommend";

  import axios from "axios";


  export default {
  name: "Category",
    data() {
      return {
        currentIndex: 0,
        // response: {},
        categories: [],
        recommendlist: []
      }
    },
  components: {
    CategoryNavBar,
    CategoryList,
    Scroll,
    Recommend
  },
  created() {
    this.getinfo()
  },
  // computed: {
  //   showgoods() {
  //     return this.res.message
  //   }
  // },
  methods: {
    listClick(index) {
      this.currentIndex = index
      // this.getlistinfo(index)
      this.recommendlist = this.categories[this.currentIndex].children
      console.log(this.currentIndex);
      console.log(this.recommendlist);
    },
    getinfo() {
      axios.get('https://api-hmugo-web.itheima.net/api/public/v1/categories').then(res => {
        // console.log(res);
        this.categories = res.data.message
        this.recommendlist = this.categories[this.currentIndex].children
        // this.response = res
        console.log(this.recommendlist);
        // console.log(this.categories[this.currentIndex]);

      })
    },
    // getlistinfo(index) {
    //   axios.get('https://api-hmugo-web.itheima.net/api/public/v1/categories').then(res => {
    //     console.log(res);
    //     this.recommendlist = res.data.message[index].children
    //     console.log(this.recommendlist);
    //   })
    // }



  },
    // activated() {
    //   this.$refs.scroll.refresh()
    //   // console.log('活跃时刷新content高度');
    // }
}

</script>

<style scoped >
  .category {
    height: 100vh;
    position: relative;
  }
  .content {
    background-color: rgb(231,231,231);
    width: 20%;
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
  .recommend {
    width: 80%;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    overflow: hidden;

  }
</style>
