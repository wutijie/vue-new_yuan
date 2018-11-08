import Home from '../pages/Home/a_home'

import Page1 from '../pages/Home/b_home_page1'
import Page2 from '../pages/Home/b_home_page2'

import Music from '../pages/Home/music'
import Slider from '../pages/Home/slider'

export default [
	{
     	path: '/',
      	name: 'Home',
      	component: Home,
      	meta: {
            keepAlive: true, //此组件不需要被缓存
        }
   	},
	{
      	path: '/home',
      	component: Home,
      	children: [
			{
				path: '/home/b_home_page2',
				name: 'Home_page2',
				component: Page2
			},
			{
				path: '/home/music',
				name: 'musicLink',
				component: Music
			},
			{
				path: '/home_slider',
				components: {
					slider:Slider
				}
			}
      	]
    },
	{
		path: '/home/b_home_page1',
		name: 'Home_page1',
		component: Page1
	}
	
]
