<script>
import DataManager from "../../shared/components/data-manager.component.vue";
import CreateEditData from "../components/create-edit-data.component.vue";
import {Worker} from "../model/worker.entity.js";





export default {
  name: "worker-management",
  components: {CreateEditData, DataManager},
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
      this.createAndEditDialogIsVisible = true;
    },

    onEditItemEventHandler(item) {
      this.worker = item;
      this.submitted = false;
      this.isEdit = true;
      this.createAndEditDialogIsVisible = true;
    },

    onDeleteItemEventHandler(item) {
      this.worker = item;
      this.deleteWorker();
    },

    onDeleteSelectedItemsEventHandler(selectedItems) {
      this.selectedWorker = selectedItems;
      this.deleteSelectedWorker();
    },

    //#endregion Data Manager Event Handlers

    //#region Worker Item Create and Edit Dialog Event Handlers

    onCanceledEventHandler() {
      this.createAndEditDialogIsVisible = false;
      this.submitted = false;
      this.isEdit = false;
    },

    onSavedEventHandler(item) {
      this.submitted = true;
      if (this.worker.title.trim()) {
        if (item.id) {
          this.updateWorker();
        } else {
          this.createWorker();
        }
      }
      this.createAndEditDialogIsVisible = false;
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
            this.worker = worker.toDisplayableWorker(response.data);
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

</template>

<style scoped>

</style>