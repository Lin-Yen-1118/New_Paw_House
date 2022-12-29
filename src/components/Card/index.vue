<template>
  <div
    class="flex flex-col justify-start items-start w-280px h-380px p-10px rounded-lg shadow-xl border"
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
  </div>
</template>
<script>
export default {
  name: 'Card',
  inheritAttrs: false,
  props: {
    adoptInfo: { type: Object, default: [] },
  },
};
</script>
>
