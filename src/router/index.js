import Vue from 'vue'
import VRouter from 'vue-router'
Vue.use(VRouter)

import goods from '../components/goods/goods'
import judge from '../components/judge/judge'
import seller from '../components/seller/seller'


export default new VRouter({
    routes:[
        {
            path:'/',
            redirect:'/goods'

        },
        {
            path:'/goods',
            component:goods

        },{
            path:'/judge',
            component:judge

        },{
            path:'/seller',
            component:seller

        }
    ],
    linkActiveClass:'active'
});



