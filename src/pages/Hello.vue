<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>{{ hello }}</h2>
        <h2>{{ hello + ' and Ironman 2017' }}</h2>
        <input type="text" v-model="hello">
        <input type="checkbox" v-model="toggle">{{ toggle }}

    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                hello: 'Hello Vue 2.0!',
                toggle: true,
            }
        }
    }
</script>