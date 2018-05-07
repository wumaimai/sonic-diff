const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const token = "e172541204571d6ad6c8aadd33034092e5efa413c2e1e0ee72fd9969f7b647abd04be3968a47cec023e0a080d3a733b798878120ae54a7cf7e8661a8ee26d40f4ed4473ab844cf9ea40eec53be7f74a0915716138b4dcfaaf3b976d854aa700ba92e5560d710898ec1fa9b2798c35c0653cdcb10233c0a50ce7a64e0eee593873e9a8089fe9aabef9e21827fc2f0ed65450f00ce7cb85788b1c3b92ad41f855ea8fa020562809d80b96c9c3e2d58b47b978790983533c114d99c48fe6e231a363242c214039e835e3037160f2c930dd2d479a27151ffbc61583e3aab3bfeadf736e5a5c9c8b5144fbca10aab08f9982861a3bd1291ba010960b96d73da01b9ba4f7cd40626dde73c6fd4ce8ba3d31aa57516eeab62ac74882b57e77718b9149f4b242611b374876f7afdf646a7fb8562d11f7c0690685925449c066f1afa77e1235d88abb0075dd5e2257fb387b4787da58e22d8f0289d2284a4b7faacc6047a9c903ef8dae42505c06801f1f4f26705ee88acfc984301b7707d93fdf13bd6c697532299ae4f3bf8009f1cf6ae217101fa3c5a2874a290c9312978f8393fe34a0731f8e601c875a467b62fdccbffd49ec7f223069ea4d7c041ec5579ede43d9514b825fd7b376853948282fbd54d0f77a912afcf008d4b8bd4204f8000bf8b0a1796c75eb8c83b9fded5db5f58d5246feaa309e5";

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