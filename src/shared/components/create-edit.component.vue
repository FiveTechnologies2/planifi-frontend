<script>
const defaultStyle = { width: '450px'};
export default {
  name: "create-edit",
  props: { entity: null, visible: Boolean, entityName: '', edit: Boolean, size: 'default' },
  methods: {
    onCancel() {
      this.$emit('canceled');
    },
    onSave() {
      this.$emit('saved', this.entity);
    },
    getHeaderTitle() {
      return `${this.edit ? 'Edit' : 'New'} ${this.entityName}`;
    },
    getSubmitLabel() {
      return this.edit ? 'Update' : 'Create';
    },
    getDialogStyle() {
      let dialogStyle = defaultStyle;
      dialogStyle = this.size === 'standard' ? { width: '600px'} : defaultStyle;
      dialogStyle = this.size === 'large' ? { width: '900px'} : defaultStyle;
      return dialogStyle;
    }
  },
  computed: {
    dialogClass() {
      return {
        'dialog-visible': this.visible
      }
    }
  }
}
</script>

<template>
  <pv-dialog v-bind:visible="visible" :modal="true" :style="getDialogStyle()" class="dialog" :header="entityName" @cancel="onCancel" :class="dialogClass" :closable="false">
    <template #header>
      <div class="dialog-header">
        <div>{{ getHeaderTitle() }}</div>
      </div>
    </template>
    <slot name="content"></slot>
    <template #footer>
      <div class="dialog-footer">
        <pv-button type="button" :label="getSubmitLabel()" class="p-button-create" icon="pi pi-check" @click="onSave"/>
        <pv-button type="button" label="Cancel" class="p-button-cancel" icon="pi pi-times" @click="onCancel"/>
      </div>
    </template>
  </pv-dialog>
</template>

<style>
.dialog {
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  background-color: #e8f5e9; /* Verde muy claro */
  border: 1px solid #c8e6c9; /* Verde claro */
  padding: 10px;
  font-size: 24px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.dialog-visible {
  position: absolute;;
  top: 50%;
  transform: translateY(-50%);
}

.dialog-header {
  display: flex;
  justify-content: start;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  color: #388e3c; /* Verde oscuro */
}

.dialog-footer {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: normal;
  gap: 30%;
  padding-bottom: 10px;
}

.p-button-create {
  background-color: #4CAF50; /* Verde brillante */
  border-color: #4CAF50;
  color: white;
  font-size: 14px;
  padding: 8px 12px;
}

.p-button-create:hover {
  background-color: #45a049; /* Verde oscuro */
  border-color: #45a049;
}

.p-button-cancel {
  background-color: #f44336; /* Rojo brillante */
  border-color: #f44336;
  color: white;
  font-size: 14px;
  padding: 8px 12px;
}

.p-button-cancel:hover {
  background-color: #e53935; /* Rojo oscuro */
  border-color: #e53935;
}

.pv.dialog .close-icon {
  display: none;
}
</style>