<template>
	<span>
		<component :is="item.children ? 'el-submenu' : 'el-menu-item'" :index="item.name" v-for="item in tree" :key="item.name">
			<template slot="title">
				<i :class="item.icon" class="el-icon-collection-tag"></i>
				<span>{{ item.label }}</span>
			</template>
			<SidebarItem :tree="item.children" :depth="depth + 1" />
		</component>
	</span>
</template>
<script>
	export default {
		name: 'SidebarItem',
		props: {
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
