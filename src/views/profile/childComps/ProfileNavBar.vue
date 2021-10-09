<template>
  <div class="pNavBar">
    <nav-bar class="navbar">
      <div slot="center" class="">个人中心</div>
      <div slot="right" class="right">

      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
export default {
  name: "ProfileNavBar",
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .pNavBar {
    background-color: #002FA7;



    color: white;
  }
  .right {
    margin-top: 3px;
    position: relative;
    top:50%;
    left:50%;
    width:100%;
    transform:translate(-50%,-50%);
    text-align: center;

  }
</style>
