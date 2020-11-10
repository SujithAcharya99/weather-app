const request = require('request')
const geoCode = (address, callback) => {
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
}
module.exports = geoCode
