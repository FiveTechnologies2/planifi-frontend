<script>

export default {
  name: "create",
  props: { entity: null, entityName: '', edit: Boolean, size: 'default' },
  data() {
    return {
      cardStyle: {
        width: 'auto',
        height: 'auto',
        border: 'gray 1px wave',
        borderRadius: '10px',
        backgroundColor: 'white',
        padding: '24px 96px',
        fontSize: '24px'
      }
    }
  },
  methods: {
    onRegister() {
      this.$emit('registered', this.entity);
      this.$emit('saved', this.entity);
    }
  }
}
</script>

<template>
  <pv-card v-bind:model="true" class="register-content-card">
    <template #header>
      <h1 style="text-align: center; padding-bottom: 10px">Sign Up</h1>
    </template>
    <slot name="content"></slot>
    <template #footer>
      <div class="register-buttons">
        <div><pv-button label="Login" class="login-button" @click="onRegister"></pv-button></div>
        <div><pv-button class="google-button">
          <img src="/src/assets/icon-google.png" alt="Google" class="google-icon"> Sign In with Google
        </pv-button></div>
      </div>
    </template>
  </pv-card>
</template>

<style>
.register-content-card {
  width: 500px;
  height: auto;
  border: gray 1px wave;
  border-radius: 10px;
  background-color: white;
  padding: 24px 96px;
  font-size: 24px;
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
</style>