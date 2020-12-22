<template>
  <el-carousel height="360px">
    <el-carousel-item v-for="(item, index) in topImages" :key="index">
      <img class="detail-carousel-imgs" :src="item" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "DetailCarousel",
  data() {
    return {
      isLoad: false
    };
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.detail-carousel-imgs {
  width: 100%;
  height: 500px;
}

.el-carousel__button {
  width: 6px;
  height: 6px;
  border-radius: 3px;
}
</style>
