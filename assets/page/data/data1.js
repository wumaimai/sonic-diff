const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

module.exports = function(ctx){
    let request = ctx.request;
	let headers = request.header;
    let query = request.query || {};
    let dataDate = '1949.10.01';
    let dataResult = JSON.parse(fs.readFileSync(path.join(__dirname, '../json/ten.json'),"utf-8"));
    let token = crypto.randomBytes(500).toString('hex');
    let templateFlag = 1;
    let sonicStatusArr = [
        2, //templateChange
        3, //dataUpdate
        4 //cache
    ];

    let sonicStatus = 0; //1-sonic首次 2-页面刷新 3-局部刷新 4-完全cache

    let tplsData = dataResult.tplsData;

    for(let i = 0; i < tplsData.length; i++){
        tplsData[i].token = crypto.randomBytes(500).toString('hex');
    }

    return {
        //token: token,
        dataDate: dataDate
        //dataResult: dataResult,
    	//templateFlag: templateFlag,
    	//sonicStatus: sonicStatus
    };
}