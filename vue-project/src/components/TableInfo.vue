
<template>
    <div class="col-lg-3">
        <div class="info-table">
            <ul>
                <TableInfoCard :imageNumber="1" title="250 m2" subtitle="Total Flat Space" />
                <TableInfoCard :imageNumber="2" title="Contract" subtitle="Contract Ready" />
                <TableInfoCard :imageNumber="3" title="Payment" subtitle="Payment Process" />
                <TableInfoCard :imageNumber="4" title="Safety" subtitle="24/7 Under Control" />
            </ul>
        </div>
    </div>
</template>

<script>
import TableInfoCard from './TableInfoCard.vue';

export default {
    components: {
        TableInfoCard
    },

    data() {
        return {
            cards: [
                {
                    imageNumber: 1,
                    title: '450 m2',
                    subtitle: 'Total Flat Space'
                },
                {
                    imageNumber: 2,
                    title: 'Contract',
                    subtitle: 'Contract Ready'
                },
                {
                    imageNumber: 3,
                    title: 'Payment',
                    subtitle: 'Payment Process'
                },
                {
                    imageNumber: 4,
                    title: 'Safety',
                    subtitle: '24/7 Under Control'
                }
            ]
        }
    }
}
</script>