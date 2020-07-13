module.exports = {
    application: {
        name: "landing-bootstrap"
    },
    cloud: {
        config: {
            uri: "http://192.168.99.100:8888",
            username: "app-blesk-config-server",
            password: "b8199f18ee07292f39f5d9213cf493e8"
        }
    },
    profiles: {
        active: "dev"
    },
    servers: {
        mobile: process.env.MOBILE_SERVER,
        desktop: process.env.DESKTOP_SERVER,
        management: process.env.MANAGEMENT_SERVER
    },
    server: {
        port: process.env.PORT
    }
};