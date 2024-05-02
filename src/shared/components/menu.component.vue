<script>
export default {
  name: "menu",
  props: {items: null},
  data() {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-home',
          route: '/',
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
          route: '/organization'
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
      <template #item=" {item, props}">
        <router-link v-if="item.route" v-slot="{ href, navigate}" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" :style="iconStyle"></span>
            <span style="padding-left: 20px">{{item.label}}</span>
          </a>
        </router-link>
      </template>
      <template #end>
        <pv-button label="Settings" icon="pi pi-cog" class="button-settings"/>
      </template>
    </pv-menu>
  </div>
</template>

<style>
.menu-card {
  width: 100%;
  height: 100%;
  max-width: 300px;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: left;
  align-items: start;
  padding-right: 30px;
  border-radius: 40px;
  background-color: #57C600;
  color: white;
}

.menu {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: auto;
  font-size: 34px;
  padding-top: 80px;
}

.menu li {
  list-style-type: none;
  margin-bottom: 120px;
}

.menu a {
  text-decoration: none;
  color: white;
}

.menu span.pi {
  font-size: 48px;
  color: black;
}

.menu-start {
  width: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 20px;
  padding-top: 20px;
  line-height: 1;
}

.menu-logo {
  width: 96px;
  height: 96px;
  border-radius: 1000px;
}

.button-settings {
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding-bottom: 40px;
  padding-left: 10%;
  bottom: 0;
  position: absolute;
  cursor: pointer;
  font-size: 22px;
  color: white;
}

.button-settings span {
  padding-left: 20px;
}
</style>