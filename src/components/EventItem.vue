<template>
    <div class="col-md-4">
        <div class="panel panel-primary">
        <div class="panel-heading">
            {{event.title}}
        </div>
        <div class="panel-body">
            {{ event.description }}
            <p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Date:{{ event.date}}</li>
                    <li class="list-group-item">Location:{{ event.location}}</li>
                    <li class="list-group-item">Host:{{ event.email}}</li>
                </ul>
            </p>
        </div>
    </div> 
    </div>
</template>

<script>
export default {
    props:['event']
}
</script>

<style>

</style>
