import {debounce} from "./utils";

//混入
export const itemListenerMixin = {
  // components: {},
  // methods: {},
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    //1.事件监听
    //this.$refs.scroll.refresh不能加小括号，加了小括号传入的是函数的返回值
    const refresh  = debounce(this.$refs.scroll.refresh, 500)
    this.itemImgListener = () => {
      refresh()
    }
    //
    this.$bus.$on('imageload', this.itemImgListener)
    // console.log('我是mixin的内容');
  }
}



import BackTop from "../components/content/backTop/BackTop";
export const BackTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }

  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0,0,500)
      console.log('backClick');
    }
  }
}
