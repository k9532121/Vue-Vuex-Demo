<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <input type="checkbox" v-model="isCelsius"/>
        <lebel>切換：{{ toggleTemperature }}</lebel>

        <!-- 轉換顯示區 -->
        <h2 v-if="isCelsius">攝氏：{{ celsius }} °C</h2>
        <h2 v-if="!isCelsius">華氏：{{ fahrenheit }} °F</h2>

        <!-- 使用者輸入區 -->
        <div class="celsius">
            <span v-show="!isCelsius">攝氏：</span>
            <span v-show="isCelsius">華氏：</span>
            <input type='number' v-model="userInput"/>
            <span v-show="!isCelsius">°C</span>
            <span v-show="isCelsius">°F</span>
        </div>

        <!-- 計算結果顯示區 -->
        <button @click="temperatureConversio(userInput)">轉換</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: '攝氏、華氏轉換',
                userInput: 0,
                isCelsius: false
            }
        },
        computed: {
            fahrenheit: function () {
                return this.userInput * 9 / 5 + 32;
            },
            celsius: function () {
                return (this.userInput - 32) * 5 / 9;
            },
            toggleTemperature: function () {
                return this.isCelsius ? "攝氏 轉換 華氏" : "華氏 轉換 攝氏"
            }
        },
        methods: {
            temperatureConversio (val) {
                if (this.isCelsius) {
                    alert('攝氏：' + this.celsius);
                } else {
                    alert('華氏：' + this.fahrenheit);
                }
            }
        }
    }
</script>