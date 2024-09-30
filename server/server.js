const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const contactRoute = require("./routes/contactRoute.js")
const connectDB = require("./DB/connectDB.js")
const PORT = process.env.PORT || 5000

connectDB(process.env.DB_URL)

app.use(express.json())

const app = express()

app.use("/api/v1",contactRoute)


app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ${PORT}`)
})
