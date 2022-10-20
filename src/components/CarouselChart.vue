<template>
  <div class="carousel">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="140" :lazy-render="true">
      <van-swipe-item><img src="../assets/images/1.webp" alt=""></van-swipe-item>
      <van-swipe-item><img src="../assets/images/2.webp" alt=""></van-swipe-item>
      <van-swipe-item><img src="../assets/images/3.webp" alt=""></van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  overflow: hidden;
}
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>