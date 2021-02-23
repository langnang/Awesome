<template>
	<el-container>
		<Sidebar />
		<el-container>
			<el-header class="app-header">
				<i
					:class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
					style="font-size:38px;line-height:60px;filter: invert(100%);"
					@click="$store.dispatch('app/toggleSidebar')"
				></i>
				<el-form :inline="true" style="float:right;margin-top:10px">
					<el-form-item>
						<el-button icon="el-icon-setting" circle size="small"></el-button>
					</el-form-item>
				</el-form>
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
	import { mapGetters } from 'vuex';
	import Sidebar from './Sidebar';
	export default {
		name: 'Layout',
		components: {
			Sidebar,
		},
		data() {
			return {
				form: {
					radio1: '上海',
				},
			};
		},
		computed: {
			...mapGetters(['isCollapse']),
		},
	};
</script>

<style>
	.el-header,
	.el-footer {
		background-color: #433333;
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
		background-color: #261f1f;
	}
	.el-scrollbar__wrap {
		overflow-x: hidden;
	}
</style>
