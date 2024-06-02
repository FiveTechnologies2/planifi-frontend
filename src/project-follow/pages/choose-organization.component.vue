<script>
import menuComponent from "../../shared/components/menu.component.vue";

export default {
  name: "choose-organization",
  components: {'menu-component':menuComponent}
}
</script>

<template>
  <div class="organization">
    <menu-component></menu-component>
    <div class="organization-header">
      <h1 style="font-size: 26px">Good Morning, "Your Name"👋</h1>
      <span style="font-size: 24px;font-weight:bold">LET'S START</span>
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
.organization {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.organization-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 20%;
}

.organization-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40%;
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
</style>