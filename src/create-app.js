import Router from 'vue-router';
import Vue from 'vue';

import App from './components/App.vue';
import Home from './components/Home.vue';

function createRouter() {
    Vue.use(Router);

    const router = new Router({
        mode: 'history',
        routes: [{
            path: '/',
            name: 'home',
            component: Home,
        }],
    });

    return router;
}

export default function createApp(context) {
    const router = createRouter();

    const app = new Vue({
        router,
        render: h => h(App),
    });

    return { app, router };
}
