<template>
  <div class="goods-imgs-info">
    <div class="goods-desc">{{ detailInfo.desc }}</div>
    <div class="goods-imgs-detail">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        alt=""
        @load="imageLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsImages",
  data() {
    return {
      imagesLength: 0
    };
  },
  props: {
    detailInfo: {
      type: Object
    }
  },
  methods: {
    imageLoad() {
      //判断所有的图片都加载完成，再进行scroll.refresh()
      /* if (++this.counter === this.imagesLength) {
        this.$emit("imagesLoad");
      } */
      this.$emit("detailImageLoad");
    }
  },
  watch: {
    detailInfo() {
      //获取图片个数
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    }
  }
};
</script>

<style scoped>
.goods-imgs-info {
  width: 100vw;
  padding: 0 5px;
}

.goods-desc {
  margin: 10px 0;
  text-indent: 2em;
  font-size: 14px;
  line-height: 24px;
}

.goods-imgs-detail img {
  width: 100%;
}
</style>
