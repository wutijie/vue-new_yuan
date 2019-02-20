<template>
	<el-form ref="form" label-width="80px">
		<el-form-item label="甜品名">
			<el-input v-model="name"></el-input>
		</el-form-item>
		<el-form-item label="描述">
			<el-input v-model="describe"></el-input>
		</el-form-item>
		<el-form-item label="图片">
			<div class="oh w100px b1 pr">
				<input style="padding-left: 150px;" class="h100p pa" type="file" @change="handleinput" name="" id="" value="" />
				<p class="tac">更换</p>
			</div>
		</el-form-item>
		<el-form-item>
			<img class="h200px" :src="inp_file"/>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="handleadd">完成</el-button>
			<el-button @click="$router.go(-1)">取消</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				inp_file: '',
				describe: ''
			};
		},
		created() {
			this.fetchData();
		},
		methods: {
			fetchData() {
				fetch("https://wd0227110045vvxhbf.wilddogio.com/benefits/"+this.$route.params.id+".json").then(res => {
					return res.json();
				}).then(data => {
					console.log(data);
					this.name=data.name;
					this.inp_file=data.src;
					this.describe=data.describe;
				})
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			handleinput(event) {
				let that=this;
				console.log(event.target.files[0].name);
				this.tobase(event.target,function(data){
					console.log(data);
					that.inp_file = data;
				})
				
//				this.inp_file = event.target.files[0].name;
			},
			handleadd() {
				let data = {
					name:this.name,
					src:this.inp_file,
					describe:this.describe
				}
				fetch("https://wd0227110045vvxhbf.wilddogio.com/benefits/"+this.$route.params.id+".json",{
					method:"PATCH",
					headers:{
						"Content-type":"application/json"
					},
					body:JSON.stringify(data)
				}).then(res => {
					console.log(res);
				}).then(data => {
					console.log(data);
					this.$router.go(-1);
				}).catch(err => {
					console.log(err);
				})
			}
		}
	}
</script>
<style>

</style>