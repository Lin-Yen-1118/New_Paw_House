<template>
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
  background-position: 100% 80%;
  background-attachment: fixed;
}
</style>
