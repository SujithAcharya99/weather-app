/*setTimeout(() =>{

    console.log('2 second function')
}, 2000)

const names = ['sujith','sanjay','thanush','jen']
const shortNames = names.filter((name) => {

    return name.length <= 4
})

const geoCode = (address, callback) => {
    setTimeout(() =>{
        const data = {
            latitude : 0,
            longitude : 0
        }

        callback(data)
    },3000)
  
    //return data
}

const data = geoCode('Philadelphia',(data) => {
    console.log(data)
})
*/
const add = (x, y, callback) => {
    setTimeout(() => {
        callback(x + y)
    }, 2000)
}


add(1, 4, (sum) =>{
    console.log(sum)
})