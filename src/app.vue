<script>
export default {
  name: 'app',
  title: 'Planifi',
  data() {
    return {
      drawer: false,
      items: [
        { label: 'Choose Organization', to: '/choose-organization'}
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
