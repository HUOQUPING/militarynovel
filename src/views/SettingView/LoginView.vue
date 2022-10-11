<template>
  <div class="login">
    <div class="loginNav">
      <img
        src="../../assets/images/back_black.png"
        alt="返回"
        @click="comeback"
      />
      <span>登录</span>
    </div>

    <div class="loginContion">
      <p class="conTop">
        <span>使用铁血账号登录</span> <span @click="goregister">快速注册>></span>
      </p>
      <p>
        <img src="../../assets/images/user.svg" alt="用户" />
        <input type="text" class="usernameInp" placeholder="输入正确用户名" v-model="usernamecode"/>
      </p>
      <p>
        <img src="../../assets/images/password.svg" alt="密码" />
        <input
          type="password"
          class="passwordInp"
          placeholder="输入正确密码"
          ref="psd"
          v-model="passwordcode"
        />
      </p>
      <p>
        <img src="../../assets/images/password.svg" alt="验证码" />
        <input type="text" class="verificationCode" placeholder="验证码" v-model="captchacode"/>
        <canvas id="captcha" class="captcha" ref="captcha"></canvas>
        <span @click="clickCap">换一张</span>
      </p>

      <p class="checkItem">
        <input type="checkbox" class="checkbox" @click="showPsd" />
        <span>显示密码</span>
      </p>
      <button class="loginBtn" @click="userlogin">登录</button>
    </div>
  </div>
</template>

<script>
import CaptchaMini from "captcha-mini";
export default {
  data() {
    return {
      showPsdStatus: false,
      usernamecode:"",
      passwordcode:"",
      captchacode:"",
      userMsg:JSON.parse(localStorage.getItem("UserMsg")) ?? [],
    };
  },
  mounted() {
    this.initCaptcha()
  },
  methods: {
    comeback() {
      this.$router.back()
    },
    goregister(){
      this.$router.push("/register")
    },
    showPsd() {
      this.showPsdStatus = !this.showPsdStatus;
      if (this.showPsdStatus) {
        this.$refs.psd.type = "text";
      } else {
        this.$refs.psd.type = "password";
      }
    },
    initCaptcha() {
      var captcha = new CaptchaMini({
        lineWidth: 5, //线条宽度
        lineNum: 6, //线条数量
        dotR: 2, //点的半径
        dotNum: 25, //点的数量
        preGroundColor: [10, 80], //前景色区间
        backGroundColor: [150, 250], //背景色区间
        fontSize: 60, //字体大小
        fontFamily: ["Georgia", "微软雅黑", "Helvetica", "Arial"], //字体类型
        fontStyle: "stroke", //字体绘制方法，有fill和stroke
        content: "ABCDEFGHJKLMNOPQRSTUVWXYZ234567890", //验证码内容
        length: 4, //验证码长度
      });
      captcha.draw(this.$refs.captcha, (r) => {
        this.captcha = r; // 可通过 this.captcha 使用当前验证码（校验用户输入对否等）
      });
    },
    clickCap(){
      this.$refs.captcha.click()
    },
    userlogin(){
      if (!this.usernamecode.trim()) {
        alert("热血读书:请输入用户名")
      }else if (!this.passwordcode.trim()) {
        alert("热血读书:请输入密码")
      }else if (!this.captchacode.trim()) {
        alert("热血读书:请输入验证码")
      }else if (this.captchacode.toLowerCase() != this.captcha.toLowerCase()) {
        alert("热血读书:请输入正确的验证码")
      }else {
       
        for(let i = 1; i <= this.userMsg.length; i++){
          if (this.usernamecode == this.userMsg[i].userName && this.passwordcode == this.userMsg[i].psd) {
            alert("成功")
            this.userMsg[i].loginStatus = true
            localStorage.setItem("UserMsg", JSON.stringify(this.userMsg))
            this.$router.push("/setting")
            return
          }else{
            console.log(this.usernamecode,this.passwordcode);
            alert("热血读书:请输入正确的用户名和密码")
            return
          }
        }
        alert("热血读书:该用户名未注册")
      }
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

    span {
      font-size: 12px;
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

.captcha {
  width: 80px;
  height: 41px;
  vertical-align: middle;
  margin: 0 10px;
}
</style>