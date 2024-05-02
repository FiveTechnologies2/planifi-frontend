<script>
//import httpCommon from "../../shared/services/http-common.js";

export default {
  name: "data-table",
  components: '',
  props:{

  },

  data() {
    return {
      workers: null
    }
  }
};

</script>

<template>
  <p>dfdf</p>

  <div class="card">
    <pv-data-table :value="workers" showGridlines class="table">
      <div class="table-content">
        <pv-column field="workers" header="Worker-Id"></pv-column>
        <pv-column field="name" header="Name"></pv-column>
        <pv-column field="email" header="Email"></pv-column>
        <pv-column field="phone" header="Phone"></pv-column>
        <pv-column field="address" header="Address"></pv-column>
        <pv-column field="position" header="Position"></pv-column>
        <pv-column field="workedhours" header="Worked-Hours"></pv-column>
        <pv-column field="extrahours" header="Extra-Hours"></pv-column>
        <pv-column field="performance" header="Performance"></pv-column>
      </div>
    </pv-data-table>
  </div>
</template>

<style>
.card{
  display:flex;
  justify-content: center;
  align-items: center;

}

.table{
  background-color: lightgray;
  min-width:50rem;
  max-width: 55%;
  display: flex;
  text-align:center;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid black;
}
.table-content{
  padding: 0.5rem;
  border: 1px solid black;
}

</style>