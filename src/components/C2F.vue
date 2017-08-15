<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <h2>華氏：{{ celsius * 9 / 5 + 32 }} °F</h2>
        <h2>華氏：{{ fahrenheit }} °F</h2>
        <div class="celsius">
            攝氏：<input type="number" v-model="celsius"/> °C
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: '攝氏轉華氏',
                celsius: 0
            }
        },
        computed: {
            fahrenheit () {
                return this.celsius * 9 / 5 + 32;
            }
        }
    }
</script>