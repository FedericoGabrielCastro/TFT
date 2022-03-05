/**
 * compile all routes here with out this file.
 */

const express = require('express')
const router = express.Router()
const fs = require('fs')

const pathRouter = `${__dirname}` // Create path. 

// Remove extensions in the fileName.
const removeExtension = (fileName) => {
    return fileName.split(".").shift()
} 

// Return the routes without index.js.
fs.readdirSync (pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file) // Remove extension.
    const skip = ["index"].includes(fileWithOutExt) // Remove index.
    if (!skip) {
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`))
        console.log("load route:", file)
    }
})

// If the route not exist, throw error 404.
router.get("*", (req, res) => {
    res.status(404) // 404 Not Found.
    res.send({ error: "not found" }) // // Throw error.
})

module.exports = router