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
