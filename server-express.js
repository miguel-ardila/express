const express = require("express");
const app = express();
const port = 8080;

const cookPasta = (req,res,next) => {
    console.log("Cooking pasta 🍝");
    next();
};

const cookSauce = (req,res,next) => {
    console.log("Cooking sauce 🍅");
    next();
};

app.get("/orders/pasta-bolonesa", cookPasta, cookSauce, (req, res) => {
    res.send("🍝");
});

app.listen(port, () =>{
    console.log(`servidor ejecutandose en el puerto http://localhost:${port}`);
});