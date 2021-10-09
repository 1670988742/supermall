<template>
  <div class="list">
    <collection-list-item
                  v-for="(item, index) in collectionlist"
                  :key="index"
                  :item="item">
    </collection-list-item>
  </div>
</template>

<script>
  import CollectionListItem from "./CollectionListItem";
export default {
  name: "CollectionList",
  props: {
    collectionlist: {
      type: Array,
    }
  },
  components: {
    CollectionListItem
  }
}
</script>

<style scoped>

</style>
