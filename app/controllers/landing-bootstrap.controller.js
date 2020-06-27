const mobile = require('is-mobile');

exports.home = {
    render: (req, res, next) => {
        res.render('index');
    }
};
exports.signIn = {
    redirect: (req, res, next) => {
        if (mobile()) {
            res.redirect(global.config.get('node.mobile.signin'));
        } else {
            res.redirect(global.config.get('node.desktop.signup'));
        }
    }
};
exports.signUp = {
    redirect: (req, res, next) => {
        if (mobile()) {
            res.redirect(global.config.get('node.mobile.signup'));
        } else {
            res.redirect(global.config.get('node.desktop.signup'));
        }
    }
};
exports.manage = {
    redirect: (req, res, next) => {
        res.redirect(global.config.get('node.desktop.manage'));
    }
};