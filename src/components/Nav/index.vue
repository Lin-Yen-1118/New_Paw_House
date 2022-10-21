<template>
  <div class="h-full w-full flex justify-around items-center">
    <div>
      <router-link to="/">
        <img class="logo" src="../../assets/logo.svg" />
      </router-link>
    </div>
    <div class="w-3/5 flex justify-around items-center text-2xl">
      <div v-for="items in buttonsArr" :key="items.id" class="m-10px">
        <router-link :to="{ path: `/${items.routePath}` }">
          {{ items.title }}</router-link
        >
      </div>
    </div>

    <div class="flex">
      <div class="ml-5px mr-5px">
        <router-link to="/user">
          <img
            class="user"
            src="../../assets/images/svg/user-circle-solid.svg"
          />
        </router-link>
      </div>
      <div class="ml-5px mr-5px">
        <router-link to="/cart">
          <img class="cart" src="../../assets/images/svg/shopping-cart.svg" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const buttonsArr = reactive([
  // {
  //   id: "Home",
  //   title: "首頁",
  //   routePath: "home",
  // },
  {
    id: "about",
    title: "關於我",
    routePath: "about",
  },
  {
    id: "adopt",
    title: "我要認養",
    routePath: "adopt-info",
    children: [
      {
        id: "adoptInfo",
        title: "認養須知",
        routePath: "adopt-info",
      },
      {
        id: "adoptDogs",
        title: "認養狗狗",
        routePath: "adopt-animals",
      },
      {
        id: "adoptCats",
        title: "認養貓貓",
        routePath: "adopt-animals",
      },
      {
        id: "adoptRabbits",
        title: "認養兔兔",
        routePath: "adopt-animals",
      },
      {
        id: "adoptRodents",
        title: "認養鼠鼠",
        routePath: "adopt-animals",
      },
    ],
  },
  {
    id: "room",
    title: "我要住宿",
    routePath: "room",
  },
  {
    id: "products",
    title: "商品專區",
    routePath: "products",
  },
]);
</script>
<style scoped>
.logo {
  width: 50px;
  height: 50px;
}
.user {
  width: 30px;
  height: 30px;
}
.cart {
  width: 30px;
  height: 30px;
}
</style>
