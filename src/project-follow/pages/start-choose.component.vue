<script>
export default {
  name: "start-choose",
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
            <pv-button type="button" class="sidebar-button">
              <img class="sidebar-icon" src="/src/assets/icon-home.png" alt="icon-home"> Home
            </pv-button>
            <pv-button class="sidebar-button">
              <img class="sidebar-icon" src="/src/assets/icon-my-project.png" alt="icon-home"> My projects
            </pv-button>
            <pv-button class="sidebar-button">
              <img class="sidebar-icon" src="/src/assets/icon-organization.png" alt="icon-home"> Organization
            </pv-button>
          </div>
          <div class="sidebar-footer">
            <pv-button class="sidebar-button">
              <img class="sidebar-settings-icon" src="/src/assets/icon-settings.png" alt="icon-home"> Settings
            </pv-button>
          </div>
        </div>
      </template>
    </pv-sidebar>
    <pv-button class="button-menu" icon="pi pi-bars" @click="visible=true">
    </pv-button>
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
  width: 200px;
  height: auto;
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
  align-items: center;
  color: white;
  width: 100%;
  height: 50px;
}

.sidebar-button:hover {
  background-color: #4CAF50;
}

.sidebar-button:active {
  background-color: #45A049;
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

.button-menu {
  background: #57C600;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

</style>