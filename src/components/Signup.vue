<template>
    <div class="form-inline">
        <h3>Sign Up</h3>
        <div class="form-group">
            <input 
                type="text"
                placeholder="email"
                class="form-control"
                v-model="email"
            >
            <input 
                type="Password"
                placeholder="Password"
                class="form-control"
                v-model="password"
            >
            <button class="btn btn-primary" @click="SignUp">Sign Up</button>
        </div>
        <br>
        <p>{{ error.message }}</p>
        <br>
        <router-link to="/signin">Already a User ? Sign In.</router-link>
    </div>
</template>

<script>

import { firebaseApp } from '../firebaseapp'

export default{
    data(){
        return{
            email:'',
            password:'',
            error:{
                message:''
            }
        }
    },
    methods:{
        SignUp(){
            firebaseApp.auth().createUserWithEmailAndPassword(this.email,this.password)
            .catch(error => {
                this.error = error
            })
        }
    }
}

</script>