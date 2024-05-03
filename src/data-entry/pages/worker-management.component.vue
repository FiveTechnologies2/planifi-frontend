<script>
import WorkerItemCreateEditDataComponent from "../components/worker-item-create-edit-data.component.vue";
import DataManagerComponent from "../../shared/components/data-manager.component.vue";
import {WorkersApiService} from "../services/workers-api.service.js";
import {Worker} from "../model/worker.entity.js";

export default {
  name: "worker-management",
  components: {'data-manager':DataManagerComponent, 'worker-item-create-edit-data':WorkerItemCreateEditDataComponent},
  data() {
    return {
      title: { singular: 'Worker', plural: 'Workers' },
      workers: [],
      worker: {},
      selectedWorker: [],
      statuses: [{label: 'Published', value: 'published'}, {label: 'Unpublished', value: 'unpublished'}],
      workerService: null,
      createEditDataIsVisible: false,
      isEdit: false,
      submitted: false
    }
  },
  methods: {

    //#region Helper Methods

    notifySuccessfulAction(message) {
      this.$toast.add({severity: "success", summary: "Success", detail: message, life: 3000,});
    },

    // Get the severity color according to status
    getSeverity(status) {
      switch (status) {
        case 'Published': return 'success';
        case 'Unpublished': return 'info';
        default:  return null;
      }
    },

    findIndexById(id) {
      return this.workers.findIndex((worker) => worker.id === id);
    },

    //#endregion Helper Methods

    //#region Data Manager Event Handlers

    onNewItemEventHandler() {
      this.worker = {};
      this.submitted = false;
      this.isEdit = false;
      this.createEditDataIsVisible = true;
    },

    onEditItemEventHandler(item) {
      this.worker = item;
      this.submitted = false;
      this.isEdit = true;
      this.createEditDataIsVisible = true;
    },

    onDeleteItemEventHandler(item) {
      this.worker = item;
      this.deleteWorker();
    },

    onDeleteSelectedItemsEventHandler(selectedItems) {
      this.selectedWorker = selectedItems;
      this.deleteSelectedWorkers();
    },

    //#endregion Data Manager Event Handlers

    //#region Worker Item Create and Edit Dialog Event Handlers

    onCanceledEventHandler() {
      this.createEditDataIsVisible = false;
      this.submitted = false;
      this.isEdit = false;
    },

    onSavedEventHandler(item) {
      this.submitted = true;
      if (this.worker.name.trim()) {
        if (item.id) {
          this.updateWorker();
        } else {
          this.createWorker();
        }
      }
      this.createEditDataIsVisible = false;
      this.isEdit = false;
    },

    //#endregion Data Manager Event Handlers

    //#region Data Actions

    // Create a new item

    createWorker() {
      this.worker.id = 0;
      this.worker = Worker.fromDisplayableWorker(this.worker);
      this.workersService.create(this.worker)
          .then((response) => {
            this.worker = Worker.toDisplayableWorker(response.data);
            this.workers.push(this.worker);
            this.notifySuccessfulAction("Worker Created");
          });
    },

    // Update an existing item

    updateWorker() {
      this.worker = Worker.fromDisplayableWorker(this.worker);
      this.workersService
          .update(this.worker.id, this.worker)
          .then((response) => {
            this.workers[this.findIndexById(response.data.id)] =
                Worker.toDisplayableWorker(response.data);
            this.notifySuccessfulAction("Worker Updated");
          });
    },

    // Delete a item

    deleteWorker() {
      this.workersService.delete(this.worker.id)
          .then(() => {
            this.workers = this.workers.filter((t) => t.id !== this.worker.id);
            this.worker = {};
            this.notifySuccessfulAction("Worker Deleted");
          });
    },

    // Delete selected workers

    deleteSelectedWorkers() {
      this.selectedWorker.forEach((worker) => {
        this.workersService.delete(worker.id).then(() => {
          this.workers = this.workers.filter((t) => t.id !== this.worker.id);
        });
      });
      this.notifySuccessfulAction("Workers Deleted");
    }

    //#endregion Data Actions
  },
  created() {
    this.workersService = new WorkersApiService();

    this.workersService.getAll().then((response) => {
      console.log(response.data);
      let workers = response.data;
      this.workers = workers.map((worker) => Worker.toDisplayableWorker(worker));
    });
  }
}
</script>

<template>
  <div class="w-full">
    <!-- Tutorial Data Manager -->
    <data-manager
        :title=title
        v-bind:items="workers"
        v-on:new-item="onNewItemEventHandler"
        v-on:edit-item="onEditItemEventHandler($event)"
        v-on:delete-item="onDeleteItemEventHandler($event)"
        v-on:delete-selected-items="onDeleteSelectedItemsEventHandler($event)">
      <template #custom-columns>
        <pv-column :sortable="true" field="id"          header="Id"           style="min-width: 12rem"/>
        <pv-column :sortable="true" field="name"       header="Name"        style="min-width: 16rem"/>
        <pv-column :sortable="true" field="email"      header="E-mail"  style="min-width: 16rem"/>
        <pv-column :sortable="true" field="phone"      header="Phone"  style="min-width: 16rem"/>
        <pv-column :sortable="true" field="address"      header="Address"  style="min-width: 16rem"/>
        <pv-column :sortable="true" field="position"      header="Position"  style="min-width: 16rem"/>
        <pv-column :sortable="true" field="workedHours"      header="Worked Hours"  style="min-width: 16rem"/>
        <pv-column :sortable="true" field="extraHours"      header="Extra Hours"  style="min-width: 16rem"/>
        <pv-column :sortable="true" field="performance"      header="Performance"  style="min-width: 16rem"/>
      </template>
    </data-manager>
    <!-- Tutorial Item Create and Edit Dialog -->
    <worker-item-create-edit-data
        :statuses="statuses"
        :item="worker"
        :edit="isEdit"
        :visible="createEditDataIsVisible"
        v-on:canceled="onCanceledEventHandler"
        v-on:saved="onSavedEventHandler($event)"/>

  </div>
</template>

<style scoped>
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 960px) {
  :deep(.p-toolbar) {
    flex-wrap: wrap;

  }
}

@media (min-width: 1024px) {
  .workers {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>