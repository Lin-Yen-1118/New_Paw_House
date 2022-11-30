<template>
  <div class="h-full w-full flex justify-around items-center">
    <div class="relative">
      <router-link to="/"> </router-link>
      <img class="logo" :src="logoImg" />
    </div>
    <div class="w-3/5 flex justify-around items-center text-2xl">
      <div
        v-for="items in buttonsArr"
        :key="items.id"
        class="m-10px flex relative"
        @click="getChildMenu(items.routePath)"
      >
        <img :src="getImgUrl(items.imgurl)" :alt="items.title" />
        <div class="flex ml-5px">
          {{ items.title }}
          <div v-show="items.routePath === ''">
            <div class="arrow"></div>
          </div>
        </div>
        <router-link :to="{ path: `/${items.routePath}` }"> </router-link>

        <div
          class="absolute top-10"
          :class="defaultChildStatus === true ? '' : 'hidden'"
        >
          <div
            v-for="childsItems in items.children"
            :key="childsItems.id"
            class="relative top-0px left-30px p-5px pt-2 pb-2 bg-white"
          >
            <div v-show="childsItems !== undefined" class="flex">
              {{ childsItems.title }}
            </div>
            <router-link :to="{ path: `/${childsItems.routePath}` }">
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="flex">
      <div class="ml-5px mr-5px relative">
        <router-link to="/user"> </router-link>
        <img :src="userImg" />
      </div>
      <div class="ml-5px mr-5px relative">
        <router-link to="/cart"> </router-link>
        <img :src="cartImg" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import logoImg from '@/assets/logo.svg';
import userImg from '@/assets/images/svg/user-circle-solid.svg';
import cartImg from '@/assets/images/svg/shopping-cart.svg';
const buttonsArr = reactive([
  // {
  //   id: "Home",
  //   title: "首頁",
  //   routePath: "home",
  // },
  {
    id: 'about',
    title: '關於我們',
    routePath: 'about',
    imgurl: '../../assets/images/svg/dog01',
  },
  {
    id: 'adopt',
    title: '我要認養',
    routePath: '',
    imgurl: '../../assets/images/svg/cat01',
    children: [
      {
        id: 'adoptInfo',
        title: '認養須知',
        routePath: 'adopt-info',
      },
      {
        id: 'adoptDogs',
        title: '認養狗狗',
        routePath: 'adopt-animals',
      },
      {
        id: 'adoptCats',
        title: '認養貓貓',
        routePath: 'adopt-animals',
      },
      {
        id: 'adoptRabbits',
        title: '認養兔兔',
        routePath: 'adopt-animals',
      },
      {
        id: 'adoptRodents',
        title: '認養鼠鼠',
        routePath: 'adopt-animals',
      },
    ],
  },
  {
    id: 'room',
    title: '住宿相關',
    routePath: 'room',
    imgurl: '../../assets/images/svg/rabbit01',
  },
  {
    id: 'products',
    title: '周邊商品',
    routePath: 'products',
    imgurl: '../../assets/images/svg/mouse01',
  },
]);

const getImgUrl = (img: string) => {
  return new URL(`${img}.svg`, import.meta.url).href;
};

let defaultChildStatus = ref(false);
const getChildMenu = (items: string) => {
  if (items === '') {
    defaultChildStatus.value = !defaultChildStatus.value;
  } else {
    defaultChildStatus.value = false;
  }
};
</script>
<style scoped>
img {
  width: 35px;
  height: 35px;
}
.logo {
  width: 72px;
  height: auto;
}
.arrow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 0 6px 10px;
  position: relative;
  top: 30%;
  left: 10px;
  border-color: transparent transparent transparent #000000;
  transform: rotate(90deg);
}
</style>
