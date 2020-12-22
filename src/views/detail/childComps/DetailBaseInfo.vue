<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span v-for="(item, index) in goods.columns" :key="index">{{
        item
      }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object
    }
  }
};
</script>

<style>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.info-title {
  color: rgb(32, 32, 32);
}

.info-price {
  margin-top: 15px;
}

.n-price {
  font-size: 20px;
  color: var(--color-tint);
}

.o-price {
  font-size: 12px;
  text-decoration: line-through;
  padding: 0 5px;
}

.discount {
  padding: 2px 4px;
  font-size: 10px;
  border-radius: 7px;
  color: var(--color-background);
  background-color: var(--color-tint);
}

.info-other {
  display: flex;
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(223, 222, 222, 0.609);
}

.info-other > span {
  flex: 1;
}
.info-service {
  display: flex;
  font-size: 10px;
  text-align: center;
  color: rgb(46, 45, 45);
  margin-top: 10px;
  margin-bottom: 10px;
}
.info-service-item {
  flex: 1;
}
.info-service-item img {
  width: 10px;
  margin-right: 2px;
}
</style>
