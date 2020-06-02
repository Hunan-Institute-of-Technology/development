<template>
  <div class="signup">
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
              <el-input placeholder="请输入账户用户名"  class="inputtext" v-model="username" clearable></el-input>
            </div>
          </div>
          <div class="from">
            <span>密码</span>
            <div class="input">
              <el-input placeholder="请输入密码" v-model="password" class="inputtext" show-password></el-input>
            </div>
          </div>
            <div class="from">
              <span>手机号码</span>
            <div class="input">
              <el-input placeholder="请输入您的手机号码" v-model="telephone	"  class="inputtext"   show-word-limit maxlength="11"></el-input>
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
export default {
  name: "signup",
  data() {
    return {
      value: "",
      username: "",
      password: "",
      telephone: "",
      checked: false
    };
  },
  components: {},
  methods: {
    register() {
      if (this.email == "") {
        this.$message.warning("请填写邮箱");
      } else if (this.username == "") {
        this.$message.warning("请填写用户名");
      } else if (this.password == "") {
        this.$message.warning("请填写密码");
      } else if (this.checked == false) {
        this.$message.warning("请同意小米用户协议和隐私政策");
      } else {
        this.axios
          .post("/user/register", {
            username: this.username,
            password: this.password,
            email: this.password
          })
          .then(() => {
            this.$router.push("/login");
          });
      }
    },
    changcheck() {
      this.checked = !this.checked;
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
      h2 {
        margin-top: 46px;
        font-size: 30px;
        font-weight: 400;
      }
      .sginupform {
        text-align: left;
        margin-top: 42px;
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
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
              height: 42px;
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
            height: 42px;
            line-height: 42px;
          }
          // .password {
          //   height: 42px;
          //   line-height: 42px;
          // }
          span {
            font-size: 14px;
            font-weight: bold;
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
