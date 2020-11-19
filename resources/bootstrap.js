module.exports = {
    application: {
        name: 'landing-bootstrap'
    },
    profiles: {
        active: 'dev'
    },
    proxy: {
        default: process.env.DEFAULT_SERVER,
        mobile: process.env.MOBILE_SERVER,
        desktop: process.env.DESKTOP_SERVER,
        management: process.env.MANAGEMENT_SERVER
    },
    server: {
        port: process.env.PORT
    }
};