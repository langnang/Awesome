<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right"> </el-breadcrumb>
		<el-breadcrumb-item v-for="(item, index) in tree" :key="index">
			{{ item.name }}
			<component :is="'TreePanel'" :tree="item.children" />
		</el-breadcrumb-item>
	</div>
</template>

<script>
	export default {
		name: 'TreePanel',
		props: {
			tree: {},
		},
	};
</script>

<style lang="scss"></style>
