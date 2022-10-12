<template>
  <div class="setting">
    <div class="settingNav">设置</div>
    <div class="loginUser" @click="goLogin">
      <img src="../../assets/images/personal_icon.png" alt="用户图片" />
      <span>{{ userName }}</span>
    </div>

    <div class="expenseItem">
      <div class="record">
        <img src="../../assets/images/expend_history.png" alt="消费记录" />
        消费记录
      </div>
      <div class="record">
        <img
          src="../../assets/images/recharge_history.png"
          alt="充值记录"
        />充值记录
      </div>
      <div class="record">
        <img src="../../assets/images/racharge.png" alt="充值" />充值
      </div>
    </div>

    <div class="settingItem">
      <div>意见反馈<span>&gt;</span></div>
      <div>检查更新<span>&gt;</span></div>
      <div>赏个好评<span>&gt;</span></div>
      <div>清除缓存<span>&gt;</span></div>
      <div>关于<span>&gt;</span></div>
      <div @click="exitUser">退出账号<span>&gt;</span></div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
  data() {
    return {
      userMsg: JSON.parse(localStorage.getItem("UserMsg")) ?? [],
      userName: null ?? "点击登录",
    };
  },
  mounted() {
    this.checkLogin();
  },
  methods: {
    goLogin() {
      if (this.userName == "点击登录") {
        this.$router.push("/login");
      }
    },
    checkLogin() {
      for (let i = 0; i < this.userMsg.length; i++) {
        if (this.userMsg[i].loginStatus == true) {
          this.userName = this.userMsg[i].userName;
          return;
        }
      }
    },
    exitUser() {
      if (this.userName != "点击登录") {
        Dialog.confirm({
          message:"热血读书:是否退出账号"
        })
        .then(()=>{
          for (let i = 0; i < this.userMsg.length; i++) {
            if (this.userName == this.userMsg[i].userName) {
              this.userMsg[i].loginStatus = false;
              localStorage.setItem("UserMsg", JSON.stringify(this.userMsg));
              this.userName = null ?? "点击登录";
            }
          }
           Toast("热血读书:退出成功");
        })
        .catch(()=>{
          return;
        })
      }else {
         Toast("热血读书:当前未登录账号")
      }
    },
  },
};
</script>

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
      color: rgb(237, 126, 56);
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
      flex: 1;
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
    height: 275px;
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

    & > div:nth-child(6) {
      border-bottom: 0px;
    }
  }
}
</style>