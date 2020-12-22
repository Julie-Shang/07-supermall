<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">
        <img src="@/assets/img/common/collect.png" alt="" />
        {{ goodsItem.cfav }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  methods: {
    imageLoad() {
      if (this.$route.path.indexOf("/home") !== -1) {
        this.$bus.$emit("homeItemImageLoad");
      } else if (this.$route.path.indexOf("/detail") !== -1) {
        this.$bus.$emit("detailItemImageLoad");
      }
    },
    itemClick() {
      console.log(this.goodsItem.iid);
      //this.$router.push("/detail/" + this.goodsItem.iid);
      if (this.goodsItem.iid) {
        // this.$router.push({
        //   path: "/detail/",
        //   query: {
        //     iid: this.goodsItem.iid
        //   }
        // });
        this.$router.push("/detail/" + this.goodsItem.iid);
      } else {
        // this.$router.push({
        //   path: "/detail/",
        //   query: {
        //     iid: this.goodsItem.item_id
        //   }
        // });
        this.$router.push({
          name: "Detail",
          params: { iid: this.goodsItem.item_id }
        });
      }
    }
  }
};
</script>

<style>
.goods-list-item {
  width: 45%;
  font-size: 10px;
  padding-bottom: 8px;
}

.goods-list-item img {
  width: 100%;
  border-radius: 6px;
}
.goods-info {
  text-align: center;
}
.goods-info p {
  white-space: nowrap; /*一行显示*/
  overflow: hidden; /*超出部分隐藏*/
  text-overflow: ellipsis; /*用...代替超出部分*/
  padding: 2px auto;
}

.goods-info span {
  height: 10px;
  line-height: 10px;
  padding: 5px;
}
.price {
  color: var(--color-tint);
  padding-right: 5px;
  margin-top: 5px;
}
.collect img {
  vertical-align: middle;
  width: 10px;
  height: 10px;
}
</style>
