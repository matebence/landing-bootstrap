const mobile = require('is-mobile');

exports.clientRouter = () => {
    return {
        target: global.config.proxy.default,
        changeOrigin: true,
        pathRewrite: {
            [`^/`]: ''
        },
        router: function (req) {
            if (mobile()) {
                return global.config.proxy.mobile;
            } else {
                return global.config.proxy.desktop;
            }
        }
    };
};

exports.adminRouter = () => {
    return {
        target: global.config.proxy.management,
        changeOrigin: true,
        pathRewrite: {
            [`^/`]: ''
        }
    }
};

exports.assetsRouter = () => {
    return {
        target: global.config.proxy.default,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            [`^/`]: ''
        },
        router: function (req) {
            if (!mobile() && req.headers.referer === global.config.proxy.management) {
                return global.config.proxy.management;
            } else if (mobile()) {
                return global.config.proxy.mobile;
            } else {
                return global.config.proxy.desktop;
            }
        }
    }
};