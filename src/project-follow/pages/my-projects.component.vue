<script>
import menuComponent from "../../shared/components/menu.component.vue";

export default {
  name: "my-projects",
  components: {'menu-component':menuComponent}
}
</script>

<template>
  <div class="my-projects">
    <menu-component></menu-component>
    <div class="my-projects-header">
      <h1 style="font-size: 26px">Good Morning, "Your Name"👋</h1>
      <span style="font-size: 24px;font-weight:bold">LET'S START</span>
      <p style="padding-top: 100px; font-size: 22px; font-weight: bold">Choose an organization or join one</p>
      <div class="my-projects-buttons">
        <pv-button type="button" class="my-projects-button">
          <img class="my-projects-image" src="/src/assets/icon-last-project.png" alt="icon-business-company">
        </pv-button>
        <pv-button type="button" class="my-projects-button">
          <img class="my-projects-image" src="/src/assets/icon-plus.png" alt="icon-plus">
        </pv-button>
      </div>
    </div>
  </div>
</template>


<style>
.my-projects {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.my-projects-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 20%;
}

.my-projects-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40%;
  padding-top: 20px;
}

.my-projects-button {
  cursor: pointer;
  background: none;
  border: none;
}

.my-projects-image {
  cursor: pointer;
  width: 20rem;
  height: 20rem;
}
</style>