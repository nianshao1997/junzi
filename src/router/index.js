import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Av from '../views/Av'
import Ren from '../views/Ren'
import Rezult from '../views/Rezult'
import Yanyuan from '../views/Yanyuan'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/av/:id',
        name: 'Av',
        props: true,
        component: Av,
        meta: {
            title: '作品详情'
        }
    },
    {
        path: '/ren/:id',
        name: 'Ren',
        props: true,
        component: Ren,
        meta: {
            title: '演员详情'
        }
    },
    {
        path: '/rezult/:id',
        name: 'Rezult',
        props: true,
        component: Rezult,
        meta: {
            title: '搜索结果'
        }
    },
    {
        path: '/zuopin',
        component: () =>
            import ('../views/Zuopin.vue'),
        meta: {
            title: '作品'
        }
    },
    {
        path: '/yanyuan',
        component: Yanyuan,
        meta: {
            title: '演员'
        }
    }
]

const router = new VueRouter({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        // if (savedPosition) {
        //     return savedPosition
        // } else {
        //     return { x: 0, y: 0 }
        // }
        return { x: 0, y: 0 }
    }
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
export default router