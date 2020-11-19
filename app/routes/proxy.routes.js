module.exports = app => {
    const {createProxyMiddleware} = require('http-proxy-middleware');
    const router = require('express').Router();
    const mobile = require('is-mobile');

    router.use('/**', createProxyMiddleware({
            target: global.config.proxy.default,
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                [`^/`]: ''
            },
            router: function (req) {
                if (!mobile() && req.originalUrl.split('/').includes('manage')) {
                    return global.config.proxy.management;
                } else if (!mobile() && req.originalUrl.split('/').includes('desktop')) {
                    return global.config.proxy.desktop;
                } else {
                    return global.config.proxy.mobile;
                }
            }
        }
    ));

    app.use('/', router);
};