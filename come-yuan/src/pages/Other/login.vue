<template>
	<transition name="login_fade">
		<section class="fs1d5r lh2r full flex-grail login">
			<headers class="bgcnone" title=""></headers>
			<main class="login_mains pv4r ph3r bsbb">
				<form @submit.prevent="user_login" class="bgcwhite h100p br6px pv4r ph3r bsbb fs1d2r">
					<p class="tac fs1d9r mb1r">登录</p>
					<p>
						<input type="tel" :class="{act_border : phone_show}" @focus="phone_show = false" v-model="user_mesg.phone" placeholder="请输入手机号" />
						<span v-show="phone_show">{{error_msg_phone}}</span>
					</p>
					<p>
						<input type="text" :class="{act_border : password_show}" @focus="password_show = false" v-model="user_mesg.pasword" placeholder="请输入密码" />
						<span v-show="password_show">{{error_msg_password}}</span>
					</p>
					<div class="mt2r">
						<input type="checkbox" id="remember_pas" />
						<label for="remember_pas">记住密码</label>
					</div>
					<div class="dv mt4r">
						<p class="">
							<button type="submit" class="btn1 white">立即登录</button>
						</p>
						<p class="mt2r">
							<button type="button" class="b1 nine999" @click="$router.replace('/register')">立即注册</button>
						</p>
					</div>
				</form>
			</main>
		</section>
	</transition>
</template>

<script>
	import Headers from '../../components/header'
	export default {
		data(){
			return {
				user_mesg:{},
				ishave: '',
				phone_show: false,
				password_show: false,
				error_msg_phone: '',
				error_msg_password: ''
			}
		},
		components:{
			Headers
		},
		computed:{
			current_user(){
				return this.$store.getters.current_user;
			}
		},
		methods:{
			user_login(){
				var uermsg = JSON.parse(this.$store.state.user.current_user);
				
				if(this.ishave == null){
					this.$message({
						message: "您还没有注册过",
						type: 'success',
						duration: 3000
					});
				}else{
					
					uermsg.forEach((val,index) => {
						if(this.user_mesg.phone == val.phone){
							this.ishave = val;
						}
					});
					
					if( !this.isPhone() || !this.isPassword() ){
						return;
					}
					localStorage.setItem('login_user', "yes");
					this.$store.commit("setUserStatus",true);
					this.$router.push('/home');
				}
			},
			isPhone(){
				if( !this.user_mesg.phone ){
					this.phone_show = true;
					this.error_msg_phone = "请输入手机号!!!";
					return false;
				}else if( this.user_mesg.phone != this.ishave.phone ){
					this.phone_show = true;
					this.error_msg_phone = "手机号码有误，请重填!!!";
					return false;
				}else{
					this.phone_show = false;
			    	return true;
				}
			},
			isPassword(){
				if( !this.user_mesg.pasword ){
					this.password_show = true;
					this.error_msg_password = "请输入密码!!!";
					return false;
				}else if( this.user_mesg.pasword != this.ishave.pasword ){
					this.password_show = true;
					this.error_msg_password = "密码不正确!!!";
					return false;
				}else{
					this.password_show = false;
			    	return true;
				}
			}
		}
		
	}
</script>

<style>
	.login{
		background: url(../../assets/images/yuan_01.jpg) no-repeat!important;
		background-size: 100% 100%!important;
	}
	.login_mains p input{
		width: 100%;
		color: #999999;
		padding: 0.8rem 0.3rem;
		border-bottom: 1px solid #E5E5E5;
		margin-top: 1rem;
	}
	.login_mains input[type=checkbox]{
		width: 1rem;
		height: 1rem;
		border: 1px solid #CCCCCC;
		border-radius: 1rem;
		vertical-align: text-top;
	}
	.login_mains input[type=checkbox]:checked{
		background: url(../../assets/images/login_remeber.png);
		border-bottom: 1px solid transparent;
		background-size: 100% 100%;
	}
	.login_mains span{
		position: absolute;
		font-size: 1rem;
		color: #FF0000;
		padding-left: 0.3rem;
	}
	.login_mains .dv p{
		padding: 0 1rem;
	}
	.login_mains .dv button{
		width: 100%;
		border-radius: 2rem;
		padding: 0.8rem 0;
		font-size: 1.4rem;
	}
	.login_mains .dv .btn1{
		background: -webkit-linear-gradient(left bottom, #9cc5fc , #a2a2fc); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(top right, #9cc5fc, #a2a2fc); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(top right, #9cc5fc, #a2a2fc); /* Firefox 3.6 - 15 */
		background: linear-gradient(to top right, #9cc5fc , #a2a2fc); /* 标准的语法 */
	}
	.login_mains .act_border{
		border-bottom: 1px solid red;
	}
	.login_fade-enter-active, .login_fade-leave-active {
		opacity: 1;
		transition: all 1s;
	}
	.login_fade-enter, .login_fade-leave-to {
		opacity: 0;
		transition: all 1s;
	}
</style>