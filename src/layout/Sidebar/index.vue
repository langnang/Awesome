<template>
	<el-aside class="app-aside" :width="isCollapse ? '70px' : '220px'">
		<div class="aside-title" style="">
			<el-avatar style="margin-top:10px;font-size:36px;">A</el-avatar>
			<span v-if="!isCollapse" class="aside-title__title" style="vertical-align:top;margin-left:5px;">Awesome</span>
		</div>
		<el-scrollbar style="height:calc(100vh - 60px)">
			<el-menu
				class="aside-menu"
				default-active="2"
				background-color="#2c2e2f"
				text-color="#fff"
				active-text-color="#ffd04b"
				:collapse="isCollapse"
				@open="handleOpen"
				@select="handleSelect"
			>
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
			handleOpen(key) {
				window.location.hash = '#' + key;
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			handleSelect(key) {
				window.location.hash = '#' + key;
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
