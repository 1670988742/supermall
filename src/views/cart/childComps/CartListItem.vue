<template>
  <div class="cart-list-item">
    <check-button class="check-img" :ischeck="item.check" @click.native="checkClick"></check-button>

    <div class="item-img">
      <img :src="item.imgURL" alt="商品图片">
    </div>

    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="item-desc">商品描述: {{item.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{item.realPrice}}</div>
        <div class="item-count right">
                <button class="sub" :disabled="item.count <= 1" @click="subClick">-</button>
          <div ><input type="text" v-model.number="item.count" class="numberinput"></div>
                <button class="add" @click="addClick">+</button>
        </div>
      </div>
    </div>

    <div class="delate">
      <img src="@/assets/img/cart/delete.svg" alt="" @click="deleteClick">
    </div>

  </div>
</template>

<script>
  import CheckButton from "./CheckButton";
export default {
  name: "CartListItem",
  components: {
    CheckButton
  },
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      this.item.check = ! this.item.check
    },
    subClick() {
      this.$store.commit('subCount', this.item)

    },
    addClick() {
      this.$store.commit('addCount', this.item)

    },
    deleteClick() {
      this.$store.commit('deleteGood', this.item)
      this.$toast.show('删除成功', 1500)
    }

  }
}
</script>

<style scoped>
  .cart-list-item {
    height: 130px;
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border: 1px solid #ccc;
  }
  .check-img {
    line-height: 120px;
    margin-bottom: 2px;
  }

  /*.item-selector {*/
  /*  width: 14%;*/
  /*  display: flex;*/
  /*  justify-content: center;*/
  /*  align-items: center;*/
  /*}*/

  .item-title, .item-desc {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-img img {
    width: 60px;
    height: 80px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 15px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {

    font-size: 12px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    /*margin-top: 10px;*/
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    /*display: inline-block;*/
    text-align: center;
    height: 20px;
    line-height: 20px;
  }

  .right {
    display: flex;
    right: 0;
    color: red;
    /*position: absolute;*/
  }
  .numberinput {
    text-align: center;
    border: none;
    background-color: #f2f2f2;
    width: 26px;
    height: 15px;
    margin: 5px 15px;
    color: #002FA7;
    font-size: 12px;
    /*margin-top: 5px;*/
  }
  .sub, .add {
    font-size: 21px;
    background: none;
    border: none;
    /*color: red;*/
  }
  .sub {
    margin-bottom: 1px;
  }

  .info-bottom .item-price {
    color: #002FA7;
  }
  .delate {
    position: relative;
    top: 0px;
    right: 15px;
    /*z-index: 6;*/
    width: 10px;
    height: 15px;
  }
  .delate img {
    height: 24px;
    width: 24px;
  }
</style>
