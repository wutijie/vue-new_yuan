import Admin from '../admin/index.vue'
import Admin_home_swiper from '../admin/pages/Home/swiper.vue'
import Admin_find from '../admin/pages/Find/index.vue'

export default [
	{
      	path: '/admin',
      	name: 'adminLink',
     	component: Admin,
     	children:[
     		{
     			path: '/admin/admin_home_swiper',
		      	name: 'admin_home_swiperLink',
		     	component: Admin_home_swiper
     		},
     		{
     			path: '/admin/admin_find',
		      	name: 'admin_findLink',
		     	component: Admin_find
     		},
     	]
    }
]
