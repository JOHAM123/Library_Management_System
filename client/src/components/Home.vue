<template>
  <!-- <div class="container mg">
    <b-table striped hover :items="items"></b-table>
  </div>-->
  <div id="app">
    <div class="ui container">
      <vuetable
        ref="vuetable"
        api-url="http://localhost:9090/books/"
        :fields="fields"
        pagination-path
        @vuetable:pagination-data="onPaginationData"
      >
        <template slot="actions" slot-scope="props">
          <div class="table-button-container">
            <button class="ui button" @click="editRow(props.rowData)">
              <i class="fa fa-edit"></i> Edit
            </button>&nbsp;&nbsp;
            <button class="ui basic red button" @click="deleteRow(props.rowData)">
              <i class="fa fa-remove"></i> Delete
            </button>&nbsp;&nbsp;
          </div>
        </template>
      </vuetable>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";

export default {
  data() {
    return {
      fields: [
        "id",
        "author",
        "title",
        "__slot:actions"
      ]
    };
  },
  methods: {
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    editRow(rowData) {
      alert("You clicked edit on" + JSON.stringify(rowData));
    },
    deleteRow(rowData) {
      axios.delete(`http://localhost:9090/books/${rowData.id}`).then(res=>{
          
         this.$refs.vuetable.refresh(); 
          console.log(res.data)});
    }
  }
};
//   data() {
//     return {
//       items: []
//     };
//   },
//   mounted() {
//     axios
//       .get("http://localhost:9090/books/")
//       .then(res => {
//         this.items = res.data;
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
// };
</script>
<style>
.mg {
  margin: 10px;
}
</style>