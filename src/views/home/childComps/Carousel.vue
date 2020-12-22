<template>
  <div class="my-carousel">
    <el-carousel height="160px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img class="carousel-imgs" :src="item.image" @load="imageLoad" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      isLoad: false
    };
  },
  props: {
    banners: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("carouselImageLoad");
        this.isLoad = true;
      }
    }
  }
};
</script>

<style>
.carousel-imgs {
  width: 100%;
  height: 100%;
}
</style>
