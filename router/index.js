const routerConfig = require('./config');
const through2 = require('through2');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

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
		}
		else if(pathname == '/data')
		{
			try{
				let dataResult = JSON.parse(fs.readFileSync(path.join(__dirname, '../assets/page/json/ten.json'),"utf-8"));
				let tplsData = dataResult.tplsData;
				
				for(let i = 0; i < tplsData.length; i++){
					tplsData[i].token = crypto.randomBytes(500).toString('hex');
				}
				
				ctx.body = dataResult;
			} catch (e) {
				console.error(e);
			}
		}
		else {
			console.log('路由未配置', pathname);
		}
	}
};