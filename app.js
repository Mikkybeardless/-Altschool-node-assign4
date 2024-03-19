const express = require("express");
const app = express();
require("dotenv").config()
const port = process.env.PORT
const routes = require('./routes/authorRouter');

// middlewares
const firstMiddleWare = require('./middlewares/middleware');
const logger = require("./middlewares/logger")


app.use(firstMiddleWare);
app.use(logger)

app.use('/',routes);

app.all("*",(req,res,next)=>{
    res.status(404).send("404 page doesn't exist")
})

app.listen(port, ()=>{
    console.log(`Server is active at http://localhost:${port}`)
})