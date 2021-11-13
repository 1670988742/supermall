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


  import {getCategory, getCategoryList} from "../../network/category";


  export default {
  name: "Category",
    data() {
      return {
        currentIndex: 0,
        // response: {},
        categories: [],
        itemKey: 3627,
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
    this.getCategory()

    this.getCategoryList()

  },

  methods: {
    listClick(index) {
      this.currentIndex = index
      this.itemKey = this.categories[this.currentIndex].maitKey
      this.getCategoryList();
      console.log(this.recommendlist);
    },
    //获取分类列表
    getCategory() {
      getCategory().then(res => {
        console.log(res.data.category.list);
        this.categories = res.data.category.list

        // console.log(this.itemKey);
      })
    },
    //获取分类下的数据
    getCategoryList() {
      getCategoryList(this.itemKey).then(res => {
        this.recommendlist = res.data.list
        console.log(this.recommendlist);
      })
    }
  }

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
    top: 0px;
    bottom: 49px;
    right: 0;
    overflow: hidden;

  }
</style>
