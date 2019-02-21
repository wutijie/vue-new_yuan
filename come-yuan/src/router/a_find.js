import Find from '../pages/Find/a_find'
import Slider from '../pages/Slider/a_slider'

export default [
	{
      	path: '/find',
     	component: Find,
      	children: [
	      	{
				path: '/find_slider',
				components: {
					slider:Slider
				}
			}
      	]
    }
    
]
	