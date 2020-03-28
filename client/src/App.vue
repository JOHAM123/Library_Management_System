<template>
  <v-app id="inspire">
    <page-header />
    <v-content>
      <router-view></router-view>
    </v-content>
    <page-footer />
  </v-app>
</template>

<script>
/* eslint-disable */
import PageHeader from "@/components/Header.vue";
import PageFooter from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    PageHeader,
    PageFooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
.danger-alert {
  color: red;
}
</style>
