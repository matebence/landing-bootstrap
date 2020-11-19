module.exports = app => {
    const {createProxyMiddleware} = require('http-proxy-middleware');
    const router = require('express').Router();

    router.use('/**', createProxyMiddleware({
            target: global.config.proxy.default,
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                [`^/`]: ''
            },
            router: function (req) {
                if (req.originalUrl.split('/').includes('manage')) {
                    return global.config.proxy.management;
                } else if (req.originalUrl.split('/').includes('desktop')) {
                    return global.config.proxy.desktop;
                } else {
                    return global.config.proxy.mobile;
                }
            },
            onError: function (err, req, res) {
                res.render('error');
            }
        }
    ));

    app.use('/', router);
};