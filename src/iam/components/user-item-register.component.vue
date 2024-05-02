<script>
import Create from "../../shared/components/create.component.vue";

export default {
  name: "user-item-register",

  data() {
    return {
      password: null,
      showPassword: false,
      passwordBarStyle: {
        padding: '12px',
        fontSize: '20px',
        width: '94%'
      },
      submitted: false
    }
  },
  components: {Create},
  props: {
    item: {},
    entity: null,
    entityName: '',
    statuses: Array
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    getSeverity(status) {
      switch (status) {
        case 'Registered':
          return 'success';
        case 'Unregistered':
          return 'info';
        default:
          return null;
      }
    },
    canceledEventHandler() {
      this.$emit('canceled');
    },

    registeredEventHandler() {
      console.log(this.item);
      this.submitted = true;
      if (this.item.name) {
        this.$emit('saved', this.item);
      }
    }
  }
}
</script>

<template>
  <div class="register-card">
    <pv-card v-bind:model="true" class="register-content-card">
      <template #header>
        <h1 style="text-align: center; padding-bottom: 10px">Sign Up</h1>
      </template>
      <template #content>
        <div class="register-content">
          <div class="register-input-text">
            <label for="user_name">Name</label>
            <pv-input-text id="register-user_name-input" style="padding: 12px; font-size: 20px" v-model="item.name" :class="{'p-invalid': submitted && !item.name}"/>
          </div>
          <div class="register-input-text">
            <label for="e-mail">E-mail</label>
            <pv-input-text id="register-e-mail-input" style="padding: 12px; font-size: 20px" v-model="item.email" :class="{'p-invalid': submitted && !item.email}"/>
          </div>
          <div class="register-input-text">
            <label for="business-name">Nombre de la empresa o emprendimiento</label>
            <pv-input-text id="register-business-name-input" style="padding: 12px; font-size: 20px" v-model="item.business_name" :class="{'p-invalid': submitted && !item.business_name}"/>
          </div>
          <div class="register-password">
            <label for="password">Password</label>
            <div class="register-password-container">
              <input :type="showPassword ? 'text' : 'password'" id="register-password-input" v-model="item.password" :style="passwordBarStyle" :class="{'p-invalid': submitted && !item.password}"/>
              <button class="toggle-password-button" @click="togglePassword">
                <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
              </button>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="register-buttons">
          <div><pv-button label="Sign Up" class="login-button" @click="registeredEventHandler"></pv-button></div>
          <div><pv-button class="google-button">
            <img src="/src/assets/icon-google.png" alt="Google" class="google-icon"> Sign Up with Google
          </pv-button></div>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style>
.register-card {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  height: auto;
  width: auto;
}

.register-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.register-input-text {
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  font-size: 22px;
  font-weight: lighter;
}

.register-password {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 22px;
}

.register-password-container {
  position: relative;
  display: inline-block;
}

.toggle-password-button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
}
</style>