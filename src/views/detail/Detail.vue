<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <detail-carousel :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-param-info ref="params" :param-info="paramInfo" />
      <detail-rate ref="comment" v-if="loadDataSuccess" :rate="rate" />
      <detail-goods-images
        v-if="loadDataSuccess"
        :detail-info="detailInfo"
        @detailImageLoad="detailImageLoad"
      />
      <goods-list ref="recommend" :goods="recommends" />
    </scroll>

    <back-top @click.native="backTop" v-show="isShowBackTop" />

    <detail-bottom-bar @addCart="addToCart" /><!-- 
    <toast :message="message" :show="show" /> -->
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar.vue";
import DetailCarousel from "@/views/detail/childComps/DetailCarousel.vue";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo.vue";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo.vue";
import DetailGoodsImages from "@/views/detail/childComps/DetailGoodsImages.vue";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo.vue";
import DetailRate from "@/views/detail/childComps/DetailRate.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar.vue";

import Scroll from "@/components/common/scroll/Scroll.vue";
import Toast from "@/components/common/toast/Toast";

import { itemListenerMixin, backTopMixin } from "@/common/mixin.js";
import { mapActions } from "vuex";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  Rate,
  getRecommend
} from "@/network/detail.js";
import { debounce } from "@/common/utils.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailCarousel,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsImages,
    DetailParamInfo,
    DetailRate,
    GoodsList,
    DetailBottomBar,
    Toast
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      rate: {},
      loadDataSuccess: false,
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      message: "",
      show: false
    };
  },
  watch: {
    $route(to, from) {
      this.loadGoodsDetail();
    }
  },
  mounted() {
    this.loadGoodsDetail();
  },
  updated() {},
  methods: {
    ...mapActions(["addCart"]),
    loadGoodsDetail() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid;
      //2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
        const data = res.result;
        //1.获取顶部轮播图数据
        this.topImages = data.itemInfo.topImages;
        //2.获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        //3.获取店铺信息
        this.shop = new Shop(data.shopInfo);
        //4.获取细节图片
        this.detailInfo = data.detailInfo;
        //5.获取尺寸参数
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        //6.获取评论信息
        this.rate = new Rate(data.rate);
        this.loadDataSuccess = true;
      });

      //3.请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list;
      });

      //4.给getThemeTopY赋值
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      }, 500);
    },
    titleClick(index) {
      console.log(index, "clickFunction inner");
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    detailImageLoad() {
      this.refresh();
      this.getThemeTopY();
    },
    contentScroll(position) {
      //1.获取y值
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      //2.positionY和主题中值进行比较
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]) ||
            (i === length - 1 && positionY >= this.themeTopYs[i]))
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.ListenShowBackTop(position);
    },
    addToCart() {
      //1.获取购物车需要展示信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      //2.将商品添加到购物车
      // this.$store.dispatch("addCart", product).then(res => {
      //   console.log(res);
      // });
      this.addCart(product).then(res => {
        this.$toast.show(res, 2000);
      });
      //3.添加到购物车成功
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  background-color: #fff;
}

.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>
