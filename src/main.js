import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

axios.interceptors.response.use(function(response) {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 502) {
    window.location.href = "/#/login";
  } else {
    alert(res.msg);
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
