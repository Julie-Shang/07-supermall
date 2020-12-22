<template>
  <div class="cart-list">
    <scroll class="cart-list-content">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :item-info="item"
      />
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";
import CartListItem from "@/views/cart/childComps/CartListItem.vue";

import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  created() {}
};
</script>

<style>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
}

.cart-list-content {
  height: 100%;
  overflow: hidden;
}
</style>
