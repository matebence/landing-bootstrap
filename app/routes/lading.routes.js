module.exports = app => {
    const router = require('express').Router();
    const mobile = require('is-mobile');

    router.get('/', (req, res, next) => {
        res.render('index', {mobile: mobile()});
    });

    app.use('/', router);
};