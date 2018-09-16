<template>
    <div class="form-inline">
        <h3>Sign In</h3>
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
            <button class="btn btn-primary" @click="Signin">Sign In</button>
        </div>
        <br>
        <p>{{ error.message }}</p>
        <br>
        <router-link to="/signup">No Account ? Sign Up.</router-link>
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
        Signin(){
            firebaseApp.auth().signInWithEmailAndPassword(this.email,this.password)
            .catch(error => {
                this.error = error
            })
        }
    }
}
</script>