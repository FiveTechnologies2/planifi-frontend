<script>
import UserItemLogin from "../components/user-item-login.component.vue";

export default {
  name: "login",
  components: { UserItemLogin },
  data() {
    return {
      title: {singular: 'User'},
      user: {
        email: '',
        password: ''
      },
      statuses: [{label: 'Logged', value: 'logged'}, {label: 'Unlogged', value: 'unlogged'}],
      password: null,
      showPassword: false,
      createDialogIsVisible: false,
      submitted: false
    }
  }
}
</script>

<template>
  <div class="login">
    <user-item-login
        :statuses="statuses"
        :item="user"
        @loginAttempted="handleLoginAttempt"
        @canceled="handleCancel"
    >
    </user-item-login>
  </div>
</template>

<style>
.login {
  min-height: 100%;
  min-width: 100%;
  height: auto;
  width: auto;
  overflow: auto;
  background-color: #F7CAC9;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
