<template>
  <div class="setting">
    <div class="settingNav">设置</div>
    <router-view></router-view>
    <router-link tag="div" class="loginUser" to="/login">
      <img src="../../assets/images/personal_icon.png" alt="用户图片" />
      <span>点击登录</span>
    </router-link>

    <div class="expenseItem">
      <div class="record">
       <img src="../../assets/images/expend_history.png" alt="消费记录"> 消费记录</div>
      <div class="record">
        <img src="../../assets/images/recharge_history.png" alt="充值记录">充值记录</div>
      <div class="record">
        <img src="../../assets/images/racharge.png" alt="充值">充值</div>
    </div>

    <div class="settingItem">
      <div>意见反馈<span>&gt;</span></div>
      <div>检查更新<span>&gt;</span></div>
      <div>赏个好评<span>&gt;</span></div>
      <div>清除缓存<span>&gt;</span></div>
      <div>关于<span>&gt;</span></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.setting {
  width: 100vw;
  height: 100vh;
  background-color: #f3f0f0;
  .settingNav {
    height: 50px;
    width: 100%;
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    text-align: center;
    line-height: 50px;
    background-color: white;
  }

  .loginUser {
    height: 120px;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid #d3d3d3;

    img {
      width: 70px;
      margin: 25px;
      vertical-align: middle;
    }

    span {
      font-size: 20px;
      vertical-align: middle;
      color: rgb(237,126,56);
    }

  }

  .expenseItem {
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 70px;
    border-bottom: 1px solid #d3d3d3;
    background-color: white;

    .record {
      flex:  1;
      display: flex;
      flex-direction: column;
      text-align: center;
      line-height: 30px;

      &:nth-child(1),
      &:nth-child(2) {
        border-right: 1px solid #d3d3d3;
      }

      img {
        width: 30px;
        margin: auto;
      }

      &:active {
        background-color: #d4cccc;
    }
    }
  }

  .settingItem {
    margin-top: 20px;
    width: 100%;
    height: 230px;
    background-color: white;
    display: flex;
    flex-direction: column;

    & > div {
      flex: 1;
      padding: 0 15px;
      line-height: 45px;
      border-bottom: 1px solid #d3d3d3;

      span {
        float: right;
        color: #aca9a9;
      }

      &:active {
        background-color: #d4cccc;
    }
    }

    & >div:nth-child(5){
      border-bottom: 0px;
    }

    
  }
}
</style>