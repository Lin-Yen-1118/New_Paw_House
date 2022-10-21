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
import Layout from "./layout/Layout.vue";
import Nav from "./components/Nav/index.vue";
</script>
