import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Movie from '@/views/Movie.vue';
import MoviePage from '@/views/MoviePage.vue';
import Search from '@/views/Search.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/movie/:id',
        name: 'Movie',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Movie,
    },
    {
        path: '/movie/',
        name: 'MoviePage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: MoviePage,
    },
    {
        path: '/search/',
        name: 'Search',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Search,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
