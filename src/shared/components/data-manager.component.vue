<script>
import {FilterMatchMode} from "primevue/api";

export default {
  name: "data-manager",
  inheritAttrs: false,
  props: {
    items: {type: Array, required: true},
    title:  {type: { singular: '', plural: ''}, required: true},
    dynamic: {type: Boolean, default: false},
    columns: {type: Array, default: () => []},
  },
  data() {
    return {
      selectedItems: [],
      filters: null
    }
  },
  created() {
    this.initFilters();
  },
  methods: {
    initFilters() {
      this.filters = {global: {value: null, matchMode: FilterMatchMode.CONTAINS}};
    },
    newItem() {
      this.$emit('new-item');
    },
    confirmDeleteSelected() {
      this.$confirm.require({
        message:          `Are you sure you want to delete the selected ${this.title.plural}?`,
        header:           'Confirmation',
        icon:             'pi pi-exclamation-triangle',
        rejectClassName:  'p-button-secondary p-button-outlined',
        rejectLabel:      'Cancel',
        acceptLabel:      'Delete',
        acceptClassName:  'p-button-danger',
        accept:           () => this.$emit('delete-selected-items', this.selectedItems),
        reject:           () => {}
      });
    },
    exportToCsv() {
      this.$refs.dt.exportCSV()
    },
    editItem(item) {
      this.$emit('edit-item', item);
    },
    confirmDeleteItem(item) {
      this.$confirm.require({
        message:          `Are you sure you want to delete this ${this.title.singular}?`,
        header:           'Confirmation',
        icon:             'pi pi-exclamation-triangle',
        rejectClassName:  'p-button-secondary p-button-outlined',
        rejectLabel:      'Cancel',
        acceptLabel:      'Delete',
        acceptClassName:  'p-button-danger',
        accept:           () => this.$emit('delete-item', item),
        reject:           () => {}
      });
    },
  },
}
</script>

<template>
  <pv-toast/>
  <pv-confirm-dialog/>
  <h3>Manage {{ title.plural }}</h3>
  <!-- Toolbar Section -->
  <pv-toolbar class="toolbar">
    <template #start>
      <pv-button class="new-button" icon="pi pi-plus" label="New" severity="success" @click="newItem"/>
      <pv-button class="delete-button" :disabled="!selectedItems || !selectedItems.length" icon="pi pi-trash" label="Delete" severity="danger"
                 @click="confirmDeleteSelected"/>
    </template>
    <template #end>
      <pv-button class="export-button" icon="pi pi-download" label="Export" severity="help" @click="exportToCsv($event)"/>
    </template>
  </pv-toolbar>

  <!-- Data Table Section -->
  <pv-data-table class="data-table"
      ref="dt"
      v-model:selection="selectedItems"
      :filters="filters"
      :paginator="true"
      :rows="10"
      :rows-per-page-options="[5, 10, 20]"
      :value="items"
      current-page-report-template="Showing {first} to {last} of {totalRecords} ${{title.plural}}"
      data-key="id"
      paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown">
    <pv-column :exportable="false" selectionMode="multiple" style="width: 3rem"/>
    <slot name="custom-columns"></slot>
    <pv-column v-if="dynamic" v-for="column in columns" :key="column.field" :field="column.field" :header="column.header"/>
    <pv-column :exportable="false" style="min-width:8rem">
      <template #body="slotProps">
        <pv-button icon="pi pi-pencil" outlined rounded class="pencil-button" @click="editItem(slotProps.data)"/>
        <pv-button icon="pi pi-trash" outlined rounded severity="danger" class="trash-button" @click="confirmDeleteItem(slotProps.data)"/>
      </template>
    </pv-column>
  </pv-data-table>

</template>

<style>
.toolbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #e8f5e9; /* Verde muy claro */
  border: 1px solid #c8e6c9; /* Verde claro */
  border-radius: 0.5rem;
}

.data-table {
  width: 100%;
  height: 100%;
  border: 1px solid #c8e6c9; /* Verde claro */
  border-radius: 0.5rem;
  overflow: hidden;
}

.data-table .p-datatable-tbody > tr {
  border-bottom: 1px solid #c8e6c9; /* Verde claro */
  transition: background-color 0.3s ease;
}

.data-table .p-datatable-tbody > tr:hover {
  background-color: #66bb6a; /* Verde medio */
  color: white;
}

.data-table .p-datatable-thead > tr > th {
  background-color: #2e7d32; /* Verde oscuro */
  color: white;
  padding: 1rem;
  font-size: 1.2rem;
}

.new-button,
.delete-button,
.pencil-button,
.trash-button,
.export-button {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.new-button:hover,
.delete-button:hover,
.pencil-button:hover,
.trash-button:hover,
.export-button:hover {
  transform: scale(1.1);
}

.p-datatable .p-paginator .p-paginator-prev,
.p-datatable .p-paginator .p-paginator-next,
.p-datatable .p-paginator .p-paginator-first,
.p-datatable .p-paginator .p-paginator-last {
  transition: background-color 0.3s ease;
}

.p-datatable .p-paginator .p-paginator-prev:hover,
.p-datatable .p-paginator .p-paginator-next:hover,
.p-datatable .p-paginator .p-paginator-first:hover,
.p-datatable .p-paginator .p-paginator-last:hover {
  transform: scale(1.1);
}
</style>