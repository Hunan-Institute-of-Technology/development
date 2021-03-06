import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
// import { Message, Select, Option, Input} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Vue.prototype.$message = Message;
// Vue.use(Select);
// Vue.use(Option);
// Vue.use(Input);
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
axios.defaults.baseURL = "/api/fleamarket";
axios.defaults.timeout = 8000;
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 200) {
    return res.data;
  } else if (res.status == 502) {
    window.location.href = "/#/login";
    return Promise.reject(res);
  } else {
    this.$message.warning(res.msg);
    return Promise.reject(res);
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
