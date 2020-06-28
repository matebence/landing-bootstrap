module.exports = app => {
    const router = require("express").Router();
    const error = require("../controllers/errors.controller");

    router.get("*", error.notFound.render);

    app.use('*', router);
};