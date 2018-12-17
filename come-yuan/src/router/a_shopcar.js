import Shopcar from '../pages/Shopcar/a_shopcar'
import Slider from '../pages/Slider/a_slider'

export default [
	{
      	path: '/shopcar',
     	component: Shopcar,
      	children: [
	      	{
				path: '/shopcar_slider',
				components: {
					slider:Slider
				}
			}
      	]
    }
    
]
	