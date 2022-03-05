const mongoose = require("mongoose")

const mongoDbConnect = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) {
            console.log("**** CONECTION SUCCESS ****")
        } else {
            console.log("**** CONECTION ERROR **** ")
        }
    })
}

module.exports = { mongoDbConnect }