<template>
  <tab-bar>
    <!-- <img src="@/assets/img/common/tabbar/home.png" alt="" /> -->
    <tab-bar-item path="/home" activeColor="orangered">
      <template v-slot:item-icon>
        <img src="@/assets/img/common/tabbar/home.png" alt="" />
      </template>

      <template v-slot:item-icon-active>
        <img src="@/assets/img/common/tabbar/home_active.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="orangered">
      <template v-slot:item-icon>
        <img src="@/assets/img/common/tabbar/category.png" alt="" />
      </template>

      <template v-slot:item-icon-active>
        <img src="@/assets/img/common/tabbar/category_active.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="orangered">
      <template v-slot:item-icon>
        <img src="@/assets/img/common/tabbar/shopcart.png" alt="" />
      </template>

      <template v-slot:item-icon-active>
        <img src="@/assets/img/common/tabbar/shopcart_active.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="orangered">
      <template v-slot:item-icon>
        <img src="@/assets/img/common/tabbar/profile.png" alt="" />
      </template>

      <template v-slot:item-icon-active>
        <img src="@/assets/img/common/tabbar/profile_active.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
