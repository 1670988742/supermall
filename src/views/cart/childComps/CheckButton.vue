<template>
  <div class="check-button">
    <img src="~assets/img/cart/check.svg" alt="" :class="{check : ischeck}" class="img">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    ischeck: {
      type: Boolean,
      default() {
        true
      }

    }
  }
}
</script>

<style scoped>
.img {
  /*background-color: red;*/
  border: 1px solid #ccc;
  border-radius: 50%;
}
.check {
  background-color: #002FA7;
}
</style>
