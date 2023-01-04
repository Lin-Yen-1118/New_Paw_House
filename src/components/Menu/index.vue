<template>
  <div
    class="w-full z-50 h-60px bg-white flex justify-around items-center <md:(top-60px left-0 w-full shadow-lg)"
    style="border-top: 1px solid rgba(000, 000, 000, 0.1)"
  >
    <div
      ref="target"
      v-for="items in HamburgerMenuArr"
      :key="items.id"
      @click="getSubMenu(items.id)"
      class="custom_active flex-nowrap flex items-center w-full h-full relative cursor-pointer"
    >
      <div
        class="flex justify-center items-center relative"
        :class="
          $route.name === items.routePath
            ? 'current_route'
            : 'not_current_route'
        "
        style="width: 100%; height: 100%"
      >
        <div class="flex ml-5px cursor-pointer">
          {{ items.title }}
          <div v-show="items.routePath === ''">
            <div
              class=""
              :class="
                currentSubMenu === items.id && defaultSubMenuStatus === true
                  ? ''
                  : ''
              "
            ></div>
          </div>
        </div>

        <template v-if="items.routePath !== ''">
          <router-link :to="{ path: `/${items.routePath}` }"> </router-link>
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';

const HamburgerMenuArr = reactive([
  {
    id: 'Home',
    title: '首頁',
    routePath: 'home',
  },
  {
    id: 'about',
    title: '關於我們',
    routePath: 'about',
  },
  {
    id: 'adopt',
    title: '認養',
    routePath: 'adopt-animals',

    subMenu: [
      {
        id: 'adoptInfo',
        title: '認養須知',
        routePath: '/adopt-info',
      },
      {
        id: 'adoptDogs',
        title: '認養狗狗',
        routePath: '/adopt-animals',
      },
      {
        id: 'adoptCats',
        title: '認養貓貓',
        routePath: '/adopt-animals',
      },
      {
        id: 'adoptRabbits',
        title: '認養兔兔',
        routePath: '/adopt-animals',
      },
      {
        id: 'adoptRodents',
        title: '認養鼠鼠',
        routePath: '/adopt-animals',
      },
    ],
  },
  {
    id: 'room',
    title: '住宿',
    routePath: 'room',

    subMenu: [
      { id: 'room', title: '一般住宿', routePath: 'room' },
      {
        id: 'petAccommodation',
        title: '毛孩寄宿',
        routePath: '/pet_accommodation',
      },
    ],
  },
  {
    id: 'products',
    title: '商品',
    routePath: 'products',
  },
]);

let defaultSubMenuStatus = ref(false);
const currentSubMenu = ref('');
const getSubMenu = (items: string) => {
  if (HamburgerMenuArr) {
    HamburgerMenuArr.forEach((o) => {
      if (o.id === items) {
        console.log(o.id, 'o.id');
        defaultSubMenuStatus.value = true;
        currentSubMenu.value = items;
        console.log(currentSubMenu.value);
      }
    });
  }
};
</script>
<style scoped>
.current_route {
  border-bottom: 3px solid rgb(240, 57, 88);
  color: #000000;
}
.not_current_route {
  color: #767474;
}
</style>
