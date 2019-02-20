<template>
	<div class="">
		<el-row>
			<el-button @click="handleAdd()" class="fr mb10px" type="primary">添加</el-button>
		</el-row>
		<el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
			<el-table-column label="描述" prop="name">
			</el-table-column>
			<el-table-column align="right">
				<template slot="header" slot-scope="scope">
					<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
				</template>
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [],
				search: ''
			}
		},
		created() {
			this.fetchData();
		},
		methods: {
			fetchData() {
				fetch("https://wd0227110045vvxhbf.wilddogio.com/banner.json").then(res => {
					console.log(res);
					return res.json();
				}).then(data => {
					console.log(data);
					/*data.forEach((post) => {
						console.log(post)
					})*/
					for(let i in data) {
						data[i].id=i;
						console.log(data[i])
						this.tableData.push(data[i]);
					}
//					this.tableData = data;
					console.log(this.tableData);
				})
			},
			handleAdd() {
				this.$router.push("/admin/admin_home_swiper_add");
			},
			handleEdit(index, row) {
				console.log(index, row);
				this.$router.push({
					name: "admin_admin_home_swiper_editLink",
					params:{
						id:row.id
					}
				});
			},
			handleDelete(index, row) {
				console.log(index, row);
				fetch("https://wd0227110045vvxhbf.wilddogio.com/banner/"+row.id+"/.json",{
					method:"DELETE",
					headers:{
						"Content-type":"application/json"
					}
				}).then(res => {
					res.json();
				}).then(data => {
					console.log(data);
					this.tableData=[];
					this.fetchData();
				}).catch(err => {
					console.log(err);
				})
			}
		},
	}
</script>

<style>

</style>