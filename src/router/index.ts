import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layout/default/DefaultLayout.vue'
import { Artists } from '../pages/artists'
import { Songs } from '../pages/songs'
import { Albums } from '../pages/albums'


const router = createRouter({
	history: createWebHistory(),

	routes: [
		{
			path: '/',
			component: DefaultLayout,
			children: [
				{
					path: '/',
					name: 'artists',
					component: Artists,
				},
				{
					path: '/songs',
					name: 'songs',
					component: Songs,
				},
				{
					path: '/albums',
					name: 'albums',
					component: Albums,
				},
			],
		},
	],
})

export default router
