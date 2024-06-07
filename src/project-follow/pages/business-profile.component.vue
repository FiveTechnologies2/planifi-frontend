
<script>
import menuComponent from '../../shared/components/menu.component.vue';
import chooseOrganizationComponent from './choose-organization.component.vue';

export default {
  name: 'business-profile',
  components: { 'menu-component': menuComponent ,
    'choose-organization-component': chooseOrganizationComponent
  },

  data() {
    return {
      companyName: '',
      email: '',
      country: 'PE',
      phone: '',
      address: ''
    };
  },
  methods: {
    createOrganization() {
      // Add your form submission logic here
    }
  }
};
</script>

<template>
    <div class="business-profile">
    <menu-component></menu-component>
      <button class="back-button"> Back to Home</button>
      <div class="profile-section">
        <img class="company-logo" src="/src/assets/icon-business-company.png" alt="Company Logo">
        <button class="choose-picture">Choose picture</button>
      </div>
      <h2>Business Company</h2>
      <form @submit.prevent="createOrganization">
        <div class="form-group">
          <label for="companyName">Company Name</label>
          <input type="text" id="companyName" v-model="companyName">
        </div>
        <div class="form-group">
          <label>Choose plan</label>
          <div class="plan-options">
            <button class="plan-button premium">Premium <i class="pi pi-star"></i></button>
            <button class="plan-button standard">Standard</button>
            <button class="plan-button basic">Basic</button>
          </div>
        </div>
        <div class="form-group">
          <button class="add-members">Add members +</button>
          <div class="members">
            <img class="member-avatar" src="/src/assets/members.jpg" alt="Member">
            <img class="member-avatar" src="/src/assets/members.jpg" alt="Member">
          </div>
        </div>
        <div class="form-group admin-group">
          <label>Company Admin</label>
          <div class="admin-info">
            <img class="admin-avatar" src="/src/assets/Victor.jpg" alt="Admin">
            <span>Viktor Lince</span>
            <button class="change-button">Change</button>
          </div>
          <button class="manage-access">Manage access</button>
        </div>
        <div class="form-group">
          <label for="email">Company E-mail</label>
          <input type="email" id="email" v-model="email">
        </div>
        <div class="contact-row">
        <div class="form-group">
          <label for="country">Country</label>
          <select id="country" v-model="country">
            <option value="PE">PERU</option>
          </select>
        </div>
        <div class="form-group">
          <label for="phone">Company Phone</label>
          <input type="text" id="phone" v-model="phone">
        </div>
        </div>
        <div class="form-group">
          <label for="address">Company Address</label>
          <input type="text" id="address" v-model="address">
        </div>
        <button type="submit" class="btn-primary">Create organization</button>
      </form>
    </div>
  </template>

<style>
.business-profile {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
}

.back-button {
  background-color: transparent;
  border: 1px solid #57C600;
  color: #57C600;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #57C600;
  color: #fff;
}

.profile-section {
  text-align: center;
  margin-bottom: 20px;
}

.add-members {
  background: none;
  border: none;
  color: #57C600;
  cursor: pointer;
}
.company-logo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.choose-picture {
  display: block;
  margin: 10px auto;
  padding: 5px 10px;
  border: 1px solid #57C600;
  background-color: #fff;
  color: #57C600;
  border-radius: 5px;
  cursor: pointer;
}

.choose-picture:hover {
  background-color: #4CAF50;
  color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.plan-options {
  display: flex;
  justify-content: space-between;
}

.plan-button {
  flex: 1;
  margin: 0 5px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
}

.plan-button.premium {
  background-color: #57C600;
  color: #fff;
  border: 2px solid #57C600;
  border-radius: 5px;
}

.plan-button.standard {
  background-color: #95e05c;
  color: #fff;
  border: 2px solid #57C600;
  border-radius: 5px;
}

.plan-button.basic {
  background-color: #fdfdfd;
  color: #000;
  border: 2px solid #57C600;
  border-radius: 5px;
}

.contact-row {
  display: flex;
  gap: 15px;
}

.members {
  display: flex;
}

.member-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 5px;
}

.admin-group {
  display: block;
  justify-content: space-between;
  align-items: center;
}

.admin-info {
  display: block;
  align-items: center;
}

.admin-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.change-button {
  background: none;
  border: none;
  color: #57C600;
  cursor: pointer;
}

.change-button:hover {
  text-decoration: underline;
}

.manage-access {
  background-color: #57C600;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.manage-access:hover {
  background-color: #4CAF50;
}

.btn-primary {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #57C600;
  color: #fff;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #4CAF50;
}
</style>