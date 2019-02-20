import Admin from '../admin/index.vue'
//首页
//轮播图
import Admin_home_swiper from '../admin/pages/Home/swiper/swiper.vue'
import Admin_home_swiper_add from '../admin/pages/Home/swiper/swiper_add.vue'
import Admin_home_swiper_edit from '../admin/pages/Home/swiper/swiper_edit.vue'
//分类
import Admin_home_classification from '../admin/pages/Home/classification/classification.vue'
import Admin_home_classification_add from '../admin/pages/Home/classification/classification_add.vue'
import Admin_home_classification_edit from '../admin/pages/Home/classification/classification_edit.vue'
//每日福利
import Admin_home_daily_benefits from '../admin/pages/Home/daily_benefits/daily_benefits.vue'
import Admin_home_daily_benefits_add from '../admin/pages/Home/daily_benefits/daily_benefits_add.vue'
import Admin_home_daily_benefits_edit from '../admin/pages/Home/daily_benefits/daily_benefits_edit.vue'


import Admin_find from '../admin/pages/Find/index.vue'

export default [
	{
      	path: '/admin',
      	name: 'adminLink',
     	component: Admin,
     	children:[
     		//轮播图
     		{
     			path: '/admin/admin_home_swiper',
		      	name: 'admin_home_swiperLink',
		     	component: Admin_home_swiper
     		},
     		{
     			path: '/admin/admin_home_swiper_add',
		      	name: 'admin_admin_home_swiper_addLink',
		     	component: Admin_home_swiper_add
     		},
     		{
     			path: '/admin/admin_home_swiper_edit',
		      	name: 'admin_admin_home_swiper_editLink',
		     	component: Admin_home_swiper_edit
     		},
     		//首页分类
     		{
     			path: '/admin/admin_home_classification',
		      	name: 'admin_home_classificationLink',
		     	component: Admin_home_classification
     		},
     		{
     			path: '/admin/admin_home_classification_add',
		      	name: 'admin_admin_home_classification_addLink',
		     	component: Admin_home_classification_add
     		},
     		{
     			path: '/admin/admin_home_classification_edit',
		      	name: 'admin_admin_home_classification_editLink',
		     	component: Admin_home_classification_edit
     		},
     		//每日福利
     		{
     			path: '/admin/admin_home_daily_benefits',
		      	name: 'admin_daily_benefitsLink',
		     	component: Admin_home_daily_benefits
     		},
     		{
     			path: '/admin/admin_home_daily_benefits_add',
		      	name: 'admin_admin_home_daily_benefits_addLink',
		     	component: Admin_home_daily_benefits_add
     		},
     		{
     			path: '/admin/admin_home_daily_benefits_edit',
		      	name: 'admin_admin_home_daily_benefits_editLink',
		     	component: Admin_home_daily_benefits_edit
     		},
     		{
     			path: '/admin/admin_find',
		      	name: 'admin_findLink',
		     	component: Admin_find
     		},
     	]
    }
]
