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
    },
]

const router = new VueRouter(
    {
        mode:'history',
        routes,
    }
)

export default router;