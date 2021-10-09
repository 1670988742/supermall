<template>
  <div class="categoryList">
    <category-list-item v-for="(item, index) in list"
                        :key="index"
                        :listitem="item.cat_name"
                        @click.native="listitemClick(index)"
                        :class="{active: index === currentIndex}"
    >
    </category-list-item>
    </div>
</template>

<script>
  import CategoryListItem from "./CategoryListItem";
export default {
  name: "categoryList",
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    CategoryListItem
  },
  methods: {
    listitemClick(index) {
      this.currentIndex = index
      this.$emit('listClick', index)
        // console.log(index);

    }
  }
}
</script>

<style scoped>
  .categoryList {
    /*background-color: blue;*/
    /*position: fixed;*/
    /*left: 0;*/
    /*top: 44px;*/
  }
  .active {
    color: var(--color-high-text);
    background-color: white;
    /*border-left: solid red 1px;*/
   }
</style>
