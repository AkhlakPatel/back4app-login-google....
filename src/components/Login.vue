<template>
    <div>
        <h2>Login Here</h2>
        <input type="text" placeholder="Enter username" v-model="loginModel.username"> <br> <br>
        <input type="password" placeholder="Enter password" v-model="loginModel.password"> <br> <br>
        <button type="submit" @click="login">Login</button>
    </div> 
</template>

<script>
import b4a from '../back4app/back4appForm'
export default {
    name:'Login',
    data(){
        return {
            loginModel:{
                username:'',
                password:'',
            }
        }
    },
    methods:{
        login(){
            b4a.login(this.loginModel)
            // console.log(this.loginModel)
        }
    }
}
</script>