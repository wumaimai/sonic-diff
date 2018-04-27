const routerConfig = require('./config');
const through2 = require('through2');

module.exports = () => {
	return async function (ctx, next) {
		if (ctx.path === '/favicon.ico') return;
		let pathname = (ctx.request.url || '').split('?')[0];
		if (routerConfig[pathname]) {
			//console.log(routerConfig[pathname]);
			try {
				let tpl = require(routerConfig[pathname].template), data = {};
				if (routerConfig[pathname].data) {
					let dataFn = require(routerConfig[pathname].data);
					data = dataFn(ctx) || {};
					
				}
				ctx.body = through2();
				ctx.type = 'html';
				ctx.body.end(tpl(data));
			} catch (e) {
				console.error(e);
			}
		} else {
			console.log('路由未配置', pathname);
		}
	}
};