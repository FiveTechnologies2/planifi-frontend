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

    notifySuccessfulAction(message) {
      this.$toast.add({severity: "success", summary: "Success", detail: message, life: 3000,});
    },

    findIndexById(id) {
      return this.workers.findIndex((worker) => worker.id === id);
    },

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

    onCanceledEventHandler() {
      this.createEditDataIsVisible = false;
      this.submitted = false;
      this.isEdit = false;
    },

    onSavedEventHandler(item) {
      this.submitted = true;
      if (this.worker.name.trim() && this.worker.email.trim() && this.worker.phone.trim() && this.worker.address.trim() && this.worker.position.trim() && this.worker.workedHours.trim() && this.worker.extraHours.trim() && this.worker.performance.trim()) {
        if (item.id) {
          this.updateWorker();
        } else {
          this.createWorker();
        }
      }
      this.createEditDataIsVisible = false;
      this.isEdit = false;
    },

    createWorker() {
      let highestId = Math.max(...this.workers.map(worker => parseInt(worker.id)));
      let newId = highestId + 1;

      this.worker.id = newId.toString();
      this.worker = Worker.fromDisplayableWorker(this.worker);
      this.workersService.create(this.worker)
          .then((response) => {
            this.worker = Worker.toDisplayableWorker(response.data);
            this.workers.push(this.worker);
            this.notifySuccessfulAction("Worker Created");
          });
    },

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

    deleteWorker() {
      this.workersService.delete(this.worker.id)
          .then(() => {
            this.workers = this.workers.filter((t) => t.id !== this.worker.id);
            this.worker = {};
            this.notifySuccessfulAction("Worker Deleted");
          });
    },

    deleteSelectedWorkers() {
      this.selectedWorker.forEach((worker) => {
        this.workersService.delete(worker.id).then(() => {
          this.workers = this.workers.filter((t) => t.id !== this.worker.id);
        });
      });
      this.notifySuccessfulAction("Workers Deleted");
    }
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
  <div class="management">

    <data-manager
        :title=title
        v-bind:items="workers"
        v-on:new-item="onNewItemEventHandler"
        v-on:edit-item="onEditItemEventHandler($event)"
        v-on:delete-item="onDeleteItemEventHandler($event)"
        v-on:delete-selected-items="onDeleteSelectedItemsEventHandler($event)">
      <template #custom-columns>
        <pv-column :sortable="true" field="id" header="Id" style="min-width: 12rem; flex: 1; width: calc(100% - 95%)"/>
        <pv-column :sortable="true" field="name"       header="Name"        style="min-width: 16rem; flex: 1; width: calc(100% - 85%)"/>
        <pv-column :sortable="true" field="email"      header="E-mail"  style="min-width: 16rem; flex: 1; width: calc(100% - 85%)"/>
        <pv-column :sortable="true" field="phone"      header="Phone"  style="min-width: 16rem; flex: 1; width: calc(100% - 90%)"/>
        <pv-column :sortable="true" field="address"      header="Address"  style="min-width: 16rem; flex: 1; width: calc(100% - 85%)"/>
        <pv-column :sortable="true" field="position"      header="Position"  style="min-width: 16rem; flex: 1; width: calc(100% - 90%)"/>
        <pv-column :sortable="true" field="workedHours"      header="Worked Hours"  style="min-width: 16rem; flex: 1; width: calc(100% - 90%)"/>
        <pv-column :sortable="true" field="extraHours"      header="Extra Hours"  style="min-width: 16rem; flex: 1; width: calc(100% - 90%)"/>
        <pv-column :sortable="true" field="performance"      header="Performance"  style="min-width: 16rem; flex: 1; width: calc(100% - 90%)"/>
      </template>
    </data-manager>

    <worker-item-create-edit-data
        :statuses="statuses"
        :item="worker"
        :edit="isEdit"
        :visible="createEditDataIsVisible"
        v-on:canceled="onCanceledEventHandler"
        v-on:saved="onSavedEventHandler(worker)"/>

  </div>
</template>

<style>

@media (min-width: 700px) {
  .worker-management {
    flex-direction: row;
    justify-content: space-around;
  }
}
.management {
  width: auto;
  height: auto;
}
</style>