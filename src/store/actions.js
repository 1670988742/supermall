export default {
  addCart(context, payload) {
    // let good = context.state.cartList.find(function (item) {
    //   return item.iid === payload.iid
    // })
    // if(good) {
    //   context.commit('addCount',good)
    //
    // }else {
    //   context.commit('addToCart', payload)
    // }
    // console.log(context.state.cartList);

    return new Promise((resolve, reject) => {
      let good = context.state.cartList.find(function (item) {
        return item.iid === payload.iid
      })
      if(good) {
        context.commit('addCount',good)
        resolve('数量加1')

      }else {
        context.commit('addToCart', payload)
        resolve('商品加1')
      }
    })
  },
  addCollect(context, payload) {
    let index = !context.state.collectList.find(item => item.iid === payload.iid)
    // console.log(index);
    if(index) {
        context.commit('addToCollect',payload)
      // console.log('adadad');

    }else {
      context.state.collectList.splice(index, 1)
      // console.log('335464');
      }

  }
}
