<template>
	<transition name="register_fade">
		<section class="fs1d5r lh2r full flex-grail register">
			<headers class="bgcnone" title=""></headers>
			<main class="register_mains pv4r ph3r bsbb">
				<form @submit.prevent="user_register" class="bgcwhite h100p br6px pv4r ph3r bsbb fs1d2r">
					<p class="tac fs1d9r mb1r">注册</p>
					<p>
						<input type="tel" :class="{act_border : phone_show}" @focus="phone_show = false" v-model="user_mesg.phone" placeholder="请输入手机号" />
						<span v-show="phone_show">{{error_msg_phone}}</span>
					</p>
					<p>
						<input type="text" :class="{act_border : password_show}" @focus="password_show = false" v-model="user_mesg.pasword" placeholder="请输入密码" />
						<span v-show="password_show">{{error_msg_password}}</span>
					</p>
					<p>
						<input type="text" :class="{act_border : confirm_show}" @focus="confirm_show = false" v-model="user_mesg.confirm_password" placeholder="请确认密码" />
						<span v-show="confirm_show">{{error_msg_confirm}}</span>
					</p>
					<div class="">
						<p class="box">
							<input type="number" :class="{act_border : code_show}" @focus="code_show = false" v-model="user_mesg.code" class="item" placeholder="验证码" />
							<button type="button" @click="sendCode" class="item nine999 mt2r ml5r br2r b1">{{count_down}}</button>
						</p>
						<span v-show="code_show">{{error_msg_code}}</span>
					</div>
					<div class="dv mt4r">
						<p class="">
							<button type="submit" class="btn1 white">立即注册</button>
						</p>
						<p class="mt2r">
							<button type="button" class="b1 nine999" @click="$router.replace('/login')">已有账户，直接登录</button>
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
				phone_code:0,
				times:null,
				act_cls:'act_border',
				count_down:'发送',
				phone_show:false,
				password_show:false,
				confirm_show:false,
				code_show:false,
				error_msg_phone:'',
				error_msg_password:'',
				error_msg_confirm:'',
				error_msg_code:''
			}
		},
		components:{
			Headers
		},
		computed:{
			
		},
		beforeRouteLeave(to,from,next){
			clearInterval(this.times);
			next();
		},
		methods:{
			user_register(){
				const data_msg = {
					"phone": this.user_mesg.phone,
			 		"pasword": this.user_mesg.pasword,
			 		"code": this.user_mesg.code
				}
				
				const _this = this;
				var isGo = false;
				
				if(this.$store.getters.current_user.length>0){
					var local_msg = JSON.parse(this.$store.getters.current_user);
				}else{
					var local_msg = this.$store.getters.current_user;
				}
				
				local_msg.forEach((val,index) => {
					if(data_msg.phone == val.phone){
						_this.phone_show = true;
						_this.error_msg_phone = "手机号码已被注册";
						isGo = true;
					}
				});
				
				if(isGo){
					return;
				}
				
				if(!this.isPhone() || !this.isPassword() || !this.isConfirm() || !this.isCode()){
					return;
				}
				
				local_msg.push(data_msg);
				localStorage.setItem('key', JSON.stringify(local_msg));
				this.$store.commit("setUser", JSON.stringify(local_msg));
				this.$router.push('/login');
			},
			sendCode(){
				const _this = this;
				if(this.count_down == "重新发送" || this.count_down == "发送"){
					this.phone_code = parseInt(Math.random()*8999+1000);
					var del_num = 30;
					this.times = setInterval(function(){
						del_num--;
						if(del_num<=0){
							clearInterval(_this.times);
							_this.count_down = "重新发送";
						}else{
							_this.count_down = del_num;
						}
						console.log(del_num);
					},1000);
					this.$message({
						message: _this.phone_code,
						type: 'success',
						duration: 5000
					});
				}
			},
			isPhone(){
				const re = /^1(3|4|5|7|8)\d{9}$/;
				if( !this.user_mesg.phone ){
					this.phone_show = true;
					this.error_msg_phone = "请输入手机号!!!";
					return false;
				}else if( !(re.test(this.user_mesg.phone)) ){
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
				}else{
					this.password_show = false;
					return true;
				}
			},
			isConfirm(){
				if( !this.user_mesg.confirm_password ){
					this.confirm_show = true;
					this.error_msg_confirm = "请输入确认密码!!!";
					return false;
				}else if( this.user_mesg.confirm_password != this.user_mesg.pasword ){
					this.confirm_show = true;
					this.error_msg_confirm = "两次输入的密码不一致!!!";
					return false;
				}else{
					this.confirm_show = false;
					return true;
				}
			},
			isCode(){
				if( !this.user_mesg.code ){
					this.code_show = true;
					this.error_msg_code = "请输入验证码!!!";
					return false;
				}else if( this.user_mesg.code != this.phone_code ){
					this.code_show = true;
					this.error_msg_code = "验证码不正确!!!";
					return false;
				}else{
					this.code_show = false;
					return true;
				}
			}
		}
	}
</script>

<style>
	.register{
		background: url(../../assets/images/yuan_01.jpg) no-repeat!important;
		background-size: 100% 100%!important;
	}
	.register_mains input{
		width: 100%;
		color: #999999;
		padding: 0.8rem 0.3rem;
		border-bottom: 1px solid #E5E5E5;
		margin-top: 1rem;
	}
	.register_mains span{
		position: absolute;
		font-size: 1rem;
		color: #FF0000;
		padding-left: 0.3rem;
	}
	.register_mains .dv p{
		padding: 0 1rem;
	}
	.register_mains .dv button{
		width: 100%;
		border-radius: 2rem;
		padding: 0.8rem 0;
		font-size: 1.4rem;
	}
	.register_mains .dv .btn1{
		background: -webkit-linear-gradient(left bottom, #9cc5fc , #a2a2fc); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(top right, #9cc5fc, #a2a2fc); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(top right, #9cc5fc, #a2a2fc); /* Firefox 3.6 - 15 */
		background: linear-gradient(to top right, #9cc5fc , #a2a2fc); /* 标准的语法 */
	}
	.register_mains .act_border{
		border-bottom: 1px solid red;
	}
	.register_fade-enter-active, .register_fade-leave-active {
		opacity: 1;
		transition: all 1s;
	}
	.register_fade-enter, .register_fade-leave-to {
		opacity: 0;
		transition: all 1s;
	}
</style>