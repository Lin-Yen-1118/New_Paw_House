<template>
  <div class="relative z-1">
    <div class="bg">
      <img :src="bgImg" alt="" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import bgImg from '@/assets/images/bg/01.jpg';
</script>
<style scoped>
.bg > img {
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 1200px;
  background-position: 100% 80%;
  background-attachment: fixed;
}
</style>
