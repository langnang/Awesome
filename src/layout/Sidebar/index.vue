<template>
	<div class="app-container">
		<h3 style="text-align:center;">Awesome</h3>
		<el-menu
			default-active="2"
			class="el-menu-vertical-demo"
			@open="handleOpen"
			@close="handleClose"
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b"
			:router="true"
		>
			<SidebarItem :tree="labels_tree" />
		</el-menu>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import SidebarItem from './Item';
	export default {
		components: {
			SidebarItem,
		},
		computed: {
			...mapGetters(['labels_tree']),
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
		min-height: calc(100vh - 60px);
	}
</style>
