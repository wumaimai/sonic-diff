const path = require('path');

module.exports = {
    '/tpl1' : {
        template: path.resolve(__dirname, '../assets/page/tpls/tpls1.js'),
        data: path.resolve(__dirname, '../assets/page/data/data1.js')
    },
    '/tpl2' : {
        template: path.resolve(__dirname, '../assets/page/template2.js'),
        data: path.resolve(__dirname, '../assets/page/data2.js')
    },
    '/tpl3' : {
        template: path.resolve(__dirname, '../assets/page/template3.js'),
        data: path.resolve(__dirname, '../assets/page/data3.js')
    }
}