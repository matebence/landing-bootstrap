module.exports = app => {
    const router = require("express").Router();
    const landingBootstrap = require("../controllers/landing-bootstrap.controller");

    router.get("/", landingBootstrap.home.render);

    router.get("/manage", landingBootstrap.manage.redirect);

    router.get("/signin", landingBootstrap.signIn.redirect);

    router.get("/signup", landingBootstrap.signUp.redirect);

    app.use('/', router);
};