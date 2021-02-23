<template>
	<el-container>
		<Sidebar />
		<el-container>
			<el-header class="app-header">
				<i class="el-icon-s-fold" style="font-size:38px;line-height:60px"></i>
			</el-header>
			<el-scrollbar style="height:calc(100vh - 60px);">
				<el-container style="min-height:calc(100vh - 60px);">
					<el-main>
						<slot class="el-main"></slot>
					</el-main>
					<el-footer class="app-footer">Footer</el-footer>
				</el-container>
			</el-scrollbar>
		</el-container>
	</el-container>
</template>

<script>
	import Sidebar from './Sidebar';
	export default {
		name: 'Layout',
		components: {
			Sidebar,
		},
	};
</script>

<style>
	.el-header,
	.el-footer {
		background-color: #ffffff;
		color: #fff;
		height: 60px;
		line-height: 60px;
	}

	.el-aside {
		background-color: #2c2e2f;
		color: #333;
	}

	.el-main {
		color: #333;
		background-color: #ffffff;
	}
</style>
