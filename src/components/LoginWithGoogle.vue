// 69204221696-hksbel6n2hl8i8dgr0pmb1ehdu8h84u1.apps.googleusercontent.com
<template>
    <div><br>
        <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">Google</GoogleLogin> &nbsp;
           <GoogleLogin :params="params" :logoutButton=true>Logout</GoogleLogin>
    </div>
</template>

<script>
 import GoogleLogin from 'vue-google-login';
export default {
    name:'GoogleWithLogin',
    components:{
        GoogleLogin,
    },
    data() {
            return {
                // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
                params: {
                    client_id: "69204221696-hksbel6n2hl8i8dgr0pmb1ehdu8h84u1.apps.googleusercontent.com"
                },
                // only needed if you want to render the button with the google ui
                renderParams: {
                    width: 250,
                    height: 50,
                    longtitle: true
                }
            }
        },
         methods: {
        onSuccess(googleUser) {
            console.log(JSON.stringify(googleUser));
 
            // This only gets the user information: id, name, imageUrl and email
            console.log(JSON.stringify(googleUser.getBasicProfile()));
        },
        onFailure(){
            console.log('wrong id or password')
        },
        
    }
}
</script>