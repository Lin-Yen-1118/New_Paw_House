<template>
  <div
    class="flex flex-col justify-start items-start w-280px h-420px p-10px rounded-lg shadow-xl border bg-white"
  >
    <div><slot name="img"></slot></div>
    <div class="pt-10px leading-relaxed">
      <div><slot name="name"></slot></div>
      <div><slot name="entry-date"></slot></div>
      <div>
        <slot name="sex"> </slot>
      </div>
      <div><slot name="age"></slot></div>
      <div><slot name="birth-control-status"></slot></div>
      <div><slot name="health-status"></slot></div>
      <div><slot name="describe"></slot></div>
    </div>

    <div class="w-full flex justify-center p-10px pt-15px">
      <n-button type="warning">我要認養</n-button>
    </div>
  </div>
</template>
<script>
import { NButton } from 'naive-ui';
export default {
  name: 'Card',
  inheritAttrs: false,
  components: {
    NButton,
  },
  props: {
    adoptInfo: { type: Object, default: [] },
  },
};
</script>
>
