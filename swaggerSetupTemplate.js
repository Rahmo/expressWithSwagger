exports.swaggerSetup = {
    swaggerDefinition: {
        openapi: '3.0.0',
        components: {
            securitySchemes: { //to use authorization header (basic - bearer)
                basicAuth: {
                    type: 'http',
                    scheme: 'basic',
                },
            },
        },
        info: {
            title: 'my APP SWAGGER API',
            version: '1.0.0',
            description:
                '',
        },
        servers: [
            {
                url: 'http://localhost:8080/api/',
            },
            {
                url: 'url2',
            },
        ],
    },
    apis: ['./server/api.js', './server/controllers/**/*.js'],
};
