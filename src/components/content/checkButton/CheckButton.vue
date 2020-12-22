<template>
  <div class="check-button" :class="{ checked: isChecked }">
    <img src="@/assets/img/cart/tick.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style>
.check-button {
  border-radius: 50%;
  border: 2px solid #aaaaaa;
}

.check-button img {
  width: 100%;
}
.checked {
  border-color: red;
  background-color: red;
}
</style>
