const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

const itemController = require("./controller/ItemController");
const logger = require('./util/logger');

// app.get("/items", (req, res) => {
//     res.send([{id: 1, name: "Milk", price: 3.5}]);
// })

function loggerMiddleware(req, res, next){
    logger.info(`Incoming ${req.method} : ${req.url}`);
    next();
}

app.use(bodyParser.json());
app.use(loggerMiddleware);

app.use("/items", itemController);

// app.get("/", (req, res) => {
//     res.send("Hello world");
// });

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});