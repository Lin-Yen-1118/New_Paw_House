<template>
  <div class="p-10px">
    <div class="w-full flex justify-center items-center h-80px p-10px">
      <n-select
        label-field="title"
        value-field="id"
        filterable
        :options="adoptTypeArr"
      />
    </div>
    <div class="mt-80px fixed top-130px w-full h-full p-10px">
      <div
        class="bg-white h-800px w-full p-10px rounded-md overflow-y-scroll"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { NSelect } from 'naive-ui';

const adoptTypeArr = reactive([
  { id: 'dog', title: '狗狗', label: '' },
  { id: 'cat', title: '貓貓', label: '' },
  { id: 'rabbit', title: '兔兔', label: '' },
  { id: 'guineaPig', title: '天竺鼠', label: '' },
  { id: 'hamster', title: '倉鼠', label: '' },
]);
</script>
