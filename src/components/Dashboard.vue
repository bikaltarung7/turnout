<template>
    <div >
        <div class="col-md-6 col-md-offset-3">
            <h3>Events Dashboard</h3>
            <button class="btn btn-danger btn-sm sign-out-btn" @click="signOut">Sign Out</button>
            <hr>
                <add-event/>
            <hr>
    </div>
    <div class="col-md-10 col-md-offset-1">
        <event-item v-for="(event,index) in $store.state.events" :event="event" :key="index"/>
    </div>
    </div>

</template>


<script>

import { firebaseApp,eventsRef } from '../firebaseapp'
import AddEvent from './AddEvent.vue'
import EventItem from './EventItem.vue'

export default{
    methods:{
        signOut(){
            this.$store.dispatch('signOut')
            firebaseApp.auth().signOut()
        }
    },
    components:{
        AddEvent,
        EventItem
    },
    mounted(){
        eventsRef.on('value',snap => {
            let events = []
            snap.forEach(event =>{
                events.push(event.val())
            })
            this.$store.dispatch('setEvents',events)
        })
    }
}
</script>