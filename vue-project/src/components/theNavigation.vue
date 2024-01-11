<template>
    <header>
        <nav id="nav">
            <RouterLink to="/" id="logo">
                Villa
            </RouterLink>
            <RouterLink v-for="destination in destinations" :key="destination.id"
                :to="{ name: 'destination', params: { slug: destination.slug } }">
                {{ destination.name }}
            </RouterLink>
        </nav>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';
import dest from './../data.json'

export default {
    components: { RouterLink },

    data() {
        return {
            destinations: dest.destinations
        }
    }
}
</script>