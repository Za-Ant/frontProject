<template>
    <li>
        <img :src="`/images/info-icon-0${imageNumber}.png`" alt="" style="max-width: 52px;">
        <h4>{{ title }}<br><span>{{ subtitle }}</span></h4>
    </li>
</template>

<script>
export default {
    props: {
        imageNumber: {
            type: Number,
            default: 1
        },
        title: {
            type: String
        },
        subtitle: {
            type: String
        }
    },
    data() {
        return {
            cards: [
                {
                    imageNumber: 1,
                    title: '250 m2',
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