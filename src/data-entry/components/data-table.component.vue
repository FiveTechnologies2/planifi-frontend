



<template>
  <div class="card">
    <DataTable :value="products" showGridlines tableStyle="min-width: 50rem">
      <Column field="workerid" header="Worder-Id"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="phone" header="Phone"></Column>
      <Column field="address" header="Address"></Column>
      <Column field="position" header="Position"></Column>
      <Column field="workedhours" header="Worked-Hours"></Column>
      <Column field="extrahours" header="Extra-Hours"></Column>
      <Column field="performance" header="Performance"></Column>
    </DataTable>
  </div>
</template>

<script>
//import { worker } from '/server/db.json'; //Data

export default {
  name: "data-table",
  data() {
    return {
      products: null
    };
  },
  mounted() {
    //ProductService.getProductsMini().then((data) => (this.products = data));
  }
};
</script>
