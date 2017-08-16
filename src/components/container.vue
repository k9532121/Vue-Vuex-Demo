<template>
    <div class="container">
        <div class="row">
            <div v-for="item in list" class="col-md-4">
                <h2>{{ item.title }}</h2>
                <p>{{ item.info }}</p>
                <p><a class="btn btn-default" href="#" role="button">{{ item.btntext }}</a></p>
            </div>
        </div>

        <hr>

        <footer>
            <p>&copy; 2016 Company, Inc.</p>
        </footer>
    </div>
</template>
<script>
    export default {
        props: {
            list: Array,
        },
    }
</script>