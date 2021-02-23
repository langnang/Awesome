<template>
	<component :is="item.children ? 'el-submenu' : 'el-menu-item'" :index="item.name">
		<template slot="title">
			<Icon :icon="item.icon || 'el-icon-collection-tag'" />
			<!-- <i :class="item.icon" class="el-icon-collection-tag"></i> -->
			<span slot="title">{{ item.label }}</span>
		</template>
		<SidebarItem v-for="subItem in item.children" :key="subItem.name" :item="subItem" />
	</component>
</template>
<script>
	import Icon from '@/components/Icon';
	export default {
		name: 'SidebarItem',
		components: {
			Icon,
		},
		props: {
			item: {},
			tree: {},
			depth: {
				type: Number,
				default: 1,
			},
		},
	};
</script>
<style>
	.el-menu-item {
		/* padding: 0 10px !important; */
	}
	.el-menu-item [class^='el-icon-'],
	.el-submenu [class^='el-icon-'] {
		width: 18px;
	}
	.el-menu-item,
	.el-submenu__title,
	.el-submenu .el-menu-item {
		height: 48px;
		line-height: 48px;
	}
</style>
