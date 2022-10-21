<template>
  <div class="nav">
    <div v-for="items in buttonsArr" :key="items.id"  class="btn">
      <router-link :to="{ path: `/${items.routePath}` }"> {{items.title}}</router-link>
    </div>
  </div>
</template>
<script setup="ts">
import {ref,reactive} from 'vue'
const buttonsArr = reactive([
  {
    id: 'Home',
    title: '首頁',
    routePath: 'home',
  },
   {
    id: 'About',
    title: '關於我',
    routePath: 'about',
  },
])
</script>
<style scoped>
.nav{
  height:100px;
  width:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size:18px;
}
.btn{
  margin:10px;
}
</style>