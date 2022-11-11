//  we reqiuire a packages cor, express
require("dotenv").config()

let express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
// const apiData = require("./data.json");

const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error)=>{
    console.error(error)
})
db.once('open', ()=>{
    console.log("Connected to the database")
})
app.use(cors());
app.use(express.json());

const newsData = require("./routes/newsdata")
app.use('/', newsData)



app.listen(port, () => {
    console.log(`Server Started on port: ${port}`)
} )