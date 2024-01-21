<template>
    <div v-if="property">

        <div class="page-heading header-text">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <span class="breadcrumb"><RouterLink :to="{ name: 'home'}">Home</RouterLink> / {{property.name }}</span>
                        <h3>{{property.name }}</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="single-property section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="main-image">
                            <img :src="property.image" alt="">
                        </div>
                        <div class="main-content">
                            <span class="category">{{property.category }}</span>
                            <h4>{{property.address }}</h4>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="info-table">
                            <ul>
                                <li>
                                    <img src="/images/info-icon-01.png" alt="" style="max-width: 52px;">
                                    <h4>{{property.details.area }} m2<br><span>Total Flat Space</span></h4>
                                </li>
                                <li>
                                    <img src="/images/info-icon-02.png" alt="" style="max-width: 52px;">
                                    <h4>Contract<br><span>Contract Ready</span></h4>
                                </li>
                                <li>
                                    <img src="/images/info-icon-03.png" alt="" style="max-width: 52px;">
                                    <h4>Payment<br><span>Payment Process</span></h4>
                                </li>
                                <li>
                                    <img src="/images/info-icon-04.png" alt="" style="max-width: 52px;">
                                    <h4>Safety<br><span>24/7 Under Control</span></h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div></template>

<script>
import { mapState } from 'pinia';
import { RouterLink } from 'vue-router';

import { useProperties } from '@/stores/properties';

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(useProperties, ['getPropertyById']),

        property() {
            return this.getPropertyById(this.id)
        }
    },
    components: { RouterLink }
}
</script>