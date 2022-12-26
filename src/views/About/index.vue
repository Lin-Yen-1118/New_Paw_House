<template>
  <div class="parallax w-full relative">
    <div class="relative top-0 left-0 w-full h-full">
      <div
        class="drop w-80px h-80px absolute p-30px flex flex-col"
        style="position: absolute; right: 45%; top: 5%"
      ></div>
      <div
        class="drop w-280px h-280px absolute p-30px flex flex-col"
        style="position: absolute; left: 5%; top: 3%"
      >
        <div class="text-lg font-black leading-loose">核心理念</div>
        <div>
          本館創於西元2020年11月份，旨在幫助流浪的毛孩尋找好歸宿，歡迎大家來預約互動，尋找屬於自己的緣分
        </div>
      </div>
      <div
        class="drop w-250px h-250px absolute p-30px flex flex-col"
        style="position: absolute; right: 15%; top: 10%"
      >
        <div class="text-lg font-black leading-loose">營運的經費來源</div>
        <div>收入來源分別為:住宿收入占50%、助糧計畫30%、周邊產品20%</div>
      </div>
      <div
        class="drop w-310px h-310px absolute p-30px flex flex-col"
        style="position: absolute; left: 20%; top: 27%"
      >
        <div class="text-lg font-black leading-loose">困難點</div>
        <div>
          時常收到一些網友的求援訊息，在資源有限情況下只能盡己所能幫忙，願流浪動物的問題在大家努力下能獲得改善。
        </div>
      </div>

      <div
        class="drop w-310px h-310px absolute p-30px flex flex-col"
        style="position: absolute; left: 12%; top: 65%"
      >
        <div class="text-lg font-black leading-loose">聯絡資訊</div>
        <div>
          <div>地址:台北市中山區盼窩里盼窩路520號</div>
          <div>電話:02-XXXXXXX</div>
          <div>營業時間:周一至周六 08:00~21:00</div>
        </div>
      </div>

      <div
        class="drop w-280px h-280px absolute p-30px flex flex-col"
        style="position: absolute; right: 10%; top: 55%"
      >
        <div class="text-lg font-black leading-loose">作品聲明</div>
        <div>本網站為個人專題作品，僅供學習、展示之用。</div>
        <div>若有侵權疑慮，請寄信告知，E-mail:goatruby@gmail.com</div>
      </div>

      <div
        class="drop w-100px h-100px absolute p-30px flex flex-col"
        style="position: absolute; right: 45%; top: 85%"
      ></div>
    </div>
  </div>
</template>
<style scoped>
.parallax {
  background-image: url(@/assets/images/bg/dog01.png);
  width: 100%;
  height: 1200px;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  background-position: center;
  background-attachment: fixed;
  background-color: #eeeef0;
}
.drop {
  position: relative;
  /* width: 125px;
  height: 125px; */
  box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.05),
    15px 25px 10px rgba(255, 255, 255, 0.05), 15px 20px 20px rgba(0, 0, 0, 0.05),
    inset -10px -10px 15px rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
