const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

module.exports = function(ctx){
    let request = ctx.request;
	let headers = request.header;
    let query = request.query || {};
    let dataResult = JSON.parse(fs.readFileSync(path.join(__dirname, '../json/ten.json'),"utf-8"));
    let chinaDate = '1949.10.01';
    let tplsData = dataResult.tplsData;

    for(let i = 0; i < tplsData.length; i++){
        tplsData[i].token = crypto.randomBytes(500).toString('hex');
    }

    return {
        tplsData,
        chinaDate
    }
}