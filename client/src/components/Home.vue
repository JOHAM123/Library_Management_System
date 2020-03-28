I<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col class="text-center">
        <v-data-table :headers="headers" :items="books" sort-by="calories" class="elevation-1">
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>My Books</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.author" label="Author"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.title" label="Title"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  data() {
    return {
      dialog: false,
      headers: [
        { text: "Id", value: "id" },
        {
          text: "Author",
          align: "start",
          sortable: false,
          value: "author"
        },
        { text: "Title", value: "title" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      books: [],
      editedIndex: -1,
      editedItem: {
        id: null,
        author: "",
        title: ""
      },
      defaultItem: {
        id: null,
        author: "",
        title: ""
      }
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      axios.get("http://localhost:3000/books/").then(res => {
        console.log(res);
        this.books = res.data;
      });
    },

    editItem(item) {
      this.editedIndex = this.books.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.books.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        axios.delete(`http://localhost:3000/books/${item.id}`).then(res => {
          // this.books.splice(index, 1);
          this.initialize();
          console.log(res.data);
        });
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      var config = {
        params: {
          id: this.editedItem.id,
          author: this.editedItem.author,
          title: this.editedItem.title
        }
      };

      if (this.editedIndex > -1) {
        axios
          .put(`http://localhost:3000/books/${this.editedItem.id}/`, {}, config)
          .then(res => {
            //Object.assign(this.books[this.editedIndex], this.editedItem);
            this.initialize();
            console.log(res.data);
          });
      } else {
        axios.post(`http://localhost:3000/books/`, {}, config).then(res => {
          //this.books.push(this.editedItem);
          console.log(res.data);
          this.initialize();
        });
      }
      this.close();
    }
  }
};
</script>