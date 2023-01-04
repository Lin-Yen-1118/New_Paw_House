<template>
  <div class="">
    <div class="relative top-0 left-0 w-full h-full">
      <div class="bg">
        <div class="bg_p_mask">
          <div class="bg_p select-none">我在盼窩等家，等你</div>
        </div>
      </div>
    </div>
  </div>
  <div class="p-10px w-full">
    <div
      class="flex justify-center items-center w-full text-2xl font-medium p-20px select-none"
    >
      等家毛孩
    </div>
    <div class="flex justify-center items-center w-full flex-wrap">
      <template v-for="adoptItems in adoptArr" :key="adoptItems.id">
        <div class="cursor-pointer relative">
          <img
            class="w-60 h-60 p-5px"
            :class="
              adoptItems.id === 'dog' ||
              adoptItems.id === 'rabbit' ||
              adoptItems.id === 'hamster'
                ? 'up_down_animation'
                : 'down_up_animation'
            "
            :src="adoptItems.imgUrl"
            :alt="adoptItems.alt"
          />
          <router-link to="/adopt-animals"> </router-link>
        </div>
      </template>
    </div>

    <div
      class="flex justify-center items-center w-full text-2xl font-medium pt-20px p-20px select-none"
    >
      住宿服務
    </div>
    <div class="flex justify-center items-center">
      <template v-for="roomItems in roomArr" :key="roomItems.id">
        <div class="hover_blur cursor-pointer relative">
          <img
            class="w-60 h-90 <xl:(h-auto)"
            :src="roomItems.imgUrl"
            :alt="roomItems.alt"
          />
          <router-link to="/room"> </router-link>
        </div>
      </template>
    </div>

    <div
      class="flex justify-center items-center w-full text-2xl font-medium pt-20px p-20px select-none"
    >
      寵物寄宿服務
    </div>
    <div class="flex justify-center items-center">
      <div
        v-for="items in roomPetArr"
        :key="items.id"
        class="pet_room cursor-pointer relative"
      >
        <div class="hover_blur">
          <img
            class="w-60 h-90 <xl:(h-auto)"
            :src="items.imgUrl"
            :alt="items.alt"
          />
          <router-link to="/room"> </router-link>
        </div>
        <div
          class="pet_room_items text-lg text-white absolute top-0 left-0 w-full h-full flex justify-center items-end z-1 pb-10px"
        >
          <div class="absolute z-2 select-none">{{ items.alt }}</div>
        </div>
      </div>
    </div>
    <div
      class="flex justify-center items-center w-full text-2xl font-medium pt-20px p-20px select-none"
    >
      協助毛孩生活更美好
    </div>
    <div class="flex justify-center h-490px">
      <div class="cursor-pointer relative h-320px pl-10px pr-10px">
        <img class="w-110 h-75 <xl:(h-auto)" :src="foodAidImg" alt="" />
        <router-link to="/products"> </router-link>
        <div class="text-xl p-5px select-none">助糧計畫</div>
        <div class="p-5px leading-relaxed">
          助糧，最<span class="text-red-500">食</span>在的幫助
        </div>
      </div>
      <div class="cursor-pointer relative h-320px pl-10px pr-10px">
        <img class="w-110 h-75 <xl:(h-auto)" :src="volunteerImg" alt="" />
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
import { ref, reactive } from 'vue';
import dogImg from '@/assets/images/bg/dog.jpg';
import catImg from '@/assets/images/bg/cat.jpg';
import rabbitImg from '@/assets/images/bg/rabbit.jpg';
import hamsterImg from '@/assets/images/bg/hamster.jpg';
import guineaPigImg from '@/assets/images/bg/guineapig.jpg';
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

const adoptArr = reactive([
  { id: 'dog', imgUrl: dogImg, alt: '狗狗認養' },
  { id: 'cat', imgUrl: catImg, alt: '貓貓認養' },
  { id: 'rabbit', imgUrl: rabbitImg, alt: '兔兔認養' },
  { id: 'guineaPig', imgUrl: guineaPigImg, alt: '天竺鼠認養' },
  { id: 'hamster', imgUrl: hamsterImg, alt: '倉鼠認養' },
]);

const roomArr = reactive([
  { id: 'room01', imgUrl: room01Img, alt: '溫馨小房' },
  { id: 'room02', imgUrl: room02Img, alt: '寬敞大房' },
  { id: 'room03', imgUrl: room03Img, alt: '豪華家庭房' },
  { id: 'room04', imgUrl: room04Img, alt: '豪華家庭房' },
]);

const roomPetArr = reactive([
  { id: 'dog', imgUrl: dogRoomImg, alt: '狗狗寄宿' },
  { id: 'cat', imgUrl: catRoomImg, alt: '貓貓寄宿' },
  { id: 'rabbit', imgUrl: rabbitRoomImg, alt: '兔兔寄宿' },
  { id: 'guineaPig', imgUrl: guineaPigRoomImg, alt: '天竺鼠寄宿' },
  { id: 'hamster', imgUrl: hamsterRoomImg, alt: '倉鼠寄宿' },
]);

function getImageUrl() {
  return new URL(`./dir/${name}.png`, import.meta.url).href;
}
</script>
<style scoped>
.bg {
  background-image: url(@/assets/images/bg/01.jpg);
  width: 100%;
  height: 1200px;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  position: relative;
  background-position: 100% 75%;
  /* background-position: 0px 75%; */
  background-attachment: fixed;
}
.bg_p_mask {
  position: absolute;
  top: 180px;
  left: 110px;
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
  filter: blur(1.5px);
}

.hover_blur:hover {
  filter: blur(0px);
}

.pet_room_items {
  background-color: rgba(0, 0, 0, 0.2);
}

.pet_room_items:hover {
  filter: blur(0px);
}

.pet_room > .pet_room_items {
  display: flex;
  animation: box-down;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-iteration-count: 1;
}
@keyframes box-down {
  0% {
    height: 0%;
  }
  100% {
    height: 100%;
  }
}

.pet_room:hover > .pet_room_items {
  display: flex;
  animation: box-up;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-iteration-count: 1;
}
@keyframes box-up {
  0% {
    height: 100%;
  }
  100% {
    height: 0%;
    color: transparent;
  }
}

/* RWD */
@media (max-width: 1023.9px) {
  .hover_blur {
    filter: none;
  }
}
</style>
