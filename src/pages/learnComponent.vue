<template>
    <div id="jumbotron">
        <Navbar>
            <div slot="right">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>
        </Navbar>
        <Jumbotron></Jumbotron>
        <Container :list="list"></Container>
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
        },
        data () {
            return {
                list: [
                    {
                        title: '標題1',
                        info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
                        btntext: 'View details »'
                    },
                    {
                        title: '標題2',
                        info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
                        btntext: 'View details »'
                    },
                    {
                        title: '標題3',
                        info: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
                        btntext: 'View details »'
                    },
                ]
            }
        }
    }

</script>
<style>
    #jumbotron{
        padding-top: 50px;
        padding-bottom: 20px;
    }
</style>