const request=require('request')

const forecast=(latitude, longitude, callback)=>{
    const url='http://api.weatherstack.com/current?access_key=9c6bb57ba0e3981b164f5e029746366e&query='+ latitude + ','+ longitude
    request({url, json: true}, (error, response)=>{
        if(error){
            callback('Unable to connect to weather services', undefined)
        }else if(response.body.error){
            callback('Unable to find location', undefined)
        }
        else{
            const call=response.body.current
            callback(undefined, call.weather_descriptions[0]+ ". It is currently " + call.temperature + " degrees outside. It feels like " + call.feelslike+ " degrees outside.")
        }
    })
}

module.exports=forecast