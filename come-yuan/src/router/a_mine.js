import Mine from '../pages/Mine/a_mine'
import Slider from '../pages/Home/slider'

import Page1 from '../pages/Mine/b_mine_page1'
import Page2 from '../pages/Mine/b_mine_page2'

export default [
	{
      	path: '/mine',
     	component: Mine,
      	children: [
	      	{
	      		path: '/mine/b_mine_page1',
	      		name: 'Mine_page1',
	      		component: Page1
	      	},
	      	{
	      		path: '/mine/b_mine_page2',
	      		name: 'Mine_page2',
	      		component: Page2
	      	},
	      	{
				path: '/mine_slider',
				components: {
					slider:Slider
				}
			}
      	]
    }
    
]
	