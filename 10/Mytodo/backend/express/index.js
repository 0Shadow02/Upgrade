const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");
const rootrouter = require("./routes/index")
app.use(express.json())
app.use(cors());

app.use("/",rootrouter);

app.listen(3000,()=>{
    console.log("listening to the port 3000")
})