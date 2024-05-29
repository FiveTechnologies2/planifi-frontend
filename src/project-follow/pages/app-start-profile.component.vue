<script>
import menuComponent from "../../shared/components/menu.component.vue";

export default {
  name: 'app-start-profile',
  components: { 'menu-component': menuComponent },
  data() {
    return {
      profileImageUrl: '', 
      name: 'User0001',
      email: 'user0001@gmail.com',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      country: 'PE',
      phoneNumber: '982479252',
      receiveNews: true
    };
  },
  methods: {
    changeProfilePicture() {
      alert('Change profile picture clicked');
    },
    saveChanges() {
      alert('Changes saved');
    }
  }
};
</script>

<template>
    <div class="app-start-profile">
        <menu-component></menu-component>
      <div class="profile-image">
        <img :src="profileImageUrl" alt="Profile Picture">
        <button @click="changeProfilePicture">Change profile picture</button>
      </div>
      <h2>{{ name }}</h2>
      <form @submit.prevent="saveChanges">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name">
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model="email">
        </div>
        <div class="form-group">
          <label for="currentPassword">Current Password</label>
          <input type="password" id="currentPassword" v-model="currentPassword">
        </div>
        <div class="form-group">
          <label for="newPassword">New Password</label>
          <input type="password" id="newPassword" v-model="newPassword">
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm New Password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword">
        </div>
        <button type="submit" class="btn-primary">Change password</button>
        <div class="form-group">
          <label for="country">Country</label>
          <select id="country" v-model="country">
            <option value="PE">PE (+51)</option>
          </select>
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number</label>
          <input type="text" id="phoneNumber" v-model="phoneNumber">
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" v-model="receiveNews"> I want to receive news from Planifi via email
          </label>
        </div>
        <button type="submit" class="btn-secondary">Save changes</button>
      </form>
    </div>
  </template>

<style>
.app-start-profile {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

</style>