<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物车{{ "(" + cartLength + ")" }}</div>
      </template>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list />
    <!-- 底部汇总 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import CartList from "@/views/cart/childComps/CartList.vue";
import CartBottomBar from "@/views/cart/childComps/CartBottomBar";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(["cartLength", "cartList"])
  }
};
</script>

<style>
.cart {
  height: 100vh;
}

.nav-bar {
  color: #fff;
  background-color: var(--color-tint);
}
</style>
