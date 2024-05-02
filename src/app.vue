<script>


export default {
  name: 'app',
  title: 'Planifi',
  data() {
    return {
      drawer: false,
      items: [
        {label: 'DataTable', to: '/data-table'}

      ],
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  }
}
</script>

<template>
  <router-view/>
</template>

<style>
</style>
