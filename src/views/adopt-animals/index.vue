<template>
  <div class="p-10px">
    <div class="w-full flex justify-center items-center h-80px p-10px">
      <n-select
        v-model:value="value"
        label-field="title"
        value-field="id"
        size="medium"
        filterable
        :options="adoptTypeArr"
        @update:value="handleUpdateValue"
      />
    </div>
    <div class="mt-80px fixed top-130px w-full h-full p-10px">
      <div class="bg-white h-800px w-full p-10px rounded-md overflow-y-scroll">
        {{ selectAdoptAnimalsData }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import { NSelect, SelectOption } from 'naive-ui';
import { getAdoptAnimalsData } from '@/api/adoptDogs.js';

const adoptTypeArr = reactive([
  { id: 'dogs', title: '狗狗', label: '' },
  { id: 'cats', title: '貓貓', label: '' },
  { id: 'rabbits', title: '兔兔', label: '' },
  { id: 'guineaPigs', title: '天竺鼠', label: '' },
  { id: 'hamsters', title: '倉鼠', label: '' },
]);

const value = ref([]);
const selectOptionAnimal = ref('cats');
let selectAdoptAnimalsData = ref('');

function handleUpdateValue(value: string) {
  selectOptionAnimal.value = value;
  console.log(selectOptionAnimal.value, '##');
  selectValue(selectOptionAnimal.value, selectAdoptAnimalsData.value);
}

function selectValue(
  selectOptionAnimal: string,
  selectAdoptAnimalsData: string
) {
  console.log(selectOptionAnimal, '$$', selectAdoptAnimalsData, '###');
  selectAdoptAnimalsData = selectAdoptAnimalsData;
}

onMounted(async () => {
  const adoptAnimals = await getAdoptAnimalsData(selectOptionAnimal.value);
  console.log(selectOptionAnimal.value, '@@@');

  selectAdoptAnimalsData.value = adoptAnimals;

  console.log(selectAdoptAnimalsData, 'selectAdoptAnimalsData');

  selectValue(selectOptionAnimal.value, adoptAnimals);
});
</script>
