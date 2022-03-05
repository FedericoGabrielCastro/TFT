require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { mongoDbConnect } = require("./config/mongo")
const { getAllForex } = require("./api/getAllForex")
const router = express.Router()
const app = express()

// take port env or take 8000 
const port = process.env.LOCAL_PORT || 8000

// Middlewares.
app.use("/" , require("./routes")) // enable all .routes
app.use(cors()) // Comunicate API with React.

router.get("/forex", (req, res) => {
    // res.send("poderoso")
    console.log("res", res)
})

mongoDbConnect() // Connect with mongoDB.
// getAllForex() // Axios get all forex.

app.listen(port, () => console.log("server listening on port: ", port ))