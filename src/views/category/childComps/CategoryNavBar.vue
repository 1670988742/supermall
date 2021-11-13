<template>
  <div class="categoryNavBar">
    <nav-bar><div slot="center">分类</div></nav-bar>

  </div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
export default {
  name: "Category",
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .categoryNavBar {
    background-color: #89a4ea;
    color: white;
  }
</style>
