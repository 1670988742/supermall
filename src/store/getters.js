import store from "./index";

export default {
  cartLength() {
    return store.state.cartList.length
  },
  cartList() {
    return store.state.cartList
  },
  collectLength() {
    return store.state.collectList.length
  },
  collectList() {
    return store.state.collectList
  }
}
