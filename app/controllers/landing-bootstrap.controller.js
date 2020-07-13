const mobile = require('is-mobile');

exports.home = {
    render: (req, res, next) => {
        res.render('index');
    }
};
exports.signIn = {
    redirect: (req, res, next) => {
        if (!mobile()) return res.redirect((req.protocol + '://' + req.get('host') + req.originalUrl).replace(req.get('host'), global.config.servers.desktop));
        return res.redirect((req.protocol + '://' + req.get('host') + req.originalUrl).replace(req.get('host'), global.config.servers.mobile));
    }
};
exports.signUp = {
    redirect: (req, res, next) => {
        if (!mobile()) return res.redirect((req.protocol + '://' + req.get('host') + req.originalUrl).replace(req.get('host'), global.config.servers.desktop));
        return res.redirect((req.protocol + '://' + req.get('host') + req.originalUrl).replace(req.get('host'), global.config.servers.mobile));
    }
};
exports.forgetPassword = {
    redirect: (req, res, next) => {
        if (!mobile()) return res.redirect((req.protocol + '://' + req.get('host') + req.originalUrl).replace(req.get('host'), global.config.servers.desktop));
        return res.redirect((req.protocol + '://' + req.get('host') + req.originalUrl).replace(req.get('host'), global.config.servers.mobile));
    }
};
exports.manage = {
    redirect: (req, res, next) => {
        return res.redirect((req.protocol + '://' + req.get('host') + req.originalUrl).replace(req.get('host'), global.config.servers.management));
    }
};