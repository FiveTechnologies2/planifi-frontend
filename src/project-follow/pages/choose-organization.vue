<script>
import menuComponent from "../../shared/components/menu.component.vue";

export default {
  name: "choose-organization",
  components: {'menu-component':menuComponent}
}
</script>

<template>
  <div class="dashboard">
    <menu-component></menu-component>
    <div class="start">
      <h1 style="font-size: 26px">Good Morning, "Your Name"👋</h1>
      <span style="font-size: 18px;font-weight:bold">LET'S START</span>
      <p style="padding-top: 40px; font-weight: bold">Choose an organization or join one</p>
      <div class="start-buttons">
        <pv-button type="button" class="start-button">
          <img class="start-icon" src="/src/assets/icon-business-company.png" alt="icon-business-company">
        </pv-button>
        <pv-button type="button" class="start-button">
          <img class="start-icon" src="/src/assets/icon-plus.png" alt="icon-plus">
        </pv-button>
      </div>
    </div>

  </div>
</template>


<style>
.dashboard {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
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

.button-settings span {
  padding-left: 20px;
}

.start {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 20%;
}

.start-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40%;
  padding-top: 20px;
}

.start-button {
  cursor: pointer;
  background: none;
  border: none;
}

.start-icon {
  cursor: pointer;
  width: 200px;
  height: 200px;
}

</style>