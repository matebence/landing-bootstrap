module.exports = app => {
    const router = require("express").Router();

    router.get("/", (req, res, next) => {
        res.render('index');
    });

    app.use('/', router);
};