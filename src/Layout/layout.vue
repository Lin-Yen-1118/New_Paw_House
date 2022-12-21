<template>
  <div class="">
    <div class="space-for-functionBar w-full overflow-auto overflow-x-hidden">
      <slot slot="default"></slot>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Layout',
  component: {},
  inheritAttrs: false,
};
</script>
<style scoped>
/* .space-for-functionBar {
  height: calc(100vh - 190px);
} */
</style>
