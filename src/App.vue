<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->
        <router-link :to="{path: '/hello'}">Hello</router-link>
        <router-link :to="{name: 'c2f'}">CtoF</router-link>
        <router-link :to="{name: 'learnComponent'}">learnComponent</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    
</style>
