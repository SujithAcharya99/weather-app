const request = require('request')
const geocode = require('./utils/geocode.js')


geocode('suratkal india',(error, data) => {
    console.log('error',error)
    console.log('data:',data)
})
