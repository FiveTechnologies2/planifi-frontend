<script>
import CreateEdit from "../../shared/components/create-edit.component.vue";


export default {
  name: "worker-item-create-edit-data",
  components: {CreateEdit},
  props: {
    item: null,
    visible: Boolean,
    statuses: Array
  },
  data() {
    return {
      submitted: false
    }
  },
  methods: {
    getSeverity(status) {
      switch (status) {
        case 'Published':
          return 'success';
        case 'Unpublished':
          return 'info';
        default:
          return null;
      }
    },
    canceledEventHandler() {
      this.$emit('canceled');
    },

    savedEventHandler() {
      console.log(this.item);
      this.submitted = true;
      if (this.item.title) {
        this.$emit('saved', this.item);
      }
    }
  }
}
</script>

<template>
  <create-edit :entity="item" :visible="visible" entityName="Worker" @canceled="canceledEventHandler"
               @saved="savedEventHandler">
    <template #content>
      <div class="dialog-content">
        <div class="dialog-input">
          <label for="name">Name</label>
          <pv-input-text id="name" v-model="item.name" :class="{'p-invalid': submitted && !item.name}"/>
          <small v-if="submitted && !item.name" class="p-invalid">Name is required.</small>
        </div>

        <div class="dialog-input">
          <label for="email">E-mail</label>
          <pv-input-text id="email" v-model="item.email" :class="{'p-invalid': submitted && !item.email}"/>
          <small v-if="submitted && !item.email" class="p-invalid">E-mail is required.</small>
        </div>

        <div class="dialog-input">
          <label for="phone">Phone</label>
          <pv-input-text id="phone" v-model="item.phone" :class="{'p-invalid': submitted && !item.phone}"/>
          <small v-if="submitted && !item.phone" class="p-invalid">Phone is required.</small>
        </div>

        <div class="dialog-input">
          <label for="address">Address</label>
          <pv-input-text id="address" v-model="item.address" :class="{'p-invalid': submitted && !item.address}"/>
          <small v-if="submitted && !item.address" class="p-invalid">Address is required.</small>
        </div>

        <div class="dialog-input">
          <label for="position">Position</label>
          <pv-input-text id="position" v-model="item.position" :class="{'p-invalid': submitted && !item.position}"/>
          <small v-if="submitted && !item.position" class="p-invalid">Position is required.</small>
        </div>

        <div class="dialog-input">
          <label for="workedHours">Worked Hours</label>
          <pv-input-text id="workedHours" v-model="item.workedHours" :class="{'p-invalid': submitted && !item.workedHours}"/>
          <small v-if="submitted && !item.workedHours" class="p-invalid">Worked Hours is required.</small>
        </div>

        <div class="dialog-input">
          <label for="extraHours">Extra Hours</label>
          <pv-input-text id="extraHours" v-model="item.extraHours" :class="{'p-invalid': submitted && !item.extraHours}"/>
          <small v-if="submitted && !item.extraHours" class="p-invalid">Extra Hours is required.</small>
        </div>

        <div class="dialog-input">
          <label for="performance">Performance</label>
          <pv-input-text id="performance" v-model="item.performance" :class="{'p-invalid': submitted && !item.performance}"/>
          <small v-if="submitted && !item.performance" class="p-invalid">Performance is required.</small>
        </div>
      </div>
    </template>
  </create-edit>
</template>


<style>
.dialog-content {
  width: 90vw; /* Ancho adaptado al viewport */
  max-width: 600px; /* Ancho máximo */
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dos columnas de igual tamaño */
  gap: 20px; /* Espacio entre las columnas y filas */
  padding: 20px;
  background-color: #e8f5e9; /* Verde muy claro */
  border: 1px solid #c8e6c9; /* Verde claro */
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.dialog-input {
  width: 100%; /* Ancho completo del contenedor */
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: #2e7d32; /* Verde oscuro */
}

.dialog-input label {
  font-size: 1.2rem;
  color: #2e7d32; /* Verde oscuro */
  margin-bottom: 0.5rem;
}

.dialog-input .p-invalid {
  color: #c62828; /* Rojo oscuro */
}

.pv-input-text {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #c8e6c9; /* Verde claro */
  transition: border-color 0.3s ease;
}

.pv-input-text:focus {
  border-color: #66bb6a; /* Verde medio */
}

.create-edit {
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
}
</style>
