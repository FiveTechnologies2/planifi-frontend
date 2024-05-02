<script>
export default {
  name: "login",
  data() {
    return {
      title: { singular: 'User'},
      user: {},
      statuses: [{label: 'Logged', value: 'logged'}, {label: 'Unlogged', value: 'unlogged'}],
      password: null,
      showPassword: false,
      createDialogIsVisible: false,
      submitted: false,
      passwordBarStyle: {
        padding: '12px',
        fontSize: '20px',
        width: '94%'
      }
    }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },

    createUser() {
      this.user.id = 0;

    }
  }
}
</script>

<template>
  <div class="login">
    <div class="login-card">
      <pv-card class="login-content-card">
        <template #header>
          <h1 style="text-align: center; padding-bottom: 10px">Sign In</h1>
        </template>
        <template #title>
          <div class="login-content">
            <div class="login-e-mail">
              <label for="e-mail">E-mail</label>
              <pv-input-text id="login-e-mail-input" style="padding: 12px; font-size: 20px" v-model="email"/>
            </div>
            <div class="login-password">
              <label for="password">Password</label>
              <div class="login-password-container">
                <input :type="showPassword ? 'text' : 'password'" id="login-password-input" v-model="password" :style="passwordBarStyle" />
                <button class="toggle-password-button" @click="togglePassword">
                  <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
                </button>
              </div>
            </div>
          </div>
        </template>
        <template #content>
          <div class="login-buttons">
            <div><pv-button class="login-button" label="Login"></pv-button></div>
            <div><pv-button class="google-button">
              <img src="/src/assets/icon-google.png" alt="Google" class="google-icon"> Sign In with Google
            </pv-button></div>
          </div>
        </template>
        <template #footer>
          <div class="login-footer">
            <router-link to="/forgot-password" style="color: #81D440" >Forgot Password?</router-link>
            <div>
              <span>Don't have an account? </span>
              <router-link to="/register" style="color: #81D440">Sign Up</router-link>
            </div>
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style>
.login {
  background-color: #F7CAC9;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.login-card {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8%;
  height: auto;
  width: auto;
}

.login-content-card {
  width: 500px;
  height: auto;
  overflow: hidden;
  border: gray 1px wave;
  border-radius: 10px;
  background-color: white;
  padding: 30px;
  font-size: 24px;
}

.login-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.login-e-mail {
  color: black;
  display: flex;
  flex-direction: column;
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

.login-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
}

.login-button {
  width: 100%;
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 8px;
  background-color: #57C600;
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #4CAF50;
}

.login-button:active {
  background-color: #45A049;
}

.google-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 20px;
  color: black;
  border: #E9EAEB 1px solid;
  border-radius: 8px;
  background-color: white;
  padding-top: 12px;
  padding-bottom: 12px;
  cursor: pointer;
}

.google-button:hover {
  background-color: #E9EAEB;
}

.google-button:active {
  background-color: #D0D1D2;
}

.google-icon {
  height: 40px;
  width: 40px;
  margin-right: 12px;
  margin-bottom: 4px;
}

.login-footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-top: 20px;
  gap: 10px;
}

.login-footer a {
  text-decoration: none;
}
</style>