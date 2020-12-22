<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control
      @tabClick="tabClick"
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      ref="tabControl1"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <carousel
        :banners="banners"
        @carouselImageLoad="carouselImageLoad"
      ></carousel>
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        @tabClick="tabClick"
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        ref="tabControl2"
        v-show="!isTabFixed"
      />
      <goods-list :goods="showGoods" />
    </scroll>

    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll.vue";

import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList.vue";

import Carousel from "@/views/home/childComps/Carousel";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";
import { debounce } from "@/common/utils.js";
import { backTopMixin } from "@/common/mixin.js";

export default {
  name: "Home",
  components: {
    NavBar,
    Carousel,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
  },
  mixins: [backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isTabFixed: false,
      tabOffSetTop: 0,
      saveY: 0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
    this.getHomeGoods("new");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    //3.监听item中图片加载完成
    this.$bus.$on("homeItemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    /* 事件监听相关方法 */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    /* 网络请求相关方法 */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        //对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        //事情做完，需要调用finishPullUp()方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
        this.$refs.scroll.finishPullUp();
      });
    },
    //事件监听相关方法
    // backTop() {
    //   this.$refs.scroll.scrollTo(0, 0, 500);
    // },
    contentScroll(position) {
      this.ListenShowBackTop(position);
      this.isTabFixed = -position.y > this.tabOffSetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    carouselImageLoad() {
      this.tabOffSetTop = this.$refs.tabControl2.$el.offsetTop;
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh; /* 
  padding-top: 44px; */
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /* 
  在使用原生浏览器滚动时，为了不让导航跟随滚动设置的属性。
  使用Bett-Scroll 时不需要设置该属性
  */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  font-size: 20px;
  letter-spacing: 6px; */
}

.content {
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>
