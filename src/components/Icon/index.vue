<template>
	<component :is="componentId" :class="className" :icon="iconValue" :src="imgSrc"></component>
</template>
<script>
	import { typeOf } from '@/utils/typeOf';
	export default {
		name: 'Icon',
		props: ['icon'],
		computed: {
			componentId() {
				if (typeOf(this.icon) == 'string' && /^el-icon/.test(this.icon)) {
					return 'i';
				}
				if (typeOf(this.icon) == 'array' && ['fas', 'fab', 'far'].includes(this.icon[0])) {
					return 'font-awesome-icon';
				}
				return 'img';
			},
			className() {
				if (typeOf(this.icon) == 'string' && /^el-icon/.test(this.icon)) {
					return this.icon;
				}
				return '';
			},
			iconValue() {
				if (typeOf(this.icon) == 'array' && ['fas', 'fab', 'far'].includes(this.icon[0])) {
					return this.icon;
				}
				return [];
			},
			imgSrc() {
				if (typeOf(this.icon) == 'string' && /^el-icon/.test(this.icon)) {
					return '';
				}
				if (typeOf(this.icon) == 'array' && ['fas', 'fab', 'far'].includes(this.icon[0])) {
					return '';
				}
				return this.icon;
			},
		},
	};
</script>
