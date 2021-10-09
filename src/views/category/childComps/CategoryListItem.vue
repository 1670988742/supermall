<template>
  <div class="listItem">
    <div v-for="(item, index) in listitem" :key="index" >{{item}}</div>
  </div>
</template>

<script>
export default {
  name: "CategoryListItem",
  props: {
    listitem: {
      type: String

    }
  }

}
</script>

<style scoped>
  .listItem {
    padding: 10px 0;
    font-size: 12px;
    height: 52px;
    /*width: 80px;*/
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

</style>
