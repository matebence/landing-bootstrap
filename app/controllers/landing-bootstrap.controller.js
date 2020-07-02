const mobile = require('is-mobile');

exports.home = {
    render: (req, res, next) => {
        res.render('index');
    }
};
exports.signIn = {
    redirect: (req, res, next) => {
        if (!mobile()) res.redirect((req.protocol + '://' + req.get('host') + req.originalUrl).replace(req.get('host'), global.config.get('node.mobile.host')));
        res.redirect((req.protocol + '://' + req.get('host') + req.originalUrl).replace(req.get('host'), global.config.get('node.desktop.host')));
    }
};
exports.signUp = {
    redirect: (req, res, next) => {
        if (!mobile()) res.redirect((req.protocol + '://' + req.get('host') + req.originalUrl).replace(req.get('host'), global.config.get('node.mobile.host')));
        res.redirect((req.protocol + '://' + req.get('host') + req.originalUrl).replace(req.get('host'), global.config.get('node.desktop.host')));
    }
};
exports.forgetPassword = {
    redirect: (req, res, next) => {
        if (!mobile()) res.redirect((req.protocol + '://' + req.get('host') + req.originalUrl).replace(req.get('host'), global.config.get('node.mobile.host')));
        res.redirect((req.protocol + '://' + req.get('host') + req.originalUrl).replace(req.get('host'), global.config.get('node.desktop.host')));
    }
};
exports.manage = {
    redirect: (req, res, next) => {
        res.redirect((req.protocol + '://' + req.get('host') + req.originalUrl).replace(req.get('host'), global.config.get('node.management.host')));
    }
};