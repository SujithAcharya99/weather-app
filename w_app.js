const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

if (!address) {
    console.log('please provide an address....!')
} else{

    geocode(address,(error, {latitude , longitude , location} = {}) => {
    if (error) {
        return console.log(error)
        
    }
     forecast(latitude, longitude, (error, fdata) => {    
        if (error) {
            return console.log('Error :', error)
            
        }
         
       console.log('Location Data :', location)
        console.log('Weather Data :', fdata)
      }) 
})
}
