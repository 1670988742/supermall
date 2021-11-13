 <template>
  <div class="check-out">
    <check-button class="check-all" :ischeck="isAllSelect" @click.native="allSelect"></check-button>
    <span>全选</span>
    <span class="total-price">合计：{{totalPrice}}</span>

    <div class="caculate">
      <div class="settlement" @click="checkOutClick">结算({{checkList}})</div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "./CheckButton";
  import {mapGetters} from 'vuex'
export default {
  name: "CartCheckOut",
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.check
      }).reduce((preValue, item) => {
        return preValue + item.count * item.realPrice
      },0).toFixed(2)
    },
    ...mapGetters(['cartList'],['cartLength']),

    checkList() {
      return this.cartList.filter(item => item.check).length
    },

    isAllSelect() {
      if(this.cartList.length === 0) {
        return false
      }
      //1.第一种：遍历全部商品，查找不选中的商品（效率低）
      // return !(this.cartList.filter(item => !item.check).length)

      //2.第二种:找到一个不选中的商品就停止（every：一假未假，some：一真为真，find返回第一个符合的元素）
      return !(this.cartList.find(item => !item.check))

      //3.第三种：普通遍历
      // for (let item of this.cartList) {
      //   if(!item.check){
      //     return false
      //   }
      // }
      // return true
    }

  },
  methods: {
    allSelect() {
      if(this.isAllSelect) {

        this.cartList.forEach(item => item.check = false)
        // for (let item of this.cartList) {
        //     item.check = false
        //   }
      }else {
        this.cartList.forEach(item => item.check = true)
        // for (let item of this.cartList) {
        //   item.check = true
        // }
      }
      // console.log('adsakdj');
    },

    checkOutClick() {
      if (!this.isAllSelect) {
        this.$toast.show('请选择购买的商品', 1800)
      }else {
        console.log('购买成功');
      }

    }
  }
}
</script>

<style scoped>
  .check-out {
    display: flex;
    align-items: center;
    /*line-height: 40px;*/
    display: flex;
    font-size: 14px;
  }
  .check-all {
    /*margin-top: 5px;*/
    margin:0 5px;
  }
  .total-price {
    margin-left: 18px;
  }
  .caculate {

    height: 40px;
    width: 80px;
    position: absolute;
    right: 0;
    align-items: center;
    /*padding: 10px;*/

  }
  .settlement {
    padding: 6px 10px;
    margin-top: 6px;
    margin-right: 5px;
    margin-left: 5px;
    border-radius: 20px;
    text-align: center;
    background-color: #002FA7;
    color: white;
    font-size: 14px;
  }
</style>
