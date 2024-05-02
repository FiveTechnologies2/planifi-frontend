<script>
import App from "../../app.vue";

export default {
  name: "start-choose",
  components: {App},
  data() {
    return{
      visible: true
    }
  }

}
</script>

<template>
  <div class="dashboard">
    <pv-sidebar v-model:visible="visible">
      <template #container>
        <div class="sidebar">
          <div class="sidebar-header">
                        <span class="dashboard-title">
                          <img class="dashboard-logo" src="/src/assets/logo-planifi.svg" alt="logo-planifi">
                          <div style="display:flex;flex-direction: column;height: auto">
                            <h1 style="font-size:20px;margin-bottom: 0">Business Company</h1>
                            <span style="font-size:12px">Your Name</span>
                          </div>
                        </span>
          </div>
          <div class="sidebar-content">
            <pv-button class="sidebar-button">
              <img class="sidebar-icon" src="/src/assets/icon-home.png" alt="icon-home"> Home
            </pv-button>
            <pv-button class="sidebar-button">
              <img class="sidebar-icon" src="/src/assets/icon-home.png" alt="icon-home"> My projects
            </pv-button>
            <pv-button class="sidebar-button">
              <img class="sidebar-icon" src="/src/assets/icon-home.png" alt="icon-home"> Organization
            </pv-button>
          </div>
          <div class="sidebar-footer">
            <pv-button class="sidebar-button">
              <img class="sidebar-settings-icon" src="/src/assets/icon-home.png" alt="icon-home"> Settings
            </pv-button>
          </div>
        </div>
      </template>
    </pv-sidebar>
  </div>
</template>


<style>
  .dashboard {
    display: flex;
    justify-content: center;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #57C600;
    color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    border-radius: 20px;
  }

  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 3px;
    flex-shrink: 0;
  }

  .dashboard-title {
    display: inline-flex;
    align-items: center;
  }

  .dashboard-logo {
    width: 50px;
    height: 55px;
    border-radius: 1000px;
  }

  .sidebar-content {
    display: flex;
    flex-direction: column;
    border: none;
    background: none;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
    padding-top: 38%;
  }

  .sidebar-button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 10px;
    padding-left: 46px;
    width: 100%;
    align-items: center;
    color: white;
  }

  .sidebar-icon {
    width: 50px;
    height: 60px;
    padding-right: 12px;
  }

  .sidebar-footer {
    bottom: 0;
    position: absolute;
    width: 100%;
    padding-bottom: 20px;
  }

  .sidebar-settings-icon {
    padding-right: 2px;
    width: 30px;
    height: 30px;
  }

</style>