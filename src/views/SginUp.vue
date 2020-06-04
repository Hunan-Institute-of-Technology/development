<template>
  <div class="signup">
    <pag-header></pag-header>
    <div class="wrapper">
      <div class="container">
        <div class="nav-header-logo">
          <a href="/#/index"></a>
        </div>
        <h2>注册账号</h2>
        <div class="sginupform">
          <div class="from">
            <span>账户用户名</span>
            <div class="input">
              <el-input placeholder="请输入账户用户名" class="inputtext" v-model="username" clearable></el-input>
            </div>
          </div>
          <div class="from">
            <span>密码</span>
            <div class="input">
              <el-input placeholder="请输入8位以上的密码" v-model="password" class="inputtext" show-password></el-input>
            </div>
          </div>
          <div class="from">
            <span>手机号码</span>
            <div class="input usertelephone">
              <el-input
                placeholder="请输入您的手机号码"
                v-model="telephone	"
                class="inputtext"
                show-word-limit
                maxlength="11"
              ></el-input>
              <div class="cbutton">
                <el-button
                  type="info"
                  @click="sends"
                  v-if="!sendMsgDisabled"
                  icon="el-icon-message"
                  circle
                ></el-button>
                <el-button
                  type="info"
                  v-if="sendMsgDisabled"
                  style="background:#dfe6e9"
                  icon="el-icon-loading"
                  circle
                ></el-button>
                <span v-if="sendMsgDisabled">{{time+'秒重新后获取'}}</span>
                <span v-if="!sendMsgDisabled" @click="sends">点击获取验证码</span>
              </div>
            </div>
          </div>
          <div class="from">
            <span>验证码</span>
            <div class="input usertelephone">
              <el-input
                placeholder="请输入验证码"
                v-model="checkcode"
                show-word-limit
                maxlength="6"
                class="inputtext"
              ></el-input>
              <div class="cbutton" @click="checkTelCode">
                <el-button
                  type="info"
                  v-show="iconChoice == 'check' "
                  icon="el-icon-s-check"
                  circle
                ></el-button>
                <el-button
                  type="info"
                  v-show="iconChoice == 'checkyes'"
                  icon="el-icon-check"
                  circle
                ></el-button>
                <el-button type="info" v-show="iconChoice == 'checkno'" icon="el-icon-close" circle></el-button>
                {{telephoneCodeTip}}
              </div>
            </div>
          </div>
          <div class="info">
            <span class="checkbox" :class="{'checked':checked}" @click="changcheck"></span>
            已同意
            <span>用户协议</span> 和
            <span>隐私政策</span>
          </div>
          <div class="btn btn-submit" @click="register">立刻注册</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PagHeader from "./../components/PagHeader.vue";
