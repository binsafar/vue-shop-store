import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from "../views/ServicesView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ResumeView from "../views/ResumeView.vue";
import ContactsView from "../views/ContactsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () => import('../views/AboutView.vue')
            component: AboutView
        },
        {
            path: '/services',
            name: 'services',
            component: ServicesView,
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView,
        },
        {
            path: '/services',
            name: 'services',
            component: ServicesView,
        },
        {
            path: '/resume',
            name: 'resume',
            component: ResumeView,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView,
        },
    ]
})

export default router
