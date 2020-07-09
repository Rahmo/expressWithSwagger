"use strict";
// Node Modules
const express = require("express");
const router = express.Router();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

///**
//  * @swagger
//  * path:
//  *  /books/:
//  *    get:
//  *      summary: get books data f
//  *      security:    #if you want to use security header for this request
//  *        - basicAuth: []
//  *      tags: [Books]
//  *      parameters:
//  *        - in: query
//  *          name: param1
//  *          required: true
//  *          type: string
//  *          minimum: 1
//  *          description: Parameter description in Markdown.
//  *      responses:
//  *        "200":
//  *          content:
//  *            application/json:
//  */


let users = [];
/**
 * @swagger
 * tags:
 *   name: Profiles
 *   description: User management
 */

/**
 * @swagger
 * path:ss
 *  /users/:
 *    post:
 *      summary: Create a new user
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "200":
 *          description: A user schema
 *          content:
 *            application/json:
 */
router.post("/users", (req, res, next) => {
    const { email, name } = req.body;
    users.push({name: name , email:email})
    res.json(users);
});

/**
 * @swagger
 * path:
 *  /users/:
 *    get:
 *      summary: Get all users
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: An array of users
 *          content:
 *            application/json:
 */
router.get("/users", (req, res, next) => {
    const userOne = {name: 'rahmo', email: 'Rahmo.alzahrani'};
    const userTwo = {name: 'nawaf', email: 'nuno.f'};
    res.json({ userOne, userTwo });
});

// Swagger set up
const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "a title",
            version: "1.0.0",
            description:
                "",
            license: {
                name: "MIT",
            },
            contact: {
                name: "Swagger",
                url: "https://swagger.io",
                email: "anEmail"
            }
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1"
            }
        ]
    },
    apis: ["./Routes/index.js"]
};
const specs = swaggerJsdoc(options);
router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(specs, { explorer: true }));

// catch 404 and forward to error handler
router.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Error Handler
router.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

module.exports = router;
