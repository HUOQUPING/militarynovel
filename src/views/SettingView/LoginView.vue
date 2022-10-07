<template>
  <div class="login">
    <div class="loginNav">
      <img
        src="../../assets/images/leftarrow.svg"
        alt="返回"
        @click="comeback"
      />
      <span>登录</span>
    </div>

    <div class="loginContion">
      <p class="conTop">
        <span>使用铁血账号登录</span> <span>快速注册>></span>
      </p>
      <p>
        <img src="../../assets/images/user.svg" alt="用户" />
        <input type="text" class="usernameInp" placeholder="输入正确用户名" />
      </p>
      <p>
        <img src="../../assets/images/password.svg" alt="密码" />
        <input type="text" class="passwordInp" placeholder="输入正确密码" />
      </p>
      <p>
        <img src="../../assets/images/password.svg" alt="验证码" />
        <input type="text" class="verificationCode" placeholder="验证码" />
      </p>

      <p class="checkItem">
        <input type="checkbox" class="checkbox" /> <span>显示密码</span>
      </p>
      <button class="loginBtn">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    comeback() {
      this.$router.replace("/setting");
    },
  },
};
</script>
<style lang="scss" scoped>
.loginNav {
  width: 100%;
  height: 50px;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  text-align: center;
  line-height: 50px;
  img {
    float: left;
    width: 30px;
    vertical-align: middle;
    margin-top: 10px;
  }
  span {
    vertical-align: middle;
    margin: auto;
    margin-right: 15px;
  }
}

.loginContion {
  width: 90vw;
  margin: 5vw;
  height: 240px;

  .conTop {
    span {
      &:nth-child(2) {
        float: right;
        color: rgb(237, 126, 56);
      }
    }
  }

  .usernameInp,
  .passwordInp,
  .verificationCode {
    width: 100%;
    border: 1px solid #ccc;
    outline: none;
    margin-top: 10px;
    height: 37px;
    border-radius: 4px;
    text-indent: 35px;
  }

  p:nth-child(2),
  p:nth-child(3),
  p:nth-child(4) {
    position: relative;

    img {
      width: 15px;
      position: absolute;
      top: 23px;
      left: 10px;
    }
  }

  .verificationCode {
    width: 50%;
  }

  .checkItem {
    font-size: 12px;
    margin-top: 10px;
    .checkbox {
      width: 15px;
      height: 15px;
      vertical-align: middle;
    }

    span {
      vertical-align: middle;
    }
  }

  .loginBtn {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    border-radius: 4px;
    background-color: rgb(237, 126, 56);
    color: white;
    font-size: 16px;
    border: none;

    &:active {
      background-color: #d4cccc;
    }
  }
}
</style>