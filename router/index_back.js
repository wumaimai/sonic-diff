const router = require('koa-router')();

router.get('/one', async (ctx) => {
    let pathname = (ctx.request.url || '').split('?')[0];
    
    // if (routerConfig[pathname]) 
    // {

    // }
    // else
    // {
    //     console.log('路由未配置!');
    // }
    //ctx.body = '我是加载一个模板的路由';
});

router.get('/ten', async (ctx) => {
    ctx.body = '我是加载十个模板的路由';
});

module.exports = router;