<template>
  <div class="loginbody">
    <h2>
      <span>H</span>
      <span>n</span>
      <span>i</span>
      <span>t</span>
      <span>...</span>
    </h2>
    <div class="box">
      <h1>用户登录</h1>
      <input type="text" placeholder="用户名" v-model="username" />
      <input type="password" placeholder="密码" v-model="password" />
      <a class="submit" @click="goLogin" href="">登录</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    goLogin() {
      let { username, password } = this;
      this.axios
        .post("/user/login", {
          username,
          password
        })
        .then(res => {
          this.$cookie.set("userId", res.id, { expires: "Session" });
          this.$message.success("登录成功");
        });
    }
  }
};
</script>
<style lang="scss">
.loginbody {
  position: relative;
  width: 100%;
  height: 750px;
  font-family: sans-serif;
  text-align: center;
  background: #000;
  color: #d1d8e0;
  h2 {
    position: absolute;
    height: 250px;
    top: 80px;
    width: 300px;
    margin-left: 30px;
    font-size: 45px;
    letter-spacing: 5px;
    animation: animate 3s ease infinite;
    @keyframes animate {
      0%,
      100% {
        color: #fff;
        text-shadow: 0 0 10px#fbc531, 0 0 55px #fbc531, 0 0 100px #fbc531,
          0 0 180px #fbc531, 0 0 200px #fbc531, 0 0 240px #4b7bec,
          0 0 280px #fbc531;
      }
      25%,
      70% {
        color: #000;
        text-shadow: none;
    }
  }
}
  .box {
    border-radius: 10px;
    width: 300px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fbc531;
    text-align: center;
  }
  .box h1 {
    color: #4b7bec;
    text-transform: uppercase;
    font-weight: 500;
  }
  .box input[type="text"],
  .box input[type="password"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
  }
  .box input[type="text"]:focus,
  .box input[type="password"]:focus {
    width: 280px;
    border-color: #d1d8e0;
  }
  .submit {
    border: 0;
    background: none;
    margin: 20px auto;
    margin-top: 0;
    display: inline-block;
    text-align: center;
    border: 2px solid #3498db;
    padding: 10px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
    text-decoration: none;
    font-size: 12px;
  }
  .submit:hover {
    background: #2ed573;
  }
}
</style>
