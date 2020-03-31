<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="username"
                label="Login"
                name="login"
                prepend-icon="person"
                type="text"
              />

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="lock"
                v-model="password"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="authenticate()">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  props: {
    source: String
  },
  data: {
    username: "Joham",
    password: ""
  },
  methods: {
    authenticate() {
      var config = {
        params: {
          username: this.username,
          password: this.password
        }
      };
      axios.get("http://localhost:3000/books/login", config).then(res => {
        console.log(res);
        if(res.data == "exist"){
          window.location="/books"
        } else {
          alert("username or password is not correct ");
        }

      });
    }
  }
};
</script>