<template>
  <div class="loginbody">
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
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 800px;
  font-family: sans-serif;
  background-size: cover;
  background-position: center;
  background: url("/imgs/login.jpg") no-repeat center;
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
</style>
