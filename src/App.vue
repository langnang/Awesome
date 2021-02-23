<template>
	<div id="app">
		<Layout>
			<el-row :gutter="10" v-for="(label, index) in labels_list" :key="index" style="margin-left:5px;margin-right:5px;">
				<el-col :span="24" :id="label.name">
					<el-link :underline="false" :href="'#' + label.name" style="display:inline;">
						<el-breadcrumb separator=">>" style="">
							<Icon :icon="['fas', 'tags']" style="float:left;" />
							<el-breadcrumb-item v-for="(i, index_bread) in label.name.split('>>')" :key="index + '-' + index_bread">{{ i }}</el-breadcrumb-item>
						</el-breadcrumb>
					</el-link>
				</el-col>
				<el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="(item, index) in label.issues" :key="item.node_id + index">
					<el-tooltip class="item" effect="dark" :content="item.link || 'https://'" placement="bottom">
						<a :href="item.link" :underline="false" target="_blank" style="width:100%;text-decoration: none;">
							<el-card :body-style="{ padding: '6px 12px', height: '74px', backgroundColor: 'grey' }" shadow="hover">
								<el-avatar :size="50" src="https://empty" @error="errorHandler" style="float:left;margin-top:5px">
									<Icon :icon="item.logo" style="width:50px;height:50px;" />
								</el-avatar>
								<el-alert :title="item.title" :description="item.desc" style="width:calc(100% - 50px);padding:0;" :closable="false"> </el-alert>
							</el-card>
						</a>
					</el-tooltip>
				</el-col>
			</el-row>
		</Layout>
	</div>
</template>

<script>
	import Layout from './layout/index.vue';
	// import TreePanel from '@/components/TreePanel';
	import Icon from '@/components/Icon';
	import { mapGetters } from 'vuex';
	export default {
		name: 'app',
		components: {
			Layout,
			Icon,
			// TreePanel,
		},
		computed: {
			...mapGetters(['issues', 'labels_list']),
		},
		mounted() {
			this.$store.dispatch('label/getList');
			// this.$store.dispatch('issue/getList');
			// console.log(this);
		},
		methods: {
			errorHandler() {
				return true;
			},
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
		border-radius: 999px;
		filter: invert(100%);
	}
	.el-card__body {
		display: flex;
	}
	.el-alert__content {
		padding-right: 0;
	}
	.el-alert__description {
		/* margin-top: 0; */
		/* max-height: 26px; */
		max-height: 30px;
		overflow: hidden;
	}
	.el-row {
		background-color: #433333;
		border-radius: 4px;
	}
	.el-row + .el-row {
		margin-top: 20px;
	}
	[class*='el-col-'] {
		margin-top: 10px;
	}
	[class*='el-col-']:last-child {
		margin-bottom: 10px;
	}
	.el-breadcrumb {
		display: inline-table;
		font-size: 20px;
		padding: 6px;
		background-color: grey;
		border-radius: 4px;
		width: 100%;
	}
</style>
