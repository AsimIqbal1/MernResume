const mongoose = require("mongoose");
const chalk = require('chalk');

mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
    (error) => {
        if (error) {
            console.log("Error Connecting");
        }
        else {
            console.log(chalk.green.inverse('<<<  Database connected  >>>'));
        }
    }
)