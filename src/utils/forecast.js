const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=8fee8b94453cf54344902750baa7f6eb&query=${latitude},${longitude}&units=m&`
    
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelsLike} degrees out. The humidity is ${body.current.humidity}%.`)
                }
    })
}

module.exports = forecast