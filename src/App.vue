<template>
	<div id="app">
		<Layout>
			<el-row :gutter="20" v-for="(label, index) in labels_list" :key="index" style="margin-left:10px;margin-right:10px;">
				<el-col :span="24">
					<el-link :underline="false" href="#">
						<el-breadcrumb separator=">>" style="display:inline-table;font-size:20px;padding:6px;background-color: white;border-radius: 999px;">
							<el-breadcrumb-item v-for="(i, index_bread) in label.name.split('>>')" :key="index + '-' + index_bread">{{ i }}</el-breadcrumb-item>
						</el-breadcrumb>
					</el-link>
				</el-col>
				<el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-for="item in label.issues" :key="item.node_id" :style="{ margin: '10px 0' }">
					<el-tooltip class="item" effect="dark" :content="item.link" placement="bottom">
						<a :href="item.link" :underline="false" target="_blank" style="width:100%;text-decoration: none;">
							<el-card :body-style="{ padding: '6px 12px' }" shadow="hover">
								<el-row>
									<el-col :span="6" style="border-radius:50%;">
										<img :src="item.logo" style="width:100%;" />
									</el-col>
									<el-col :span="18">
										<h3>{{ item.title }}</h3>
										<span>{{ item.desc }}</span>
									</el-col>
								</el-row>
							</el-card>
						</a>
					</el-tooltip>
				</el-col>
			</el-row>
		</Layout>
		<!-- <TreePanel :tree="labels" /> -->
	</div>
</template>

<script>
	import Layout from './layout/index.vue';
	// import TreePanel from '@/components/TreePanel';
	import { mapGetters } from 'vuex';
	export default {
		name: 'app',
		components: {
			Layout,
			// TreePanel,
		},
		computed: {
			...mapGetters(['issues', 'labels_list']),
		},
		mounted() {
			this.$store.dispatch('label/getList');
			// this.$store.dispatch('issue/getList');
		},
	};
</script>

<style>
	body {
		padding: 0;
		margin: 0;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	.el-breadcrumb__inner {
		padding: 3px 8px;
		color: #606266;
		background-color: white;
		border-radius: 999px;
	}
</style>
