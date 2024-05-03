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
      <div class="p-fluid">
        <div class="field mt-5">
          <label for="name">Name</label>
          <pv-input-text id="name" v-model="item.name" :class="{'p-invalid': submitted && !item.name}"/>
          <small v-if="submitted && !item.name" class="p-invalid">Name is required.</small>
        </div>
        <p></p>
        <div class="field mt-5">
          <label for="email">E-mail</label>
          <pv-input-text id="email" v-model="item.email" :class="{'p-invalid': submitted && !item.email}"/>
          <small v-if="submitted && !item.email" class="p-invalid">E-mail is required.</small>
        </div>
        <p></p>
        <div class="field mt-5">
          <label for="phone">Phone</label>
          <pv-input-text id="phone" v-model="item.phone" :class="{'p-invalid': submitted && !item.phone}"/>
          <small v-if="submitted && !item.phone" class="p-invalid">Phone is required.</small>
        </div>
        <p></p>
        <div class="field mt-5">
          <label for="address">Address</label>
          <pv-input-text id="address" v-model="item.address" :class="{'p-invalid': submitted && !item.address}"/>
          <small v-if="submitted && !item.address" class="p-invalid">Address is required.</small>
        </div>
        <p></p>
        <div class="field mt-5">
          <label for="position">Position</label>
          <pv-input-text id="position" v-model="item.position" :class="{'p-invalid': submitted && !item.position}"/>
          <small v-if="submitted && !item.position" class="p-invalid">Position is required.</small>
        </div>
        <p></p>
        <div class="field mt-5">
          <label for="worked-hours">Worked Hours</label>
          <pv-input-text id="worked-hours" v-model="item.workedHours" :class="{'p-invalid': submitted && !item.workedHours}"/>
          <small v-if="submitted && !item.workedHours" class="p-invalid">Worked Hours is required.</small>
        </div>
        <p></p>
        <div class="field mt-5">
          <label for="extra-hours">Extra Hours</label>
          <pv-input-text id="extra-hours" v-model="item.extraHours" :class="{'p-invalid': submitted && !item.extraHours}"/>
          <small v-if="submitted && !item.extraHours" class="p-invalid">Extra Hours is required.</small>
        </div>
        <p></p>
        <div class="field mt-5">
          <label for="performance">Performance</label>
          <pv-input-text id="performance" v-model="item.performance" :class="{'p-invalid': submitted && !item.performance}"/>
          <small v-if="submitted && !item.performance" class="p-invalid">Performance is required.</small>
        </div>
      </div>
    </template>
  </create-edit>
</template>