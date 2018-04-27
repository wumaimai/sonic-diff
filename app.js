const Koa = require('koa');
const app = new Koa();
const compress = require('./middleware/compress');
const router = require('./router');
const session = require('koa-session');
app.keys = ['some secret hurr'];

const CONFIG = {
    key: 'koa:sess',   //cookie key (default is koa:sess)
    maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
    overwrite: true,  //是否可以overwrite    (默认default true)
    httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
    signed: true,   //签名默认true
    rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
    renew: false,  //(boolean) renew session when session is nearly expired,
 };
app.use(session(CONFIG, app));

app.use(compress());

app.use(router());

const server = app.listen(2222, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});