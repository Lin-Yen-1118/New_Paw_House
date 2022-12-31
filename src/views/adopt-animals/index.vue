<template>
  <div class="p-10px w-full flex justify-center items-center">
    <div class="w-full flex justify-center items-center h-80px">
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

    <div
      class="mt-80px fixed top-130px flex w-full flex justify-center items-center p-10px"
    >
      <div
        class="flex justify-center items-center flex-wrap bg-white overflow-y-auto w-full p-10px pt-20px pb-20px"
        style="height: 68vh"
      >
        <div
          class="w-full rounded-md grid auto-rows-auto gap-2 flex justify-center"
          style="grid-gap: 20px; grid-template-columns: repeat(auto-fit, 275px)"
        >
          <div
            v-for="adoptItems in filterAdoptAnimalsData"
            :key="adoptItems.id"
            class=""
          >
            <Card :adopt-info="adoptItems">
              <template #img>
                <img
                  :src="getImageUrl(adoptItems)"
                  alt=""
                  class="w-260px h-180px"
                />
              </template>
              <template #name>
                <div class="flex">
                  <div>小名:&nbsp;</div>
                  <div>
                    {{ adoptItems.name }}
                  </div>
                </div>
              </template>

              <template #entry-date>
                <div class="flex">
                  <div>入園時間:&nbsp;</div>
                  <div>{{ adoptItems.entryDate }}</div>
                </div>
              </template>
              <template #sex>
                <div class="flex">
                  <div>性別:&nbsp;</div>
                  <div>
                    <template v-if="adoptItems.sex === '1'">公</template>
                    <template v-if="adoptItems.sex === '2'">母 </template>
                  </div>
                </div>
              </template>
              <template #age>
                <div class="flex">
                  <div>年齡:&nbsp;</div>
                  <div>{{ adoptItems.age }}&nbsp;歲</div>
                </div>
              </template>
              <template #birth-control-status>
                <div class="flex">
                  <div>節育狀態:&nbsp;</div>
                  <div>
                    {{ adoptItems.birthControlStatus }}
                  </div>
                </div>
              </template>
              <template #health-status>
                <div class="flex">
                  <div>健康狀態:&nbsp;</div>
                  <div>
                    {{ adoptItems.healthStatus }}
                  </div>
                </div>
              </template>
              <template #describe>
                <div class="flex">
                  <div>描述:&nbsp;</div>
                  <div>
                    {{ adoptItems.describe }}
                  </div>
                </div>
              </template>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import { NSelect, SelectOption } from 'naive-ui';
import { getAdoptAnimalsData } from '@/api/adoptAnimals.js';
import Card from '@/components/Card/index.vue';

const adoptTypeArr = reactive([
  { id: 'dog', title: '狗狗', label: '' },
  { id: 'cat', title: '貓貓', label: '' },
  { id: 'rabbit', title: '兔兔', label: '' },
  { id: 'guineaPig', title: '天竺鼠', label: '' },
  { id: 'hamster', title: '倉鼠', label: '' },
]);

const value = ref([]);
const selectOptionAnimal = ref('');
let selectAdoptAnimalsData = reactive([]);
let filterAdoptAnimalsData = reactive([]);

function handleUpdateValue(value: string) {
  selectOptionAnimal.value = value;
  selectValue(selectOptionAnimal.value);
}

function selectValue(selectOptionAnimal: string) {
  filterAdoptAnimalsData.length = 0;
  selectAdoptAnimalsData.map((o) => {
    if (o.type === selectOptionAnimal) {
      return filterAdoptAnimalsData.push(o);
    }
  });
}

//取得圖片的動態路徑
function getImageUrl(data: string) {
  const fileFirstName = `${data.type}s`;
  const fileSecondName = data.imgUrl;
  return new URL(
    `./../../assets/images/${fileFirstName}/${fileSecondName}`,
    import.meta.url
  ).href;
}

onMounted(async () => {
  const adoptAnimals = await getAdoptAnimalsData();
  selectAdoptAnimalsData = adoptAnimals.data;
});
</script>
