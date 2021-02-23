const path = require('path');
const defaultSettings = require('./src/settings.js');
module.exports = {
	// 部署应用包时的基本 URL
	publicPath: process.env.NODE_ENV === 'production' ? '/Awesome/' : '/',

	// 生成的生产环境构建文件的目录
	outputDir: 'dist',

	// assetsDir: "", // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
	// indexPath: "index.html", // 指定生成的 index.html 的输出路径
	// filenameHashing: true, // 文件名哈希
	// pages: {}, // 在 multi-page 模式下构建应用
	// 所有 webpack-dev-server 的选项都支持
	devServer: {
		// port: 9100, // 自定义端口
		// 将 API 请求代理到 API 服务器
		proxy: {
			'/github-api': {
				target: 'https://api.github.com/',
				pathRewrite: {
					'^/github-api': '',
				},
			},
		},
		before: require('./mock/mock-server.js'),
	},

	chainWebpack: (config) => {
		config.plugin('html').tap((args) => {
			args[0].title = 'Awesome'; // 自定义标题
			return args;
		});
	},

	// pluginOptions: {
	// 	i18n: {
	// 		locale: 'zh-CN',
	// 		fallbackLocale: 'zh-CN',
	// 		localeDir: 'locales',
	// 		enableInSFC: false,
	// 	},
	// },
};
