<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="autor">Author</label>
        <input
          type="text"
          class="form-control"
          id="autor"
          v-model="book.author"
          name="author"
          placeholder="Author name"
        />
      </div>
      <div class="form-group">
        <label for="title">title</label>
        <input
          type="text"
          id="title"
          class="form-control"
          v-model="book.title"
          name="title"
          placeholder="Title"
        />
      </div>

      <button type="button" class="btn btn-primary" @click="send()">Submit</button>
    </form>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";

export default {
  data() {
    return {
      book: {
        author: "",
        title: ""
      }
    };
  },
  methods: {
    send() {
      var config = {
        params: {
          author: this.book.author,
          title: this.book.title
        }
      };
      axios.post(`http://localhost:9090/books/`,{}, config).then(res => {
          window.location.href="/"
        console.log(res.data);
      });
    }
  }
};
</script>
<style>
</style>