export default {
  name: "signup",
  data() {
    return {
      value: "",
      username: "",
      password: "",
      telephone: "",
      iconChoice: "check",
      checkcode: "", //验证码
      telephoneCodeTip: "点击检验验证码",
      checked: false,
      time: 60, // 发送验证码倒计时
      sendMsgDisabled: false, //验证码区是否禁用
      codeCheckResult: "" //验证码检验
    };
  },
  components: {
    PagHeader
  },
  methods: {
    register() {
      if (this.username == "") {
        this.$message.warning("请填写用户名");
        return;
      } else if (this.password == "") {
        this.$message.warning("请填写密码");
        return;
      } else if (!/\d{8}/.test(this.password)) {
        this.$message.warning("请填写8位数以上的密码");
        return;
      } else if (!this.telephone || !/\d{11}/.test(this.telephone)) {
        this.$message.error("请输入正确格式的手机号码");
        return;
      } else if (!this.checkcode || !/\d{6}/.test(this.checkcode)) {
        this.$message.error("请输入正确格式的验证码");
        return;
      } else if (!(this.codeCheckResult == "OK")) {
        this.$message.error("验证码未通过，请重试");
        return;
      } else if (this.checked == false) {
        this.$message.warning("请同意用户协议和隐私政策");
        return;
      } else {
        this.axios
          .post("/users/register", {
            code: this.checkcode,
            userName: this.username,
            userPassword: this.password,
            userTelephone: this.telephone
          })
          .then(() => {
            this.$message.success("注册成功，正在为您跳转到登录页面");
            this.$router.push("/login");
          });
      }
    },
    changcheck() {
      this.checked = !this.checked;
    },
    sends() {
      if (!this.telephone || !/\d{11}/.test(this.telephone)) {
        this.$message.error("请输入正确格式的手机号码");
        return;
      }
      let _this = this;
      this.axios.post("/sms/send/?phoneNum=" + _this.telephone).then(() => {
        this.$message.success("短信已发送,请查收");
      });
      _this.sendMsgDisabled = true;
      let interval = setInterval(function() {
        if (_this.time-- <= 0) {
          _this.time = 60;
          _this.sendMsgDisabled = false;
          clearInterval(interval);
        }
      }, 1000);
    },
    checkTelCode() {
      if (!this.telephone || !/\d{11}/.test(this.telephone)) {
        this.$message.error("请输入正确格式的手机号码");
        return;
      } else if (!this.checkcode || !/\d{6}/.test(this.checkcode)) {
        this.$message.error("请输入正确格式的验证码");
        return;
      }
      this.axios
        .post("/sms/check", {
          code: this.checkcode,
          telephone: this.telephone
        })
        .then(res => {
          // this.codeCheckResult = res.data.msg;
          this.codeCheckResult = res.msg;
          if (this.codeCheckResult == "OK") {
            this.iconChoice = "checkyes";
            this.telephoneCodeTip = "手机号码验证通过";
            this.$message.success("手机号码验证通过");
          } else {
            this.iconChoice = "checkno";
            this.telephoneCodeTip = "手机号码验失败";
            this.$message.error("手机号码验证失败");
          }
        });
    }
  }
};
</script>
<style lang="scss">
.input {
  margin: 10px 0;
  display: block;
  width: 332px;
  height: 42px;
  border: 1px solid #e5e5e5;
  margin-bottom: 20px;
  input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 18px;
  }
}
.signup {
  .wrapper {
    .container {
      text-align: center;
      //  border: #74b9ff, 6px, solid;
      h2 {
        margin-top: 27px;
        font-size: 30px;
        font-weight: 400;
      }
      .sginupform {
        text-align: left;
        margin-top: 28px;
        margin-bottom: 20px;
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        border: #74b9ff, 6px, solid;
        .country {
          font-size: 14px;
          margin-bottom: 20px;
          span {
            font-size: 14px;
            font-weight: bold;
          }
          .slectcountry {
            margin: 10px 0;
            .el-select {
              width: 332px;
              height: 28px;
              font-size: 14px;
            }
          }
          p {
            color: #999999;
          }
        }
        .from {
          display: block;
          .inputtext {
            height: 38px;
            line-height: 38px;
          }
          // .password {
          //   height: 42px;
          //   line-height: 42px;
          // }
          span {
            font-size: 14px;
            font-weight: bold;
          }
          .usertelephone {
            position: relative;
            .cbutton {
              width: 400px;
              position: absolute;
              top: 2px;
              left: 355px;
              cursor: pointer;
              .el-button--info {
                background: #74b9ff;
                border: #74b9ff;
              }
              .el-button + .el-button {
                margin: 0;
              }
            }
          }
        }
        .info {
          font-size: 18px;
          .checkbox {
            display: inline-block;
            width: 22px;
            height: 22px;
            border: 1px solid #e5e5e5;
            vertical-align: middle;
            margin-right: 17px;
            cursor: pointer;
            &.checked {
              background: url("/imgs/icon-gou.png") #409eff no-repeat center;
              background-size: 16px 12px;
              border: none;
            }
          }
          span {
            color: #999999;
          }
        }
        .btn {
          margin-top: 43px;
        }
      }
    }
  }
}
</style>
