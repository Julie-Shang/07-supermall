<template>
  <div class="detail-rate">
    <div class="user-info">
      <div class="user-avatar"><img :src="rate.user.avatar" alt="" /></div>
      <div class="user-info-item">
        <p>{{ rate.user.uname }}</p>
        <span>{{ rate.time | showDate }}</span>
        <span>{{ rate.style }}</span>
      </div>
    </div>
    <div class="detail-content">
      <p>{{ rate.content }}</p>
      <img
        v-for="(item, index) in rate.images"
        :key="index"
        :src="item"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/common/utils.js";

export default {
  name: "DetailRate",
  props: {
    rate: {
      type: Object
    }
  },
  filters: {
    showDate(value) {
      //1.将时间戳转成Date对象
      const date = new Date(value * 1000);
      //2.将Date进行格式化
      return formatDate(date, "yyyy/MM/dd");
    }
  }
};
</script>

<style>
.detail-rate {
  padding: 10px;
}
.user-info {
  margin-bottom: 10px;
}
.user-avatar {
  display: inline-block;
}
.user-info-item {
  display: inline-block;
}
.user-avatar img {
  width: 50px;
  border-radius: 25px;
}

.detail-content img {
  width: 50%;
  padding: 5px 3px;
}
</style>
