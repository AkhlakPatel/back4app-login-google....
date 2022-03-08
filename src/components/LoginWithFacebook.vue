<template>
  <div>
    <br />
    <facebook-login
      class="button"
      appId="655362309029788"
      @login="onLogin"
      @logout="onLogout"
      @sdk-loaded="sdkLoaded"
    >
    </facebook-login>
  </div>
</template>

<script>
import facebookLogin from "facebook-login-vuejs";
export default {
  name: "LoginWithFacebook",
  components: {
    facebookLogin,
  },
  methods: {
    getUserData() {
      this.FB.api(
        "/me",
        "GET",
        { fields: "id,name,email" },
        userInformation => {
          console.log("Get data from FB", userInformation);
          this.personalID = userInformation.id;
          this.email = userInformation.email;
          this.name = userInformation.name;
          console.log(this.personalID,this.email,this.name)
        }
      );
    },
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected;
      this.FB = payload.FB;
      if (this.isConnected) this.getUserData();
    },
    onLogin() {
      this.isConnected = true;
      this.getUserData();
    },
    onLogout() {
      this.isConnected = false;
    },
  },
};
</script>