<template>
    <div v-if="property">

        <TheHeader :title="property.name" />

        <div class="single-property section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="main-image">
                            <img :src="property.image" alt="">
                        </div>
                        <div class="main-content">
                            <span class="category">{{ property.category }}</span>
                            <h4>{{ property.address }}</h4>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="info-table">
                            <ul>
                                <TableInfoCard :imageNumber="1" :title="property.details.area + ' m2'"
                                    subtitle="Total Flat Space" />
                                <TableInfoCard :imageNumber="2" title="Contract" subtitle="Contract Ready" />
                                <TableInfoCard :imageNumber="3" title="Payment" subtitle="Payment Process" />
                                <TableInfoCard :imageNumber="4" title="Safety" subtitle="24/7 Under Control" />
                            </ul>
                        </div>
                    </div>
                    <p>Get <strong>the best villa agency</strong> HTML CSS Bootstrap Template for your company website.
                        TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.
                        Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee
                        schlitz enamel pin you probably haven't heard of them ugh hella.

                        <br><br>When you look for free CSS templates, you can simply type TemplateMo in any search engine
                        website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc.
                        Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine
                        neutra cardigan hoodie pop-up.
                    </p>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia';

import { useProperties } from '@/stores/properties';

import TheHeader from '@/components/theHeader.vue';
import TableInfoCard from '@/components/TableInfoCard.vue';

export default {
    components: { TheHeader, TableInfoCard },

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
}
</script>