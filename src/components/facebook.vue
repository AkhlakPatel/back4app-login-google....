<template>
  <div id="app">
    <facebook-login class="button"
      loginLabel="Facebook"
      appId="655362309029788"
      @login="onLogin"
      @logout="onLogout"
      @get-initial-status="getUserData"
      @sdk-loaded="sdkLoaded">
    </facebook-login>
    <div v-if="isConnected" class="information">
      <h1>My Facebook Information</h1>
      <div class="well">
        <div class="list-item">
          <img :src="picture">
        </div>
        <div class="list-item">
          <i>{{name}}</i>
        </div>
        <div class="list-item">
          <i>{{email}}</i>
        </div>
        <div class="list-item">
          <i>{{personalID}}</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import facebookLogin from 'facebook-login-vuejs'
export default {
    name:'facebook',
    data() {
  return {
    isConnected: false,
    name: '',
    email: '',
    personalID: '',
    picture: '',
    FB: undefined
  }
},
components: {
  facebookLogin
},
methods: {
  getUserData() {
    this.FB.api('/me', 'GET', { fields: 'id,name,email,picture' },
      user => {
        this.personalID = user.id;
        this.email = user.email;
        this.name = user.name;
        this.picture = user.picture.data.url;
      }
    )
  },
  sdkLoaded(payload) {
    this.isConnected = payload.isConnected
    this.FB = payload.FB
    if (this.isConnected) this.getUserData()
  },
  onLogin() {
    this.isConnected = true
    this.getUserData()
  },
  onLogout() {
    this.isConnected = false;
  }
}

}
</script>