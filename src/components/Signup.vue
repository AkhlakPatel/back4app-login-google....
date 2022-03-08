<template>
    <div>
            <h2>Signup</h2>
        <div class="signup">
            <input type="text" placeholder="Enter Username" v-model="signupModel.username"> <br> <br>
            <input type="email" placeholder="Enter Email" v-model="signupModel.email"> <br> <br>
            <input type="password" placeholder="Enter Password" v-model="signupModel.password"> <br> <br>
            <button type="submit" @click="signup">Signup</button>
        </div> 
    </div>
</template>

<script>
import b4a from '../back4app/back4appForm'
export default {
    name:"Signup",
    data(){
    return {
        signupModel:{
            username:"",
            email:"",
            password:"",
        }
    }
    },
    methods:{
        signup(){
            b4a.signup(this.signupModel)
            // console.log('signup:',this.signupModel)
        }
    },

}
</script>