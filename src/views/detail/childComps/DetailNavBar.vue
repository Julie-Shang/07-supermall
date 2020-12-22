<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <div class="left" @click="backClick">
          <img src="@/assets/img/common/back.png" alt="" />
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div
            class="title-item"
            v-for="(item, index) in titles"
            :key="index"
            :class="{ active: index === currentIndex }"
            @click="titleClick(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
export default {
  components: { NavBar },
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
}

.title-item {
  flex: 1;
}
.active {
  color: var(--color-tint);
}

.left {
  padding-top: 7px;
  padding-left: 15px;
}
.left img {
  width: 30px;
}
</style>
