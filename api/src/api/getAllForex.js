/**
 *  Axios method get to take all forex from API. 
 */
const axios = require("axios")

const getAllForex = async () => {
    await axios.get(`${process.env.BASE_URL}/latest?access_key=${process.env.ACCESS_KEY}`) 
    .then(response => {
        console.log(response.data.rates)
    })
    .catch(error => {
        console.log(error)
    })
}

module.exports = { getAllForex }