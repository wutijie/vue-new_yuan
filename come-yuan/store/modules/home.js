const state = {
	home_banner:[],
	home_benefits:[],
	home_classification:[],
}
const urls=["banner","benefits","classification"];

for(let k=0;k<urls.length;k++){
	fetch("https://wd0227110045vvxhbf.wilddogio.com/"+urls[k]+".json").then(res => {
		return res.json();
	}).then(data => {
		console.log(data);
		for(let i in data) {
			data[i].id = i;
			if(k==0){
				state.home_banner.push(data[i]);
			}else if(k==1){
				state.home_benefits.push(data[i]);
			}else if(k==2){
				state.home_classification.push(data[i]);
			}
		}
		console.log(state)
	})
}

const getters = {
	home_banner: state => state.home_banner,
	home_benefits: state => state.home_benefits,
	home_classification: state => state.home_classification,
}
const mutations = {
	setHomeBannerStatus(state,data){
		state.home_banner = data;
	}
}
const actions = {
	setHomeBannerStatus({ commit }, data){
		commit('setHomeBannerStatus', data);
	}
}
export default {
	state,
	getters,
	mutations,
	actions
}
