<script>
import menuComponent from "../../shared/components/menu.component.vue";

export default {
  name: "choose-organization",
  components: {'menu-component': menuComponent}
}
</script>

<template>
  <div class="organization">
    <menu-component></menu-component>
    <div class="organization-header">
      <h1 style="font-size: 26px">Good Morning, "Your Name"👋</h1>
      <span style="font-size: 24px; font-weight: bold">LET'S START</span>
      <p style="padding-top: 100px; font-size: 22px; font-weight: bold">Choose an organization or join one</p>
      <div class="organization-buttons">
        <pv-button type="button" class="organization-button">
          <img class="organization-image" src="/src/assets/icon-business-company.png" alt="icon-business-company">
        </pv-button>
        <router-link to="business-profile">
        <pv-button type="button" class="organization-button">
          <img class="organization-image" src="/src/assets/icon-plus.png" alt="icon-plus">
        </pv-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
html, body, #app, .organization {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.organization {
  display: flex;
  flex-direction: row;
}

.organization-header {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-left: 20%;
  flex: 3;
}

.organization-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30%;
  padding-top: 20px;
}

.organization-button {
  cursor: pointer;
  background: none;
  border: none;
}

.organization-image {
  cursor: pointer;
  width: 20rem;
  height: 20rem;
}

@media only screen and (max-width: 1200px) {
  .organization-header {
    padding-left: 30%; /* Increase padding to avoid overlap with menu */
  }
}
</style>
