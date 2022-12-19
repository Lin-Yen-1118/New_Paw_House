<template>
  <Nav></Nav>
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in" appear :key="$route.path">
      <Layout>
        <component :is="Component" />
      </Layout>
    </Transition>
  </router-view>
</template>
<script setup lang="ts">
import Layout from './layout/Layout.vue';
import Nav from './components/Nav/index.vue';
</script>
<style>
@font-face {
  font-family: 'Noto sans TC';
  src: local('Noto sans TC'), url(./font/NotoSansTC-Regular.otf);
}

a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 10;
}
</style>
