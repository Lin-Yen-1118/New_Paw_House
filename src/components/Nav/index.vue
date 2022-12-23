<template>
  <div
    class="h-full w-full flex justify-between items-center sticky top-0 z-50 select-none pl-10px pr-10px"
    style="background-color: rgba(255, 255, 255, 0.7)"
  >
    <div class="relative pl-10px">
      <router-link to="/"> </router-link>
      <img class="logo" :src="logoImg" />
    </div>
    <!-- 這邊的 ref="target" 為用來做收合subMenu (用法來源:https://vueuse.org/core/onclickoutside/#demo)-->
    <div class="w-3/5 flex justify-around items-center text-2xl">
      <div
        ref="target"
        v-for="items in MenuArr"
        :key="items.id"
        class="custom_active m-10px flex relative cursor-pointer"
        @click="getSubMenu(items.id)"
      >
        <img class="" :src="getImgUrl(items.imgurl)" :alt="items.title" />
        <div class="flex ml-5px cursor-pointer">
          {{ items.title }}
          <div v-show="items.routePath === ''">
            <div
              class="arrow"
              :class="
                currentSubMenu === items.id && defaultSubMenuStatus === true
                  ? 'rotate'
                  : ''
              "
            ></div>
          </div>
        </div>
        <template v-if="items.routePath !== ''">
          <router-link :to="{ path: `/${items.routePath}` }"> </router-link>
        </template>

        <!-- 下拉選單 -->

        <div
          class="sub_menu absolute top-30px z-50"
          :class="
            currentSubMenu === items.id && defaultSubMenuStatus === true
              ? ''
              : 'hidden'
          "
        >
          <div
            v-for="subMenuItems in items.subMenu"
            :key="subMenuItems.id"
            class="sub_hover relative top-0px left-40px p-10px pt-2 pb-2 bg-white"
          >
            <div v-if="subMenuItems !== undefined" class="flex">
              {{ subMenuItems.title }}
            </div>

            <router-link :to="{ path: `${subMenuItems.routePath}` }">
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="flex pr-10px">
      <div class="ml-10px mr-10px relative">
        <router-link to="/user"> </router-link>
        <img :src="userImg" />
      </div>
      <div class="ml-10px mr-10px relative">
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
import { onClickOutside } from '@vueuse/core';

const MenuArr = reactive([
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
    title: '住宿相關',
    routePath: '',
    imgurl: '../../assets/images/svg/rabbit01',
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
    title: '周邊商品',
    routePath: 'products',
    imgurl: '../../assets/images/svg/mouse01',
  },
]);

const getImgUrl = (img: string) => {
  return new URL(`${img}.svg`, import.meta.url).href;
};

let defaultSubMenuStatus = ref(false);

const currentSubMenu = ref('');
const getSubMenu = (items: string) => {
  MenuArr.forEach((o) => {
    if (o.id === items) {
      defaultSubMenuStatus.value = true;
      currentSubMenu.value = items;
    }
  });
};

//當子選單失去焦點，就收起來
const target = ref(null);
onClickOutside(target, (event) => {
  defaultSubMenuStatus.value = false;
});
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
  position: absolute;
  top: 12px;
  right: -15px;
  border-color: transparent transparent transparent #000000;
  transform: rotate(90deg);
}
.rotate {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 0 6px 10px;
  position: absolute;
  top: 12px;
  right: -15px;
  border-color: transparent transparent transparent #000000;
  transform: rotate(270deg);
  text-align: center;
  animation-name: rotate;
  animation-duration: 0.3s;
  animation-direction: alternate-reverse;
}
@keyframes rotate {
  0% {
    transform: rotate(90deg);
    border-color: transparent transparent transparent rgb(59, 48, 7);
  }
  50% {
    transform: rotate(180deg);
    border-color: transparent transparent transparent rgb(137, 120, 48);
  }
  100% {
    transform: rotate(270deg);
    border-color: transparent transparent transparent rgb(221, 198, 102);
  }
}

.custom_active:hover {
  color: #6a5412;
}

.custom_active:hover > img {
  animation: rotateImg 2s infinite;
  transform-origin: 50% 50%;
}
@keyframes rotateImg {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.sub_hover {
  color: #000000;
}
.sub_hover:hover {
  color: #6a5412;
}

.custom_active:hover > .sub_menu {
  display: block;
}
</style>
