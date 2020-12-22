<template>
  <div class="cart-bottom-bar">
    <div class="check-content">
      <check-button
        :is-checked="isSelectAll"
        class="cart-check-button"
        @click.native="checkAllClick"
      />
      <span>全选</span>
    </div>

    <div class="total-price">合计：{{ totalPrice }}</div>
    <div class="cart-calculate">去计算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
    totalPrice() {
      return (
        "￥" +
        this.$store.getters.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    isSelectAll() {
      //return !this.$store.state.cartList.filter(item => !item.checked).length;
      if (this.cartList.length === 0) return false;
      return !this.cartList.find(item => !item.checked);
    }
  },
  methods: {
    checkAllClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => (item.checked = false));
      } else {
        this.cartList.forEach(item => (item.checked = true));
      }
    }
  }
};
</script>

<style>
.cart-bottom-bar {
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: rgba(240, 240, 240, 0.418);
  position: relative;
}

.check-content {
  width: 80px;
  display: flex;
  align-items: center;
  margin: 0 10px;
}
.cart-check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}

.total-price {
  flex: 1;
}

.cart-calculate {
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  background-color: orangered;
}
</style>
