<template>
	<div class="fs2r h100p slider_wrap w70p white">
		<div class="tac">
			<img class="w8r h8r br50p mv1r" src="../../assets/images/banner01.gif"/>
			<p class="fs1d6r fwb">昵称</p>
			<p class="fs0d9r lh2r">个性签名</p>
		</div>
		<div class="bgcwhite box h4r lh4r">
			<div class="item flexnone">
				<img class="w2r vabt mh1r vatt" src="../../assets/images/libao.png"/>
			</div>
			<div class="item bcc bcc9pur">
				<p class="fs1d2r">
					甜缘征集互动来开启啦！
					<i class="el-icon-arrow-left tracw180d"></i>
					<i class="el-icon-arrow-left tracw180d oy0d8"></i>
					<i class="el-icon-arrow-left tracw180d oy0d6"></i>
					<i class="el-icon-arrow-left tracw180d oy0d4"></i>
					<i class="el-icon-arrow-left tracw180d oy0d2"></i>
				</p>
			</div>
		</div>
		<ul class="fs1d5r p1r">
			<li class="pv1r">账户设置<i class="el-icon-arrow-left tracw180d fr"></i></li>
			<li class="pv1r">甜食收藏<i class="el-icon-arrow-left tracw180d fr"></i></li>
			<li class="pv1r">甜食分享<i class="el-icon-arrow-left tracw180d fr"></i></li>
			<li class="pv1r">随时即拍<i class="el-icon-arrow-left tracw180d fr"></i></li>
		</ul>
		
		
		
		<div v-show="!isLogin" class="">
			<p class="fs2r">
				<span @click="$router.push('./login')" class="">登录</span>
				<span @click="$router.push('./register')" class="">注册</span>
			</p>
		</div>
		<div class="fs1d4r">
			<el-button v-show="isLogin" @click="quitUser">退出</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		beforeRouteEnter(to,from,next){
			next(vm => {
				vm.$store.commit("setSidebar",true);
			});
		},
		beforeRouteLeave(to,from,next){
			this.$store.commit("setSidebar",false);
			next();
		},
		computed:{
			isLogin(){
				return this.$store.getters.isLogin;
			},
			isSidebarOpen(){
				return this.$store.getters.isSidebarOpen;
			}
		},
		methods:{
			quitUser(){
				this.$store.commit("setUserStatus",false);
				localStorage.setItem('login_user', "no");
			}
		}
	}
</script>

<style>
	.slider_wrap{
		padding-top: 4.4rem;
	}
</style>