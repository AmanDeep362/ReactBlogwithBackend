const express = require('express');
const app = express();
const PORT = 5000;
const LatestCard = require('./Database/Data/TheLatestCard.json')
const middleware = (req, res, next) => {
    console.log("middleware");
}
middleware();
//database connect
require('./Database/Db')

app.get("/",(req,res)=>{
    res.send("hello from backend")
})
app.get("/latestCardData",(req,res)=>{
    res.send(LatestCard)
})


app.listen(PORT,()=>{
    console.log("connection estabilish on port "+PORT);
})

