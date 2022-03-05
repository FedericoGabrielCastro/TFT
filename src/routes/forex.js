const express = require("express")
const router = express.Router()

router.get("/forex", (req, res) => {
    // res.send("poderoso")
    console.log("res", res)
})

module.exports = router