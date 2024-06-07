<script>

export default {
  name: "register-user",
  props: { entity: null, visible: Boolean, entityName: '', edit: Boolean, size: 'default' },
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
    onRegister() {
      this.submitted = true;
      this.$emit('registerAttempted');
    }
  },
  computed: {
    dialogClass() {
      return {
        'register-dialog-visible': this.visible
      }
    }
  }
}
</script>

<template>
  <pv-dialog v-bind:visible="visible" :modal="true" class="register-dialog" :header="entityName" :class="dialogClass" :closable="false" @cancel="onCancel">
    <template #header>
      <h1 style="text-align: center; padding-bottom: 10px">Sign Up</h1>
    </template>
    <slot name="content"></slot>
    <template #footer>
      <div class="register-buttons">
        <div>
          <pv-button class="login-button" label="Sign Up" @click="onRegister"></pv-button>
        </div>
        <div><button class="google-button">
          <img src="/src/assets/icon-google.png" alt="Google" class="google-icon"> Sign In with Google
        </button></div>
      </div>
    </template>
  </pv-dialog>
</template>

<style>
.register-dialog {
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

.register-dialog-visible {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.register-buttons {
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
  width: 500px;
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
</style>