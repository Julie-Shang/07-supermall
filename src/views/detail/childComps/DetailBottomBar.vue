<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addCart");
    }
  }
};
</script>

<style>
.bottom-bar {
  height: 49px;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  text-align: center;
}

.bar-item {
  flex: 1;
  display: flex;
}

.bar-item > div {
  flex: 1;
}

.bar-left .text {
  font-size: 12px;
}

.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 6px auto 0;
  background: url("../../../assets/img/common/detail/detail_bottom.png") 0 0/100%;
}

.bar-left .service {
  background-position: 0 -52px;
}

.bar-left .shop {
  background-position: 0 -97px;
}

.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 58px;
}

.bar-right .cart {
  line-height: 49px;
  background-color: #ffe817;
  color: #333;
}

.bar-right .buy {
  line-height: 49px;
  background-color: #ff6699;
}

.sport-ball {
  position: absolute;
  left: 225px;
  bottom: 20px;
}
</style>
