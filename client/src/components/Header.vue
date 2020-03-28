<template>
  <div>
    <!-- <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>
        <router-link class="home" tag="span" :to="{
          name: 'Home'
        }">Books</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat text color=""  :to="{
          name: 'Login'
        }">Login</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    source: String
  },

  data: () => ({
    drawer: null
  })
};
</script>
<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: #cccccc;
}
</style>
