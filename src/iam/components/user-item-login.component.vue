<script>
import usersHttp from "../../shared/services/http-common-users.js";
import LoginUser from "../../shared/components/login-user.component.vue";

export default {
  name: "user-item-login",
  components: {LoginUser},
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
  props: {
    item: Object,
    entity: Object,
    entityName: String,
    statuses: Array
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    async loginAttemptedEventHandler(user) {
      this.submitted = true;
      if (user.email.trim() && user.password.trim()) {
        try {
          const response = await this.loginService(user);
          if (response.success) {
            this.$emit('loginAttempted', user);
            this.$router.push('/choose-organization');
          } else {
            alert(response.message);
          }
        } catch (error) {
          console.error(error);
          alert('Error al iniciar sesión.');
        }
      }
    },
    loginService(user) {
      return usersHttp.get(`/users?email=${user.email}&password=${user.password}`)
          .then(response => {
            if (!response.data || response.data.length === 0) {
              return { success: false, message: "Usuario no encontrado o credenciales inválidas" };
            } else {
              return { success: true };
            }
          })
          .catch(error => {
            console.error('There was an error!', error);
            return { success: false, message: 'Error de red' };
          });
    }
  }
}
</script>

<template>
  <login-user :entity="item" entity-name="User" @loginAttempted="loginAttemptedEventHandler">
    <template #content>
      <div class="login-content">
        <div class="login-input-text">
          <label for="e-mail">E-mail</label>
          <pv-input-text id="login-e-mail-input" style="padding: 12px; font-size: 20px" v-model="item.email" :class="{'p-invalid': submitted && !item.email}"/>
          <small v-if="submitted && !item.email" class="p-invalid">E-mail is required.</small>
        </div>
        <div class="login-password">
          <label for="password">Password</label>
          <div class="login-password-container">
            <input :type="showPassword ? 'text' : 'password'" id="login-password-input" v-model="item.password" :style="passwordBarStyle" :class="{'p-invalid': submitted && !item.password}"/>
            <button class="toggle-password-button" @click="togglePassword">
              <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
            </button>
          </div>
          <small v-if="submitted && !item.password" class="p-invalid">Password is required.</small>
        </div>
      </div>
    </template>
  </login-user>
</template>

<style>
.login-content {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.login-input-text {
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  font-size: 22px;
  font-weight: lighter;
}

.login-password {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 22px;
}

.login-password-container {
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
