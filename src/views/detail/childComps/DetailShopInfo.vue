<template>
  <div class="shop-info">
    <div class="shop-info-top">
      <img class="shop-logo" :src="shop.logo" alt="" />
      <span class="shop-name">{{ shop.name }}</span>
    </div>
    <div class="shop-info-center">
      <div class="shop-info-left">
        <div class="shop-sells">
          <div class="shop-info-item">{{ shop.sells | sellCountFilter }}</div>
          <div>总销量</div>
        </div>
        <div class="shop-goods">
          <div class="shop-info-item">{{ shop.goodsCount }}</div>
          <div>全部宝贝</div>
        </div>
      </div>

      <div class="shop-score">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td :class="item.isBetter ? 'score-better' : 'score'">
              {{ item.score }}
            </td>
            <td :class="item.isBetter ? 'is-better' : 'not-better'">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object
    }
  },
  filters: {
    sellCountFilter: function(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    }
  }
};
</script>

<style>
.shop-info-top {
  display: flex;
  height: 50px;
  margin-top: 20px;
  margin-left: 10px;
}

.shop-logo {
  width: 50px;
  height: 50px;
  border: 1px solid #ddd9d994;
  border-radius: 25px;
}

.shop-name {
  align-self: center;
  padding-left: 10px;
}

.shop-info-center {
  display: flex;
  margin-top: 20px;
  font-size: 11px;
}

.shop-info-left {
  flex: 1;
  display: flex;
  text-align: center;

  align-self: center;
}
.shop-info-item {
  font-size: 18px;
  padding-bottom: 5px;
}
.shop-sells {
  flex: 1;
}

.shop-goods {
  flex: 1;
  border-right: 1px solid rgb(218, 218, 218);
}

.shop-score {
  flex: 1;
  text-align: left;
}
.shop-score table {
  float: right;
  padding-right: 20px;
}
.shop-score table td {
  padding: 3px 6px;
}

.shop-score .score-better {
  color: var(--color-tint);
}

.score {
  color: green;
}

.not-better span {
  padding: 1px;
  background-color: green;
  color: white;
}

.is-better span {
  padding: 1px;
  background-color: var(--color-tint);
  color: white;
}

.shop-bottom {
  display: flex;
}
.enter-shop {
  margin: 10px auto;
  width: 80px;
  height: 26px;
  font-size: 14px;
  color: var(--color-tint);
  line-height: 26px;
  text-align: center;
  border: 1px solid var(--color-tint);
  border-radius: 13px;
}
</style>
