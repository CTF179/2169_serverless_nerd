const express = require('express');
const app = express();
const logger = require("./util/logger");
const userController = require("./controller/userController");

const PORT = 3000;

app.use(express.json());

app.use(loggerMiddleware);

app.use("/users", userController);

function loggerMiddleware(req, res, next){
    logger.info(`Incoming ${req.method} : ${req.url}`);
    next();
}

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})