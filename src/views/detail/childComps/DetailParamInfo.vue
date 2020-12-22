<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table
      class="info-size"
      v-for="(sizes, index) in paramInfo.sizes"
      :key="index"
    >
      <tr v-for="(tr, indey) in sizes" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">
          {{ td }}
          <!-- <span v-for="(item, index) in td" :key="index">{{ item }}</span> -->
          <!-- <span v-for="(item, index) in td" :key="index">{{ item }}</span> -->
        </td>
      </tr>
    </table>

    <table class="info-param">
      <tr v-for="(item, index) in paramInfo.infos" :key="index">
        <td class="info-param-key">{{ item.key }}</td>
        <td class="info-param-value">{{ item.value }}</td>
      </tr>
    </table>

    <div class="info" v-if="paramInfo.image.length !== 0">
      <img v-lazy="paramInfo.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object
    }
  }
};
</script>

<style>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}

.param-info table {
  width: 100%;
  border-collapse: collapse;
}

.param-info table tr {
  height: 42px;
}

.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.info-param-key {
  width: 95px;
}
.info-param-value {
  color: var(--color-tint);
  padding-left: 20px;
}

.info img {
  width: 100%;
}
</style>
