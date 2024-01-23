<template>
    <div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv">
        <div class="item">
            <RouterLink :to="{
                name: 'property-detail',
                params: {
                    id: property.id

                }
            }"><img :src="property.image" alt=""></RouterLink>
            <span class="category">{{ property.name }}</span>
            <h6>${{ property.price }}</h6>
            <h4>
                <RouterLink :to="{
                    name: 'property-detail',
                    params: {
                        id: property.id

                    }
                }">{{ property.address }}</RouterLink>
            </h4>
            <ul>
                <li>Bedrooms: <span>{{ property.details.bedrooms }}</span></li>
                <li>Bathrooms: <span>{{ property.details.bathrooms }}</span></li>
                <li>Area: <span>{{ property.details.area }}m2</span></li>
                <li>Floor: <span>{{ property.details.floor }}</span></li>
                <li>Parking: <span>{{ property.details.parking }} spots</span></li>
                <li>Contract: <span>{{ property.details.contract }} ready</span></li>
            </ul>
            <div class="main-button">
                <RouterLink :to="{
                    name: 'schedule',
                    params: {
                        id: property.id

                    }
                }">Schedule a visit</RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink
    },

    props: {
        property: {
            type: Object,
            required: true
        }
    }
}
</script>