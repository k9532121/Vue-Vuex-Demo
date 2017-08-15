<template>
    <div id="jumbotron">
        <Navbar></Navbar>
        <Jumbotron></Jumbotron>
        <Container></Container>
    </div>
</template>
<script>
    import Navbar from '../components/navbar.vue';
    import Jumbotron from '../components/jumbotron.vue';
    import Container from '../components/container.vue';

    export default {
        components: {
            Navbar,
            Jumbotron,
            Container
        }
    }
</script>
<style>
    #jumbotron{
        padding-top: 50px;
        padding-bottom: 20px;
    }
</style>