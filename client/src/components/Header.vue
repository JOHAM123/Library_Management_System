
<template>
  <ul id="nav">
    <li>
      <a href="/">Books</a>
    </li>
    <li class="alignRight">
      <router-link tag="a" :to="{
          name: 'addBook'
        }">Add Books</router-link>
      <!-- <a href="/addBook">Add Books</a> -->
    </li>
    <li>
      <a href="#">Login</a>
    </li>
  </ul>
</template>

<script>
/* eslint-disable */
export default {
  methods: {}
};
</script>

<style scoped>
.alignRight {
  text-align: left;
  width: 90%;
}
#nav {
  width: 100%;
  float: left;
  margin: 0 0 3em 0;
  padding: 0;
  list-style: none;
  background-color: #f2f2f2;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
#nav li {
  float: left;
}
#nav li a {
  display: block;
  padding: 8px 15px;
  text-decoration: none;
  font-weight: bold;
  color: #069;
  border-right: 1px solid #ccc;
}
#nav li a:hover {
  color: #c00;
  background-color: #fff;
}
</style>
