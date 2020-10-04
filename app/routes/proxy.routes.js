module.exports = app => {
    const { clientRouter, adminRouter, assetsRouter } = require('../proxys/proxy.config');
    const {createProxyMiddleware} = require('http-proxy-middleware');
    const router = require("express").Router();

    router.use("/*.*", createProxyMiddleware(assetsRouter()));

    router.get("/manage", createProxyMiddleware(adminRouter()));

    router.get("/sign-in", createProxyMiddleware(clientRouter()));

    router.get("/sign-up", createProxyMiddleware(clientRouter()));

    router.get("/sign-up/account/:id/token/:key", createProxyMiddleware(clientRouter()));

    router.get("/forget-password", createProxyMiddleware(clientRouter()));

    router.get("/forget-password/account/:id/token/:key", createProxyMiddleware(clientRouter()));

    app.use('/', router);
};