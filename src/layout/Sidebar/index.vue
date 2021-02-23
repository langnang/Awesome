<template>
	<el-aside class="app-aside" :width="isCollapse ? '70px' : '220px'">
		<p class="aside-title" style="">Awesome</p>
		<el-scrollbar>
			<el-menu class="aside-menu" default-active="2" background-color="#2c2e2f" text-color="#fff" active-text-color="#ffd04b" :router="true" :collapse="isCollapse">
				<SidebarItem v-for="item in labels_tree" :key="item.name" :item="item" />
			</el-menu>
		</el-scrollbar>
	</el-aside>
</template>

<script>
	import { mapGetters } from 'vuex';
	import SidebarItem from './Item';
	export default {
		components: {
			SidebarItem,
		},
		computed: {
			...mapGetters(['labels_tree', 'isCollapse']),
		},
		mounted() {
			// this.$store.dispatch('label/getList');
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
		},
	};
</script>

<style scoped>
	.el-menu {
		height: calc(100vh - 60px);
		border-right: 0;
	}
</style>
