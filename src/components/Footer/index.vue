<template>
  <div class="h-200px flex">
    <div class="bgImg flex justify-around items-center p-10px">
      <div class="bg_filter absolute w-full h-full"></div>
      <div class="flex justify-between p-10px leading-relaxed">
        <div class="relative w-1/3">
          <div class="drop">
            <router-link to="/"> </router-link>
            <img class="logo" :src="logoImg" />
          </div>
        </div>
        <div class="text-white w-1/3 text-lg relative z-2">
          <div>
            <div>盼窩|地址:台北市中山區盼窩里盼窩路520號</div>
            <div>電話:02-XXXXXXX</div>
            <div>營業時間:周一至周六 08:00~21:00</div>
          </div>
          <div class="flex justify-start items-center pt-10px">
            <div class="m_drop p-8px mr-15px">
              <img :src="fbImg" alt="facebook" />
            </div>
            <div class="m_drop p-8px mr-15px">
              <img :src="lineImg" alt="line" />
            </div>
            <div class="m_drop p-8px mr-15px">
              <img :src="igImg" alt="instagram" />
            </div>
          </div>
        </div>
        <div class="text-white w-1/3 text-lg relative z-2">
          本網站為緯育TibaMe前端設計工程師班第68期學員專題作品，本平台僅供學習、展示之用。
          參考資源:XXXXXXXXXXXXX。若有侵權疑慮，您可以私訊[TibaMe-前端設計工程師養成班]，
          後續會由專人協助處理，連結:https://www.facebook.com/webindex/
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import logoImg from '@/assets/logo.svg';
import fbImg from '@/assets/images/svg/facebook.svg';
import lineImg from '@/assets/images/svg/line.svg';
import igImg from '@/assets/images/svg/instagram.svg';
</script>
<style scoped>
.bgImg {
  background-image: url(@/assets/images/bg/paw02.jpg);
  width: 100%;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  bottom: 0px;
  background-position: 100% 10%;
  background-attachment: fixed;
}
/* .bgImg {
  background-color: rgba(223, 214, 201, 0.7);
} */
img {
  width: 35px;
  height: 35px;
}
.logo {
  width: 72px;
  height: auto;
}

/* 水滴造型 */
.drop {
  position: relative;
  width: 125px;
  height: 125px;
  box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.05),
    15px 25px 10px rgba(255, 255, 255, 0.05), 15px 20px 20px rgba(0, 0, 0, 0.05),
    inset -10px -10px 15px rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.drop::before {
  content: '';
  position: absolute;
  top: 16px;
  left: 35px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
}
.drop::after {
  content: '';
  position: absolute;
  top: 28px;
  left: 18px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
}

.m_drop {
  position: relative;
  width: 46px;
  height: 46px;
  box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.05),
    15px 25px 10px rgba(255, 255, 255, 0.05), 15px 20px 20px rgba(0, 0, 0, 0.05),
    inset -10px -10px 15px rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg_filter {
  border-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: contrast(40%);
}
</style>
