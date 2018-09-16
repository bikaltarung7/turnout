<template>
    <div>
        <h4>Add Event <input type="checkbox" v-model="showForm"> </h4>
            <div class="form" v-if="showForm">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input id="title" type="text" class="form-control" v-model="event.title">
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea id="description" type="text" class="form-control" v-model="event.description"
                        rows="5">
                    </textarea>
                </div>
                <div class="form-group">
                    <label for="date">Date</label>
                    <input id="date" type="date" class="form-control" v-model="event.date">
                </div>
                <div class="form-group">
                    <label for="location">Location</label>
                    <input id="location" type="text" class="form-control" v-model="event.location">
                </div>
                <button class="btn btn-sm btn-primary" @click="AddEvent">Add Event</button>
            </div>
    </div>
</template>

<script>

import { eventsRef } from '../firebaseapp' 
export default {
    data(){
        return{
            event:{
                title:'',
                description:'',
                date:'',
                location:'',
                email:''
            },
            showForm:false
        }
    },
    methods:{
        AddEvent(){
            this.event.email = this.$store.state.user.email;
            eventsRef.push(this.event);
            this.event.title = '';
            this.event.description = '';
            this.event.location = '';
            this.event.date = '';
            this.event.email = '';
        },
    }
}
</script>

