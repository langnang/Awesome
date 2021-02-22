<template>
	<el-container>
		<el-aside width="220px">
			<Sidebar />
		</el-aside>
		<el-container>
			<el-header>Header</el-header>
			<el-container style="min-height:calc(100vh - 60px);">
				<el-main>
					<slot></slot>
				</el-main>
				<el-footer>Footer</el-footer>
			</el-container>
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
		background-color: #b3c0d1;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		background-color: #d3dce6;
		color: #333;
	}

	.el-main {
		color: #333;
		background-color: #2c3e50;
	}

	body > .el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>
