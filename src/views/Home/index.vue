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
  <div class="p-10px w-full">
    <div
      class="flex justify-center items-center w-full text-2xl font-medium p-20px"
    >
      等家毛孩
    </div>
    <div class="flex justify-center items-center w-full">
      <div class="cursor-pointer relative">
        <img
          class="up_down_animation w-60 h-60 p-5px"
          :src="dogImg"
          alt="dog"
        />
        <router-link to="/room"> </router-link>
      </div>
      <div class="cursor-pointer relative">
        <img
          class="down_up_animation w-60 h-60 p-5px"
          :src="catImg"
          alt="dog"
        />
        <router-link to="/room"> </router-link>
      </div>
      <div class="cursor-pointer relative">
        <img
          class="up_down_animation w-60 h-60 p-5px"
          :src="rabbitImg"
          alt="dog"
        />
        <router-link to="/room"> </router-link>
      </div>
      <div class="cursor-pointer relative">
        <img
          class="down_up_animation w-60 h-60 p-5px"
          :src="hamsterImg"
          alt="dog"
        />
        <router-link to="/room"> </router-link>
      </div>
      <div class="cursor-pointer relative">
        <img
          class="up_down_animation w-60 h-60 p-5px"
          :src="guineapigImg"
          alt="dog"
        />
        <router-link to="/room"> </router-link>
      </div>
    </div>

    <div
      class="flex justify-center items-center w-full text-2xl font-medium pt-20px p-20px"
    >
      住宿服務
    </div>
    <div class="flex justify-center items-center">
      <div class="hover_blur cursor-pointer relative">
        <img class="w-60 h-90" :src="room01Img" alt="" />
        <router-link to="/room"> </router-link>
      </div>
      <div class="hover_blur cursor-pointer relative">
        <img class="w-60 h-90" :src="room02Img" alt="" />
        <router-link to="/room"> </router-link>
      </div>
      <div class="hover_blur cursor-pointer relative">
        <img class="w-60 h-90" :src="room03Img" alt="" />
        <router-link to="/room"> </router-link>
      </div>
      <div class="hover_blur cursor-pointer relative">
        <img class="w-60 h-90" :src="room04Img" alt="" />
        <router-link to="/room"> </router-link>
      </div>
    </div>

    <div
      class="flex justify-center items-center w-full text-2xl font-medium pt-20px p-20px"
    >
      寵物寄宿服務
    </div>
    <div class="flex justify-center items-center">
      <div class="hover_blur cursor-pointer relative">
        <img class="w-60 h-90" :src="dogRoomImg" alt="" />
        <router-link to="/room"> </router-link>
      </div>
      <div class="hover_blur cursor-pointer relative">
        <img class="w-60 h-90" :src="catRoomImg" alt="" />
        <router-link to="/room"> </router-link>
      </div>
      <div class="hover_blur cursor-pointer relative">
        <img class="w-60 h-90" :src="rabbitRoomImg" alt="" />
        <router-link to="/room"> </router-link>
      </div>
      <div class="hover_blur cursor-pointer relative">
        <img class="w-60 h-90" :src="guineaPigRoomImg" alt="" />
        <router-link to="/room"> </router-link>
      </div>
      <div class="hover_blur cursor-pointer relative">
        <img class="w-60 h-90" :src="hamsterRoomImg" alt="" />
        <router-link to="/room"> </router-link>
      </div>
    </div>

    <div
      class="flex justify-center items-center w-full text-2xl font-medium pt-20px p-20px"
    >
      協助毛孩生活更美好
    </div>
    <div class="flex justify-center">
      <div class="cursor-pointer relative h-320px pl-10px pr-10px">
        <img class="w-110 h-75" :src="foodAidImg" alt="" />
        <router-link to="/products"> </router-link>
        <div class="text-xl p-5px">助糧計畫</div>
        <div class="p-5px leading-relaxed">
          助糧，最
          <span class="text-red-500">食</span>
          在的幫助
        </div>
      </div>
      <div class="cursor-pointer relative h-320px pl-10px pr-10px">
        <img class="w-110 h-75" :src="volunteerImg" alt="" />
        <router-link to="/room"> </router-link>
        <div class="text-xl p-5px">小小志工</div>
        <div class="p-5px leading-relaxed">
          <p>想親身照顧這些毛孩們嗎?</p>
          <p>歡迎報名當小小志工</p>
          <p>來被毛孩的純真融化</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import dogImg from '@/assets/images/bg/dog.jpg';
import catImg from '@/assets/images/bg/cat.jpg';
import rabbitImg from '@/assets/images/bg/rabbit.jpg';
import hamsterImg from '@/assets/images/bg/hamster.jpg';
import guineapigImg from '@/assets/images/bg/guineapig.jpg';
import room01Img from '@/assets/images/room/room26.jpg';
import room02Img from '@/assets/images/room/room24.jpg';
import room03Img from '@/assets/images/room/room23.jpg';
import room04Img from '@/assets/images/room/room25.jpg';
import dogRoomImg from '@/assets/images/pet_accommodation/02.jpg';
import catRoomImg from '@/assets/images/pet_accommodation/01.jpg';
import rabbitRoomImg from '@/assets/images/pet_accommodation/07.jpg';
import guineaPigRoomImg from '@/assets/images/pet_accommodation/06.jpg';
import hamsterRoomImg from '@/assets/images/pet_accommodation/09.jpg';
import foodAidImg from '@/assets/images/bg/food_aid.jpg';
import volunteerImg from '@/assets/images/bg/volunteer.jpg';
</script>
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

.down_up_animation {
  animation: down_up_animation;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  clip-path: ellipse(80px 80px at 50% 50%);
  position: relative;
  bottom: 0px;
  left: 0px;
}

@keyframes down_up_animation {
  0% {
    bottom: 5px;
    clip-path: ellipse(100px 100px at 50% 50%);
  }
  100% {
    bottom: -10px;
    clip-path: ellipse(95px 95px at 50% 50%);
  }
}
.up_down_animation {
  animation: up_down_animation;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  clip-path: ellipse(80px 80px at 50% 50%);
  position: relative;
  top: 0px;
  left: 0px;
}
@keyframes up_down_animation {
  0% {
    top: 10px;
    clip-path: ellipse(100px 100px at 50% 50%);
  }
  100% {
    top: -5px;
    clip-path: ellipse(95px 95px at 50% 50%);
  }
}
.hover_blur {
  filter: blur(2px);
}
.hover_blur:hover {
  filter: none;
}
</style>
