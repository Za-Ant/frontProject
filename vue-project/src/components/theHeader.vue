<template>
    <div class="page-heading header-text">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <span class="breadcrumb"><RouterLink :to="{ name: 'home'}">Home</RouterLink> / {{header.name }}</span>
                        <h3>{{header.name }}</h3>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
    components: { RouterLink },

    data() {
        return {
            "header": [
                {
                    "name": "Home",
                    "slug": "home",
                    "id": 1
                },
                {
                    "name": "Properties",
                    "slug": "properties",
                    "id": 2
                },
                {
                    "name": "Details",
                    "slug": "details",
                    "id": 3
                },
                {
                    "name": "Contact",
                    "slug": "contact",
                    "id": 4
                },
                {
                    "name": "Schedule",
                    "slug": "schedule",
                    "id": 5
                }
            ]
        }
    }
}
</script>