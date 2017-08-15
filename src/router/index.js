import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// page
import Hello from '@/pages/Hello';
import CtoF from '@/pages/C2F.vue';
import learnComponent from '@/pages/learnComponent.vue';

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
        },{
            path: '/learnComponent',
            name: 'learnComponent',
            component: learnComponent
        },
        // router 轉址
        {
            path: '/*',
            redirect: '/hello'
        }
    ]
})
