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
      class="mt-80px fixed top-50px flex w-full flex justify-center items-center p-10px"
    >
      <div
        class="flex justify-center items-center flex-wrap bg-white overflow-y-auto w-full p-10px pt-20px pb-20px"
        style="height: 78vh"
      >
        <div
          class="w-full rounded-md grid auto-rows-auto gap-2 flex justify-center"
          style="grid-gap: 20px; grid-template-columns: repeat(auto-fit, 275px)"
        >
          <template v-if="filterAdoptAnimalsData.length === 0">
            <div
              v-for="adoptItems in defaultFilterAdoptAnimalsData"
              :key="adoptItems.id"
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
          </template>
          <template v-else>
            <div
              v-for="adoptItems in filterAdoptAnimalsData"
              :key="adoptItems.id"
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
          </template>
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
import {
  AdoptData,
  ImageUrl,
  SelectAdoptAnimalsData,
  NewItems,
  DefaultAdoptAnimalsData,
} from '@/types/index';

const adoptTypeArr = reactive([
  { id: 'all', title: '全部', label: '', value: 'all' },
  { id: 'dog', title: '狗狗', label: '', value: 'dog' },
  { id: 'cat', title: '貓貓', label: '', value: 'cat' },
  { id: 'rabbit', title: '兔兔', label: '', value: 'rabbit' },
  { id: 'guineaPig', title: '天竺鼠', label: '', value: 'guineaPig' },
  { id: 'hamster', title: '倉鼠', label: '', value: 'hamster' },
]);

const value = ref([]);
const selectOptionAnimal = ref(''); //選取項目
let selectAdoptAnimalsData: SelectAdoptAnimalsData = reactive([]); //依動物種類分類後的資料
let filterAdoptAnimalsData = reactive([]); //篩選-認養動物資料
let defaultAdoptAnimalsData: DefaultAdoptAnimalsData = reactive([]); //初始-認養動物資料
let defaultFilterAdoptAnimalsData = reactive([]); //初始-認養動物整理後資料

function handleUpdateValue(value: string) {
  selectOptionAnimal.value = value;
  selectValue(selectOptionAnimal.value);
}

function selectValue(selectOptionAnimal: string) {
  if (selectOptionAnimal === 'all') {
    filterAdoptAnimalsData.length = 0;
    selectAdoptAnimalsData.map((o: SelectAdoptAnimalsData) => {
      return filterAdoptAnimalsData.push(o as never);
    });
  } else {
    filterAdoptAnimalsData.length = 0;
    selectAdoptAnimalsData.map((o: SelectAdoptAnimalsData) => {
      if (o.type === selectOptionAnimal) {
        return filterAdoptAnimalsData.push(o as never);
      }
    });
  }
}

//取得圖片的動態路徑
function getImageUrl(data: ImageUrl) {
  const fileFirstName = `${data.type}s`;
  const fileSecondName = data.imgUrl;
  return new URL(
    `./../../assets/images/${fileFirstName}/${fileSecondName}`,
    import.meta.url
  ).href;
}

async function getDefaultAdoptApiData() {
  //取得 認養動物API
  try {
    defaultAdoptAnimalsData = await getAdoptAnimalsData();
    filterAdoptAnimalsData.length = 0;

    console.log(defaultAdoptAnimalsData, 'defaultAdoptAnimalsData');

    if (defaultAdoptAnimalsData.code === 200) {
      selectedAdoptAnimalsDataFn(defaultAdoptAnimalsData.data);
    } else {
      console.log('無資料');
    }
  } catch (err) {
    console.log('err:', err);
  }
}

function selectedAdoptAnimalsDataFn(adoptData: AdoptData) {
  adoptData.map(
    ({
      id,
      type,
      name,
      entryDate,
      sex,
      age,
      birthControlStatus,
      describe,
      healthStatus,
      imgUrl,
    }: {
      id: string;
      type: string;
      name: string;
      entryDate: string;
      sex: string;
      age: string;
      birthControlStatus: string;
      describe: string;
      healthStatus: string;
      imgUrl: string;
    }) => {
      let newItems: NewItems = {
        id,
        type,
        name,
        entryDate,
        sex,
        age,
        birthControlStatus,
        describe,
        healthStatus,
        imgUrl,
      };
      defaultFilterAdoptAnimalsData.push(newItems as never);
    }
  );
}

onMounted(async () => {
  const adoptAnimals = await getAdoptAnimalsData();
  selectAdoptAnimalsData = adoptAnimals.data;

  getDefaultAdoptApiData();
});
</script>
