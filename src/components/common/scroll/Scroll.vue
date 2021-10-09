<template>
  <div  ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad1: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scroll: null,

    }
  },
  //组建挂载后创建Better scroll，
  mounted() {
    setTimeout(this.__initScroll, 20)
    //创建BScroll对象
    // console.log(this.$refs.wrapper);
    // this.scroll = new BSscroll(this.$refs.wrapper, {
    //   probeType: this.probeType,
    //   click: true,
    //   // observe-DOM: true,
    //   pullUpLoad: this.pullUpLoad,
    //   // pullingDown: true
    // })
    // //2.监听滚动位置
    // this.scroll.on('scroll',(position) => {
    //   // console.log(position);
    //   this.$emit('scroll',position)
    // })
    // //3.监听上拉事件
    // this.scroll.on('pullingUp', () => {
    //   console.log('上拉加载');
    //   this.$emit('pullingUp')
    // })
    // refresh() {
    //   this.scroll && this.scroll.refresh && this.scroll.refresh()
    // },
  },
  methods: {

    // scrollTo(x, y, time=1000) {
    //   this.scroll.scrollTo(x, y, time)
    // },
    // finishPullUp() {
    //   this.scroll.finishPullUp()
    // }
    __initScroll() {
      // 1.初始化BScroll对象
      if (!this.$refs.wrapper) return
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        observeDOM: true,
        pullUpLoad: this.pullUpLoad1
      })

      // 2.实时监听滚动，将位置传回父组件
      this.scroll.on('scroll', pos => {
        this.$emit('scroll', pos)
      })

      // 3.监听上拉到底部，将事件传给父组件
      this.scroll.on('pullingUp', () => {
        console.log('上拉加载');
        this.$emit('pullingUp')
      })
    },
    //刷新，重新计算高度
    //使用&&原因：防止数据请求完之后调用scroll，而scroll还未创建，scroll值为null或者undefined出现的报错
    refresh() {
      // console.log('111');
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    },
    //数据完成请求并显示之后在执行这个函数然后可以再次执行上拉加载更多
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
    },
    //滚动到某个位置，time为返回用时
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
    },
    getscrollY(){
      return this.scroll ? this.scroll.y : 0
    },
  },
  // watch: {
  //   data() {
  //     setTimeout(this.refresh, 20)
  //   }
  //
  // }
}
</script>

<style scoped>

</style>
