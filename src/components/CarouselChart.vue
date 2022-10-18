<template>
  <div class="carousel">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="140" :lazy-render="true">
      <van-swipe-item><img src="https://pic1.imgdb.cn/item/634e72bc16f2c2beb1a236b6.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="https://pic1.imgdb.cn/item/634e72ce16f2c2beb1a283a5.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="https://pic1.imgdb.cn/item/634e72d916f2c2beb1a2a75a.png" alt=""></van-swipe-item>
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