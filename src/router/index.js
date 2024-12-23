import VueRouter from "vue-router";

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../components/LoginComponent'),
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('../components/MainComponent'),
        children:[
            {
                path: '/home',
                name: 'home',
                meta:{
                    title:'home'
                },
                component: () => import('../components/HomeComponent'),
            }
        ]
    },
]

const router = new VueRouter(
    {
        mode:'history',
        routes,
    })

// 这一段代码用于解决点击Personal Info时的报错问题
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to){
    return VueRouterPush.call(this, to).catch(err => err)
}

export default router;