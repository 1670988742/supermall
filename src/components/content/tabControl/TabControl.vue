<template>
  <div class="tabcontrol">
    <div v-for="(item, index) in titles" :key="index"
         class="tab-control-item" :class="{active: index === currentIndex}"
        @click="itemClick(index)" >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return{
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabcntrolclick', index)
    }
  }

}
</script>

<style scoped>
  .tabcontrol {
    padding-top: 0;
    display: flex;
    font-size: 15px;
    text-align: center;
    line-height: 40px;
    background-color: #fff;
    z-index: 9;
  }
  .tab-control-item {
    flex: 1;

  }
  .active {
    color: var(--color-high-text)
  }
  .active span {
    border-bottom: 2px solid var(--color-high-text);
  }
  .tab-control-item span {

    padding-bottom: 5px;


  }
</style>
