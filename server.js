const express = require("express");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config()

const app = express();
const port = process.env.PORT || 5000;

connectDB()
app.use(express.json())
app.use("/api/contacts",require("./routes/contactRoutes"))
app.use("/api/contacts",require("./routes/contactUser"))
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Express Project is running on port ${port}`)
})