const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

module.exports = function(ctx){
    let request = ctx.request;
	let headers = request.header;
    let query = request.query || {};
    //let dataDate = '1949.10.01';
    let dataResult = JSON.parse(fs.readFileSync(path.join(__dirname, '../json/one.json'),"utf-8"));
    let token = crypto.randomBytes(500).toString('hex');
    let templateFlag = 1;
    let sonicStatusArr = [
        2, //templateChange
        3, //dataUpdate
        4 //cache
    ];

    let sonicStatus = 0; //1-sonic首次 2-页面刷新 3-局部刷新 4-完全cache

    if (headers['accept-diff']=='true') {
        if (headers['template-tag']) { //有缓存的情况随机局部刷新、模板变更、完全缓存
    		var getRandomStatus = function(){
    			var sonicStatusRand = [3,3,3,3,3,4,4,2,4,4,4];
    			var index = Math.floor(Math.random() * sonicStatusRand.length);
    			return sonicStatusRand[index];
    		}
    		
            sonicStatus = sonicStatusArr[parseInt(query['sonicStatus'], 10)]? parseInt(query['sonicStatus'], 10) : getRandomStatus();
            switch(sonicStatus) {
                case 2: //模板变更 数据不变 改模板
                    // if (ctx.session.dataResult) 
                    // {
                    //     dataResult = ctx.session.dataResult;
                    // }
                    // if (ctx.cookies.get('dataResult')) {
                    //     dataResult = ctx.cookies.get('dataResult');
                    // }
                    // if (ctx.cookies.get('templateFlag')) {
                    //     templateFlag = +!parseInt(ctx.cookies.get('templateFlag'), 10);
                    // }
                    // if (ctx.cookies.get('templateFlag')) {
                    //     templateFlag = ctx.cookies.get('templateFlag');
                    // }
                    break;
                case 3://局部刷新 数据变 模板不变
                    // if (ctx.cookies.get('templateFlag')) {
                    //     templateFlag = ctx.cookies.get('templateFlag');
                    // }
                    // if (ctx.session.dataResult) 
                    // {
                    //     dataResult = ctx.session.dataResult;
                    // }
                    // if (ctx.cookies.get('dataImg')) {
                    //     dataImg = +!parseInt(ctx.cookies.get('dataImg'), 10);
                    // }
                    // if (ctx.cookies.get('templateFlag')) {
                    //     templateFlag = templateFlag;
                    // }
                    break;
                case 4:
                    // if (ctx.session.dataResult) 
                    // {
                    //     dataResult = ctx.session.dataResult;
                    // }
                    // if (ctx.cookies.get('templateFlag')) {
                    //     templateFlag = ctx.cookies.get('templateFlag');
                    // }
                    break;
            }
    	} else { //首次
            sonicStatus = 1;
        }
    }

    //ctx.session.dataResult = dataResult;
    //ctx.session.templateFlag = templateFlag;

    //ctx.cookies.set("dataResult", dataResult);
    //ctx.cookies.set("templateFlag", parseInt(templateFlag, 10));

    //console.log(ctx.session.dataResult);

    return {
        token: token,
        //dataDate: dataDate,
        dataResult: dataResult,
    	templateFlag: templateFlag,
    	sonicStatus: sonicStatus
    };
}