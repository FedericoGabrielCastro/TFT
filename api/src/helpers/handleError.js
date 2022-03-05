/**
 *  Manage error when controllers catch an error.
 */

// Manage error 500.
const httpError = (res, err) => {
    console.log(err)
    res.status(500) // Internal Server Error.
    res.send({ error: "something went wrong" }) // Throw error.
}

module.exports = { httpError }