<template>
    <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/">Villa</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-button"
                aria-controls="nav-button" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="nav-button">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <RouterLink v-for="destination in destinations" :key="destination.id" :to="{ name: destination.slug}">
                        <li class="nav-item" style="padding-right: 20px;">{{ destination.name }}</li>
                    </RouterLink>
                    <li class="nav-item dropdown"></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import { RouterLink } from 'vue-router';
import dest from './../data.json'

export default {
    components: { RouterLink },

    data() {
        return {
            "destinations": [
                
                {
                    "name": "Properties",
                    "slug": "properties",
                    "id": 1
                },
                {
                    "name": "Details",
                    "slug": "details",
                    "id": 2
                },
                {
                    "name": "Contact",
                    "slug": "contact",
                    "id": 3
                },
                {
                    "name": "Schedule",
                    "slug": "schedule",
                    "id": 4
                }
            ]
        }
    }
}
</script>