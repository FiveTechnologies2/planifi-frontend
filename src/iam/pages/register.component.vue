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

    onSavedEventHandler(item) {
      this.submitted = true;
      if (this.user.name.trim() && this.user.email.trim() && this.user.password.trim()){
        this.createUser();
      }
    },

    async createUser() {
      try {
        let highestId = await this.userService.getHighestId();
        highestId = parseInt(highestId);

        if (isNaN(highestId)) {
          console.error('Error: highestId is not a number:', highestId);
          return;
        }

        let newId = highestId + 1;

        this.user.id = newId.toString();
        this.user = User.fromDisplayableUser(this.user);
        this.userService.create(this.user)
            .then((response) => {
              this.user = User.toDisplayableUser(response.data);
              this.users.push(this.user);
              this.notifySuccessfulAction("User Registered Successfully");
            });
      } catch (error) {
        console.error('Error:', error);
      }
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
      v-on:saved="onSavedEventHandler(user)"/>
  </div>
</template>

<style>
  .register {
    min-height: 100%;
    min-width: 100%;
    height: auto;
    width: auto;
    overflow: auto;
    background-color: #A2D5F2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>