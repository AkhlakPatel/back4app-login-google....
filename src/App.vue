<template>
  <div id="app">
    <!-- <HelloWorld/> -->
    <Signup/>
    <Login/>
    <GoogleLogin/>
    <!-- <FacebookLogin/> -->
    <Facebook/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import GoogleLogin from './components/LoginWithGoogle.vue'
// import FacebookLogin from './components/LoginWithFacebook.vue'
import Facebook from './components/facebook.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    Signup,
    Login,
    GoogleLogin,
    // FacebookLogin,
    Facebook
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
