import Shopcar from '../pages/Shopcar/a_shopcar'
import Slider from '../pages/Slider/a_slider'

export default [
	{
      	path: '/shopcar',
      	name: 'Shopcar',
     	component: Shopcar,
      	children: [
	      	{
				path: '/shopcar_slider',
				name: 'shopcar_slider',
				components: {
					slider:Slider
				}
			}
      	]
    }
    
]
	