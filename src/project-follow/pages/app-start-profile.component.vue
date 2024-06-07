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
    <div class="profile-container">
      <div class="profile-image">
        <img class="profile" src="/src/assets/user.jpg" alt="Profile Picture">
        <button @click="changeProfilePicture" class="change-profile-button">Change profile picture</button>
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
        <div class="form-group password-group">
          <label for="currentPassword">Current Password</label>
          <div class="password-wrapper">
            <input type="password" id="currentPassword" v-model="currentPassword">
            <i class="pi pi-eye"></i>
          </div>
        </div>
        <div class="form-group password-row">
          <div class="password-group">
            <label for="newPassword">New Password</label>
            <div class="password-wrapper">
              <input type="password" id="newPassword" v-model="newPassword">
              <i class="pi pi-eye"></i>
            </div>
          </div>
          <div class="password-group">
            <label for="confirmPassword">Confirm New Password</label>
            <div class="password-wrapper">
              <input type="password" id="confirmPassword" v-model="confirmPassword">
              <i class="pi pi-eye"></i>
            </div>
          </div>
        </div>
        <button type="submit" class="btn-primary">Change password</button>
        <div class="contact-row">
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
        </div>
        <div class="form-group checkbox-group">
          <label>
            <input type="checkbox" v-model="receiveNews"> I want to receive news from Planifi via email
          </label>
        </div>
        <button type="submit" class="btn-secondary">Save changes</button>
      </form>
    </div>
  </div>
</template>

<style>
.app-start-profile {
  display: flex;
  align-items: center;
}

.menu-component {
  flex: 1;
}

.profile-container {
  flex: 2;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.profile-image {
  text-align: center;
  margin-bottom: 20px;
}

.profile-image img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.change-profile-button {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  border: 1px solid #57C600;
  background-color: #fff;
  color: #57C600;
  border-radius: 5px;
  cursor: pointer;
}

.change-profile-button:hover {
  background-color: #4CAF50;
  color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.form-group {
  margin-bottom: 15px;
  
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #666;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.password-group {
  margin-bottom: 15px;
  position: relative;
}

.password-wrapper {
  display: flex;
  align-items: center;
}

.password-wrapper input {
  flex: 1;
}

.password-wrapper i {
  position: absolute;
  right: 10px;
  cursor: pointer;
}

.password-row {
  display: flex;
  gap: 15px;
}

.contact-row {
  display: flex;
  gap: 15px;
}

.btn-primary,
.btn-secondary {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary {
  background-color: #57C600;
  color: #fff;
}

.btn-primary:hover {
  background-color: #4CAF50;
}

.btn-secondary {
  background-color: #57C600;
  color: #fff;
  margin-top: 15px;
}

.btn-secondary:hover {
  background-color: #4CAF50;
}

.checkbox-group {
  display: flex;
  align-items: center;
}

.checkbox-group input {
  margin-right: 10px;
  display: flex;
}
</style>