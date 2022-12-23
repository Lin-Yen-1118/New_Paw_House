<template>
  <div class="parallax w-full relative">
    <div class="relative top-0 left-0 w-full h-full">
      <div class="drop w-350px h-350px absolute top-50px left-60 p-30px">
        核心理念
        本館創於西元2020年11月份，旨在幫助流浪的毛孩尋找好歸宿，歡迎大家來預約互動，尋找屬於自己的緣分
      </div>
      <div class="drop w-290px h-290px absolute top-150px left-350 p-30px">
        營運的經費來源 收入來源分別為:住宿收入占50%、助糧計畫30%、周邊產品20%
      </div>
      <div class="drop w-300px h-300px absolute top-200px left-140 p-30px">
        困難點
        時常收到一些網友的求援訊息，在資源有限情況下只能盡己所能幫忙，願流浪動物的問題在大家努力下能獲得改善。
      </div>
    </div>
  </div>
</template>
<style scoped>
.parallax {
  background-image: url(@/assets/images/bg/dog01.png);
  width: 100%;
  height: 1800px;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  background-position: 50% 50%;
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
