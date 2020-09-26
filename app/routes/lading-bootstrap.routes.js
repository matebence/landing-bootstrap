module.exports = app => {
    const {createProxyMiddleware} = require('http-proxy-middleware');
    const router = require("express").Router();
    const mobile = require('is-mobile');

    router.get("/", (req, res, next) => {
        res.render('index');
    });

    router.use("/*.*", createProxyMiddleware({
        target: 'http://localhost/',
        changeOrigin: true,
        pathRewrite: {
            [`^/`]: ''
        },
        router: function (req) {
            if (!mobile() && req.headers.referer === 'http://admin-angular:4400/') {
                return 'http://admin-angular:4400/';
            } else if (mobile()) {
                return 'http://pwa-react:4200/';
            } else {
                return 'http://web-vue:4300/';
            }
        }
    }));

    router.get("/manage", createProxyMiddleware({
        target: 'http://admin-angular:4400/',
        changeOrigin: true,
        pathRewrite: {
            [`^/`]: ''
        }
    }));

    router.get("/sign-in", createProxyMiddleware({
        target: 'http://localhost/',
        changeOrigin: true,
        pathRewrite: {
            [`^/`]: ''
        },
        router: function (req) {
            if (mobile()) {
                return 'http://pwa-react:4200/';
            } else {
                return 'http://web-vue:4300/';
            }
        }
    }));

    router.get("/sign-up", createProxyMiddleware({
        target: 'http://localhost/',
        changeOrigin: true,
        pathRewrite: {
            [`^/`]: ''
        },
        router: function (req) {
            if (mobile()) {
                return 'http://pwa-react:4200/';
            } else {
                return 'http://web-vue:4300/';
            }
        }
    }));

    router.get("/sign-up/account/:id/token/:key", createProxyMiddleware({
        target: 'http://localhost/',
        changeOrigin: true,
        pathRewrite: {
            [`^/`]: ''
        },
        router: function (req) {
            if (mobile()) {
                return 'http://pwa-react:4200/';
            } else {
                return 'http://web-vue:4300/';
            }
        }
    }));

    router.get("/forget-password", createProxyMiddleware({
        target: 'http://localhost/',
        changeOrigin: true,
        pathRewrite: {
            [`^/`]: ''
        },
        router: function (req) {
            if (mobile()) {
                return 'http://pwa-react:4200/';
            } else {
                return 'http://web-vue:4300/';
            }
        }
    }));

    router.get("/forget-password/account/:id/token/:key", createProxyMiddleware({
        target: 'http://localhost/',
        changeOrigin: true,
        pathRewrite: {
            [`^/`]: ''
        },
        router: function (req) {
            if (mobile()) {
                return 'http://pwa-react:4200/';
            } else {
                return 'http://web-vue:4300/';
            }
        }
    }));

    app.use('/', router);
};