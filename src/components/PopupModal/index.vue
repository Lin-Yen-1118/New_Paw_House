<template>
  <div
    class="absolute z-99 top-0 left-0 h-full w-full"
    style="background-color: rgba(0, 0, 0, 0.5)"
    :class="show === true ? 'flex' : 'hidden'"
    @click="[$emit('isShow', show)]"
  >
    <div
      class="absolute"
      style="top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 99"
      @click.stop="isShow = false"
    >
      <div
        class="bg-white flex justify-center items-center z-99 rounded-md overflow-y-scroll h-500px w-1140px <xl:(w-840px) <lg:(w-600px) <md:(w-500px) <sm:(w-370px)"
      >
        <div class="p-10px">
          <slot>
            <AdoptForm></AdoptForm>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

import AdoptForm from '@/components/AdoptForm/index.vue';
export interface Props {
  show?: Boolean;
}
const props = withDefaults(defineProps<Props>(), {
  show: Boolean,
});

const toggle = ref(true);
function getToggle() {
  toggle.value = false;
  console.log('@@');
}
</script>
<style scoped></style>
