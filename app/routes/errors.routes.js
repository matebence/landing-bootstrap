module.exports = app => {
    const router = require("express").Router();

    router.get("*", (req, res, next) => {
        res.render('error');
    });

    app.use('*', router);
};