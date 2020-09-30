require('dotenv').config()

require('./database/config');
const {end_point}  = require('./constants');
const chalk = require('chalk');
const cors = require('cors');

const express = require('express');
const app = express();

const helmet = require('helmet')
const bodyParser = require('body-parser');


app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use(cors());

const router = express.Router();
app.use(end_point, router);
require('./routes')(router);

//Handling Error
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500)
        .json({ message: error.message || "Unknown Error Occured" })
});

app.use((req, res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

//SERVER SETUP
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(chalk.red.inverse(`<<< Server Started at port  ${port}>>>`))
});
