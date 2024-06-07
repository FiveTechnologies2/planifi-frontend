<script>
export default {
  name: "menu",
  props: { items: null },
  data() {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-home',
          route: '/home',
          color: 'white'
        },
        {
          label: 'My projects',
          icon: 'pi pi-folder',
          route: '/my-projects'
        },
        {
          label: 'Organization',
          icon: 'pi pi-users',
          route: '/choose-organization'
        },
    
      ],
      iconStyle: {
        width: '40px',
        height: '40px'
      }
    }
  }
}
</script>

<template>
  <div class="menu-card">
    <pv-menu :model="items" class="menu">
      <template #start>
        <span class="menu-start">
          <img class="menu-logo" src="/src/assets/logo-planifi.svg" alt="logo-planifi">
          <div style="display: flex; flex-direction: column; padding-left: 10px; padding-bottom: 10px">
            <h1 style="font-size: 20px">Business Company</h1>
            <span style="font-size: 18px">Your Name</span>
          </div>
        </span>
      </template>
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" :style="iconStyle"></span>
            <span style="padding-left: 20px">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
      <template #end>
        <router-link to="/app-start-profile">
        <pv-button label="Settings" icon="pi pi-cog" class="button-settings"/>
        </router-link>

      </template>
    </pv-menu>
  </div>
</template>

<style>
html, body, #app, .organization {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.menu-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: auto;
  height: 100vh;
  max-width: 20rem;
  left: 0;
  position: absolute;
  padding-right: 2rem;
  border-radius: 2.5rem;
  background-color: #57C600;
  color: white;
  flex: 1;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  text-align: left;
  width: auto;
  font-size: 2rem;
  padding-top: 5rem;
}

.menu li {
  list-style-type: none;
  margin-bottom: 7.5rem;
}

.menu a {
  text-decoration: none;
  color: white;
}

.menu span.pi {
  font-size: 3rem;
  color: black;
}

.menu-start {
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 1rem;
  padding-top: 1rem;
  line-height: 1;
}

.menu-logo {
  width: 6rem;
  height: 6rem;
  border-radius: 62.5rem;
}

.button-settings {
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding-bottom: 2.5rem;
  padding-left: 10%;
  cursor: pointer;
  font-size: 1.375rem;
  color: white;
}

.button-settings span {
  padding-left: 1.25rem;
}

@media only screen and (max-width: 1200px) {
  .menu-card {
    max-width: 15rem; /* Reduce width to avoid overlap with other components */
  }
}
</style>
