<template>
	<el-header class="app-header">
		<i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" style="font-size:38px;line-height:60px" @click="$store.dispatch('app/toggleSidebar')"></i>
		<el-button type="danger" icon="el-icon-delete" circle></el-button>
	</el-header>
</template>
<script>
	import { mapGetters } from 'vuex';
	export default {
		name: 'LayoutHeader',
		computed: {
			...mapGetters(['isCollapse']),
		},
	};
</script>
