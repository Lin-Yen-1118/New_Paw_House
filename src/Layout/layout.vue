<template>
  <div class="p-10px bg-blue-500/50">
    <slot slot="default"></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: "Layout",
  component: {},
  inheritAttrs: false,
};
</script>
<style scoped></style>
