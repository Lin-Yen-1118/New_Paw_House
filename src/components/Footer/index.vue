<template>
  <div class="h-300px">
    <div class="bgImg"></div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
.bgImg {
  background-image: url(@/assets/images/bg/paw02.jpg);
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  bottom: 0px;
  background-position: 100% 10%;
  background-attachment: fixed;
}
</style>
