<script>
export default {
  name: "login-user",
  props: { entity: Object, visible: Boolean, entityName: String, edit: Boolean, size: String },
  data() {
    return {
      visible: true,
      submitted: false
    }
  },
  methods: {
    onCancel() {
      this.$emit('canceled');
    },
    onLogin() {
      this.submitted = true;
      this.$emit('loginAttempted', this.entity);
    }
  },
  computed: {
    dialogClass() {
      return {
        'login-dialog-visible': this.visible
      }
    }
  }
}
</script>

<template>
  <pv-dialog v-bind:visible="visible" :modal="true" class="login-dialog" :header="entityName" :class="dialogClass"
             :closable="false" @cancel="onCancel">
    <template #header>
      <h1 style="text-align: center; padding-bottom: 10px">Sign In</h1>
    </template>
    <slot name="content"></slot>
    <template #footer>
      <div class="login-buttons">
        <div>
          <pv-button class="login-button" label="Sign In" @click="onLogin"></pv-button>
        </div>
        <div>
          <button class="google-button">
            <img src="/src/assets/icon-google.png" alt="Google" class="google-icon"> Sign In with Google
          </button>
        </div>
      </div>
      <div class="login-footer">
        <router-link to="/forgot-password" style="color: #81D440">Forgot Password?</router-link>
        <div>
          <span>Don't have an account? </span>
          <router-link to="/register" style="color: #81D440">Sign Up</router-link>
        </div>
      </div>
    </template>
  </pv-dialog>
</template>

<style>
.login-dialog {
  min-width: 500px;
  max-width: 90vw;
  height: auto;
  max-height: 90vh;
  overflow-y: auto;
  border: gray 1px wave;
  border-radius: 10px;
  background-color: white;
  padding: 24px 96px;
  font-size: 24px;
}

.login-dialog-visible {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
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
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: black;
  border: #E9EAEB 1px solid;
  border-radius: 8px;
  background-color: white;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
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
  flex-shrink: 0;
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
