<template>
  <div class="">
    <div class="relative w-full h-full">
      <div class="bg">
        <div class="bg_p_mask">
          <div class="bg_p">我在盼窩等家，等你</div>
        </div>
      </div>
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
.bg_p_mask {
  position: absolute;
  top: 200px;
  left: 150px;
}
.bg_p {
  font-size: 28px;
  font-weight: 700;
  color: #ccb89f;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: url(@/assets/images/bg/01.jpg);
  background-position: bottom 20% right 50%;
  line-height: 1.5;
}
</style>
