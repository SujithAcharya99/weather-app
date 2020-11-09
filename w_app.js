// console.log('STARTING......')

// setTimeout(() => {
//     console.log('2 second timmer')
// },2000)

// setTimeout(() => {
//     console.log('0 second timmer')
// },0)

// console.log('STOPING.....')

// const request=require('request')

// const url = 'http://api.weatherstack.com/current?access_key=6a1b6574ccd23d52015bfd7e5769f897&query=12.871169,%2074.842214&units=m'

// const geCodeUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3VqaXRoOTYzMiIsImEiOiJja2hhNnNzNWoxMWo5MnFucTVmMGhmNXNtIn0.hlpzK2b7szZUhSI1_Bql6g&limit=1'

// /*
// request({ url : url, json : true}, (error , response) => {
//     //console.log(response)
//     // const w_data = JSON.parse(response.body)
//     // console.log(w_data.current.temperature)

//     if (error) {
//         console.log('Unable To Connect Weather Service. Pls check your internet connection...!')
        
//     }else if (response.body.error) {
//         console.log("Unable to find the location")
//     }
//     else{
//     console.log(response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' degrees out . It feels like '+response.body.current.feelslike+' degrees out')
//     console.log('the chances of rain is :',response.body.current.precip,'%')
//     }
// })
// */

// //**********MPABOX  [geo code]********************* */

// request({ url: geCodeUrl, json : true} , (error , response) => {


//     if (error) {
//         console.log('Unable To Connect Location Service. Pls check your internet connection...!')
        
//     } else if (response.body.features.length === 0 ) {
//         console.log('Unable to find the location...!')
//     } else{
//     const longitude = response.body.features[0].center[0]
//     const latitude = response.body.features[0].center[1]

//     console.log("logitude is : "+longitude+" latitude is :"+latitude)
//     }
// })Philadephoia


/*onst geoCode = (address, callback) => {
    const geCodeUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic3VqaXRoOTYzMiIsImEiOiJja2hhNnNzNWoxMWo5MnFucTVmMGhmNXNtIn0.hlpzK2b7szZUhSI1_Bql6g&limit=1'

    request({ url : geCodeUrl, json: true }, (error , response) =>{
        if (error) {
            callback('unable to connect to location server', undefined )
        } else if (response.body.features.length === 0) {
            callback('unable to find locaion ....!', undefined)
        }
        else{
            callback(undefined, {
                longitude : response.body.features[0].center[0],
                latitude : response.body.features[0].center[1],
                location : response.body.features[0].place_name
            })
        }
    })
*********************** CONTENT MOVED TO ./utils/geocode.js **************************************
}*/

//

const request = require('request')
const geocode = require('./utils/geocode.js')


geocode('suratkal india',(error, data) => {
    console.log('error',error)
    console.log('data:',data)
})