import Home from '../pages/Home/a_home'

import Music from '../pages/Home/music'
import Slider from '../components/slider'
import Search from '../pages/Home/search'

export default [
	{
     	path: '/',
      	component: Home,
      	meta: {
            keepAlive: false, //此组件不需要被缓存
        }
   	},
	{
      	path: '/home',
      	name: 'homeLink',
      	component: Home,
      	children: [
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
     	path: '/search',
      	name: 'searchLink',
      	component: Search
   	}
	
]
