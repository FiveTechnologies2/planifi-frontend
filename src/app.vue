<script>
export default {
  name: 'app',
  title: 'Planifi',
  data() {
    return {
      drawer: false,
      items: [
        { label: 'Check Account', to: '/check-account'},
        { label: 'Login', to: '/login' },
        { label: 'Register', to: '/register'},
        { label: 'Choose Organization', to: '/choose-organization'},
        { label: 'My Projects', to: '/my-projects'},
        { label: 'DataTable', to: '/data-table'}
      ]
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
