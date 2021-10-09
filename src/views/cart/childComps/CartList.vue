<template>
  <div class="cart-list">
    <cart-list-item v-for="(item, index) in cartlist"
                    :key="index"
                    :item="item">
    </cart-list-item>

  </div>
</template>

<script>
  import CartListItem from "./CartListItem";
export default {
  name: "CartList",
  props: {
    cartlist: {
      type: Array,
    }
  },
  components: {
    CartListItem
  }
}
</script>

<style scoped>

</style>
