<template>
<<<<<<< HEAD
  <div class="">
    <div class="relative w-full h-full">
      <div class="bg"></div>
    </div>
  </div>
  <div>main context</div>
</template>
<script lang="ts" setup></script>
<style>
.bg {
  background-image: url(@/assets/images/bg/01.jpg);
  width: 100%;
  height: 1200px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
=======
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
>>>>>>> origin/feature
  background-position: 100% 80%;
  background-attachment: fixed;
}
</style>
