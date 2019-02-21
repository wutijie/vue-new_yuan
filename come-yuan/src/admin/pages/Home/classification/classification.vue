<template>
	
	<el-container class="h100p">
		<el-header class="pr">
			<el-row class="centerv right">
				<el-button @click="handleAdd()" class="fr" type="primary">添加</el-button>
			</el-row>
		</el-header>
		<el-main class="h100p" style="padding: 0;">
			<el-table height="100%" :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
				<el-table-column label="分类名" prop="name">
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
		</el-main>
		<el-footer class="pr">
			<el-pagination class="center" background layout="prev, pager, next, jumper" :total="total" :page-size="pagesize" @current-change="handleCurrentChange">
			</el-pagination>
		</el-footer>
	</el-container>
	
</template>

<script>
	export default {
		data() {
			return {
				search: '',
				tableData: [],
				tableDataAll: [],
				total: 0,
				pagesize: 2,
				reallySize: 0
			}
		},
		created() {
			this.fetchData();
		},
		methods: {
			fetchData() {
				fetch("https://wd0227110045vvxhbf.wilddogio.com/classification.json").then(res => {
					return res.json();
				}).then(data => {
					console.log(data);
					for(let i in data) {
						this.total++;
						data[i].id=i;
						console.log(data[i])
						this.tableDataAll.push(data[i]);
					}
					if(this.total>this.pagesize){
						this.reallySize = this.pagesize;
					}else{
						this.reallySize = this.total;
					}
					for(let i = 0; i < this.reallySize; i++) {
						this.tableData.push(this.tableDataAll[i]);
					}
					console.log(this.tableData);
				})
			},
			handleCurrentChange(val) {
//     			console.log(`当前页: ${val}`);
				if(this.total>this.pagesize){
					this.reallySize = this.pagesize;
				}else{
					this.reallySize = this.total;
				}
				this.tableData = [];
				for(let i = (val - 1) * this.reallySize; i < this.reallySize * val; i++) {
					this.tableData.push(this.tableDataAll[i]);
				}
			},
			handleAdd() {
				this.$router.push("/admin/admin_home_classification_add");
			},
			handleEdit(index, row) {
				console.log(index, row);
				this.$router.push({
					name: "admin_admin_home_classification_editLink",
					params:{
						id:row.id
					}
				});
			},
			handleDelete(index, row) {
				console.log(index, row);
				fetch("https://wd0227110045vvxhbf.wilddogio.com/classification/"+row.id+"/.json",{
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