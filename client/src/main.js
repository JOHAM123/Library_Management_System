/* eslint-disable no-new */
/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
// import { BootstrapVue } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

var VueResource = require("vue-resource");
Vue.use(VueResource);

import Vuetable from "vuetable-2";
Vue.use(Vuetable);

Vue.config.productionTip = false;
// Vue.use(BootstrapVue)

Vue.component("vuetable", Vuetable);


new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

