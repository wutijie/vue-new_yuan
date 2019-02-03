import Find from '../pages/Find/a_find'
import Slider from '../pages/Slider/a_slider'

export default [
	{
      	path: '/find',
      	name: 'Find',
     	component: Find,
      	children: [
	      	{
				path: '/find_slider',
				name: 'find_slider',
				components: {
					slider:Slider
				}
			}
      	]
    }
    
]
	