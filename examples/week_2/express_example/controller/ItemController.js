const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("This is the root items route");
});

router.post("/", validateItemMiddleware, (req, res) => {
    // creating a new item
    const jsonData = req.body;
    console.log(jsonData);

    res.status(201).json({message: "Item Created!", item: jsonData});
});

function validateItemMiddleware(req, res, next){
    // check if there is a valid name and price
    const jsonBody = req.body;

    if(validateItem(jsonBody)){
        next();
    }else{
        res.status(400).json({
            message: "Invalid Name or Price"
        });
    }
};

function validateItem(data){
    return (data.name && data.price);
};

module.exports = router;