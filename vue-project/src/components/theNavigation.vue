<template>
    <!-- ***** Menu Start ***** -->
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <RouterLink to="/" id="logo">
                            Villa
                        </RouterLink>
                        <RouterLink v-for="destination in destinations" :key="destination.id" :to="destination.slug">
                            {{ destination.name }}
                        </RouterLink>
                    </nav>
                </div>
            </div>
        </div>
    </header>
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