const Koa = require('koa');
const app = new Koa();
const compress = require('./middleware/compress');
const router = require('./router');

app.use(compress());

app.use(router());

const server = app.listen(2222, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});