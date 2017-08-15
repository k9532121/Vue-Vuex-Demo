# vue-vuex-demo

> A Vue.js project

## Build Setup

``` bash
# install vue-cli in command line
npm install -g vue-cli

# install webpack in command line
vue init webpack your-project-name

cd your-project-name

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## Keyword

#### v-model 雙向綁定 (day-03)
```
<h2>{{ hello }}</h2>
<h2>{{ hello + ' and Ironman 2017' }}</h2>
<input type="text" v-model="hello">
```
#### vue-router (day-04)

> index.js
```
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// page
import Hello from '@/components/Hello';
import CtoF from '@/components/C2F.vue';

export default new VueRouter({
    // router 表
    routes: [
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/c2f',
            name: 'c2f',
            component: CtoF
        },
        // router 轉址
        {
            path: '/*',
            redirect: '/hello'
        }
    ]
})
```

> App.vue
```
<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->
        <router-link :to="{path: '/hello'}">Hello</router-link>
        <router-link :to="{name: 'c2f'}">CtoF</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>
```

#### computed 計算 (day-05)
練習使用computed，並計算攝氏轉華氏。
```
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
```


