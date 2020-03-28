/* eslint-disable no-new */
/* eslint-disable */
import Vue from "vue";
import App from "./App";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;
Vue.use(Vuetify);
new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  router,
  components: { App },
  template: "<App/>"
});
