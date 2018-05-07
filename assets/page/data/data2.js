const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

module.exports = function(ctx){
    let token = crypto.randomBytes(500).toString('hex');
    let chinaDate = '1949.10.01';
    let templateFlag = 1;
    let dataResult = JSON.parse(fs.readFileSync(path.join(__dirname, '../json/ten.json'),"utf-8"));
    let tplsData = dataResult.tplsData;

    for(let i = 0; i < tplsData.length; i++){
        tplsData[i].token = crypto.randomBytes(500).toString('hex');
    }

    if (ctx.cookies.get('templateFlag')) {
        templateFlag = +!parseInt(ctx.cookies.get('templateFlag'), 10);
    }

    ctx.cookies.set('templateFlag',parseInt(templateFlag, 10));

    return {
        token,
        chinaDate,
        templateFlag,
        tplsData
    };
}