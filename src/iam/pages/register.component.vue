<script>
import {User} from "../model/user.entity.js";
import {UsersApiService} from "../services/users-api.service.js";
import UserItemRegister from "../components/user-item-register.component.vue";

export default {
  name: "register",
  components: {UserItemRegister},
  data() {
    return {
      title: { singular: 'User', plural: 'Users' },
      users: [],
      user: {},
      selectedUsers: [],
      statuses: [{label: 'Registered', value: 'registered'}, {label: 'Unregistered', value: 'unregistered'}],
      userService: null,
      submitted: false
    }
  },
  methods: {
    notifySuccessfulAction(message) {
      this.$toast.add({severity: "success", summary: "Success", detail: message, life: 3000,});
    },

    getSeverity(status) {
      switch (status) {
        case 'Registered': return 'success';
        case 'Unregistered': return 'info';
        default:  return null;
      }
    },

    findIndexById(id) {
      return this.users.findIndex((user) => user.id === id);
    },

    onNewItemEventHandler() {
      this.user = {};
      this.submitted = false;
    },

    onSavedEventHandler(item) {
      this.submitted = true;
      if (this.user.name.trim()) {
        if (item.id) {
          this.updateUser();
        } else {
          this.createUser();
        }
      }
    },

    createUser() {
      this.user.id = 0;
      this.user = User.fromDisplayableUser(this.user);
      this.userService.create(this.user)
          .then((response) => {
            this.user = User.toDisplayableUser(response.data);
            this.users.push(this.user);
            this.notifySuccessfulAction("User Created");
          });
    },
  },
  created() {
    this.userService = new UsersApiService();

    this.userService.getAll().then((response) => {
      console.log(response.data);
      let users = response.data;
      this.users = users.map((user) => User.toDisplayableUser(user));
    });
  }
}
</script>

<template>
  <div class="register">
    <user-item-register
      :statuses="statuses"
      :item="user"
      @saved="onSavedEventHandler"/>
  </div>
</template>

<style>
  .register {
    background-color: #A2D5F2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
  }
</style>