<template>
  <div class="">
    <div
      class="w-full overflow-auto overflow-x-hidden"
      :class="$route.name !== 'home' ? 'space-for-functionBar' : ''"
    >
      <slot slot="default"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import VueRouter from 'vue-router';
export default {
  name: 'Layout',
  component: {},
  inheritAttrs: false,
};
</script>
<style scoped>
.space-for-functionBar {
  height: calc(100vh - 255px);
}
</style>
