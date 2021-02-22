<template>
	<div id="app">
		<el-row>
			<el-col :span="6" v-for="item in issues" :key="item.node_id" :style="{ margin: '10px 0' }">
				<el-tooltip class="item" effect="dark" :content="item.params.link" placement="bottom">
					<el-link type="primary" :href="item.params.link" :underline="false" target="_blank" :style="{ width: '100%' }">
						<el-card :body-style="{ padding: '6px 12px' }" shadow="hover">
							<el-row>
								<el-col :span="6">
									<img :src="item.params.logo" style="width:100%;" />
								</el-col>
								<el-col :span="18">
									<h3>{{ item.title }}</h3>
									<span>{{ item.params.desc }}</span>
								</el-col>
							</el-row>
						</el-card>
					</el-link>
				</el-tooltip>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	// import Layout from './layout/index.vue';

	import { mapGetters } from 'vuex';
	export default {
		name: 'app',
		components: {
			// Layout,
		},
		computed: {
			...mapGetters(['issues']),
		},
		mounted() {
			this.$store.dispatch('issue/getList');
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
		background: #2c3e50;
		min-height: 100vh;
	}
</style>
