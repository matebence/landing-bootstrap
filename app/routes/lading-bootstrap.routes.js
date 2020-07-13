module.exports = app => {
    const router = require("express").Router();
    const landingBootstrap = require("../controllers/landing-bootstrap.controller");

    router.get("/", landingBootstrap.home.render);

    router.get("/manage", landingBootstrap.manage.redirect);

    router.get("/sign-in", landingBootstrap.signIn.redirect);

    router.get("/sign-up", landingBootstrap.signUp.redirect);

    router.get("/sign-up/account/:id/token/:key", landingBootstrap.signUp.redirect);

    router.get("/forget-password", landingBootstrap.forgetPassword.redirect);

    router.get("/forget-password/account/:id/token/:key", landingBootstrap.forgetPassword.redirect);

    app.use('/', router);
};