const state = {
	ban_swiper:[
		{
			'id' : 0,
			'img_src' : '',
			'msg' : 'slider1',
			'bgc' : 'bgc00c8b3'
		},
		{
			'id' : 1,
			'img_src' : '',
			'msg' : 'slider2',
			'bgc' : 'bgc4blue'
		},
		{
			'id' : 2,
			'img_src' : '',
			'msg' : 'slider3',
			'bgc' : 'bgc9pur'
		},
		{
			'id' : 3,
			'img_src' : '',
			'msg' : 'slider4',
			'bgc' : 'bgcdarkgray'
		},
		{
			'id' : 4,
			'img_src' : '',
			'msg' : 'slider5',
			'bgc' : 'bgcyellow'
		}
	],
	home_banner:[
		{
			'id' : 0,
			'img_src' : '../../assets/images/banner01.jpg',
			'msg' : 'slider1',
			'bgc' : 'bgc00c8b3'
		},
		{
			'id' : 1,
			'img_src' : '',
			'msg' : 'slider2',
			'bgc' : 'bgc4blue'
		},
		{
			'id' : 2,
			'img_src' : '',
			'msg' : 'slider3',
			'bgc' : 'bgc9pur'
		}
	]
}
const getters = {
	ban_swiper: state => state.ban_swiper,
	home_banner: state => state.home_banner
}
const mutations = {
	
}
const actions = {
	
}
export default {
	state,
	getters,
	mutations,
	actions
}
