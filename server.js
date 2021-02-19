const express = require("express");
const app = express();
// set the view engine to ejs
//const swaggerJsDoc = require('swagger-jsdoc');
//const swaggerUI = require('swagger-ui-express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const sourceService = require('./services/source-service');

// const swaggerOptions = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'Propenster API Suite',
//             version: '1.0.0',
//             description: 'Propenster - Faith Olusegun - Backend API suite made in NodeJS',
//             contact: {
//                 name: 'Faith Olusegun - propenster',
//                 url: 'https://github.com/propenster',
//                 email: 'faitholusegun60@gmail.com'
//             },
//             servers: ["https://propenster-node-apis.herokuapp.com/"]

//         }
//     },
//     apis: ["*.js"]
// }

// const swaggerDocs = swaggerJsDoc(swaggerOptions);

// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// /**
//  * @swagger
//  * definitions: 
//  * 
//  */





app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use(
    cors({
             credentials: true,
             origin: true
         })
);
app.options('*', cors());




mongoose.connect(process.env.MONGODB_URI,
        {useNewUrlParser: true,
            useUnifiedTopology: true});



app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my API', aboutMe: {
        name: 'Faith Olusegun - propenster',
        contact: 'faitholusegun60@gmail.com',
        githubUrl: 'https://www.github.com/propenster',
        twitter: 'https://twitter.com/propenster_dev',
        linkedin: 'https://www.linkedin.com/in/faith-emmanuel-olusegun-1760a0166/',
        apis: {
            books: 'https://propenster-node-apis.herokuapp.com/api/v1/books',
            sources: 'https://propenster-node-apis.herokuapp.com/api/v1/sources',
            airports: 'https://propenster-node-apis.herokuapp.com/api/v1/airports'
        }

    } });
});

app.get('/api/v1/sources', (req, res) => sourceService.findAllSources().then(sources => res.json(sources)));

require("./controllers/book-controller")(app);
require("./controllers/source-controller")(app);
require("./controllers/airport-controller")(app);

app.listen(process.env.PORT || 5000, () =>
    console.log("Server is running @3000 ...")
);


