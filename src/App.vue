<template>
  <Nav></Nav>
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in" appear :key="$route.path">
      <Layout>
        <component :is="Component" />
      </Layout>
    </Transition>
  </router-view>
  <Footer></Footer>
</template>
<script setup lang="ts">
import Layout from './Layout/layout.vue';
import Nav from './components/Nav/index.vue';
import Footer from './components/Footer/index.vue';
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
body {
  background-color: #f4f0eb;
}
</style>
