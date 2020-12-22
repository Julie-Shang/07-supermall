<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      //默认情况下BScroll是不可以实时监听滚动位置的，可以通过probe侦测
      //属性值：0、1、2、3
      //0、1都是不侦测实时位置
      //2：在手指滚动的过程中侦测，手指离开后的惯性滚动过程中不侦测
      //3：只要是滚动，都侦测
      probeType: this.probeType,
      //上拉加载
      pullUpLoad: this.pullUpLoad
    });

    //2.监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        //自定义了一个scroll事件，传递了position值
        this.$emit("scroll", position);
      });
    }
    //3.监听scroll滚动到底部
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      return this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      return this.scroll.finishPullUp();
    },
    refresh() {
      return this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>

<style></style>
