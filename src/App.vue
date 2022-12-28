<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <Nav></Nav>
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in" appear :key="$route.path">
        <Layout>
          <component :is="Component" />
        </Layout>
      </Transition>
    </router-view>
    <Footer></Footer>
  </n-config-provider>
</template>
<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui';
import Layout from './Layout/layout.vue';
import Nav from './components/Nav/index.vue';
import Footer from './components/Footer/index.vue';
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#0082cb',
  },
  Select: {
    peers: {
      InternalSelection: {
        borderHover: '1px solid #0082cb',
        borderFocus: '1px solid #0082cb',
        border: '1px solid #0082cb',
      },
    },
  },
};
const theme = null;
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
  background-color: #faf6f1;
}
</style>
