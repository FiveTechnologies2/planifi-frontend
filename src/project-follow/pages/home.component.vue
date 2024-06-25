<script>
import menuComponent from "../../shared/components/menu.component.vue";
export default {
  name: "home",
  components: {'menu-component':menuComponent}
}
</script>

<template>
  <div class="home">
    <menu-component></menu-component>
    <div class="home-header">
      <h1 style="font-size: 26px">Welcome to Planifi👋</h1>
      <span style="font-size: 24px;font-weight:bold">ABOUT US</span>
      <p style="padding-top: 100px; padding-left: 150px; font-size: 22px; font-weight: bold">Five Technologies is a company founded by students from the Universidad Peruana de Ciencias Aplicadas, aimed at developing an application that automates payroll management for small and medium-sized enterprises (SMEs). Our application, named Planifi, allows SMEs to subscribe based on their workforce size, enabling streamlined management of employee payroll. Additionally, Planifi provides financial reports and tracks project hours, thereby enhancing efficiency and reducing errors in payroll processing and project management for these businesses.</p>
    </div>
  </div>
</template>

<style>
.home {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.home-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 20%;
}
</style>