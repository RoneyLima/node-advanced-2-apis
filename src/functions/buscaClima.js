const fetch = require('node-fetch')

module.exports = async function pesquisaClima(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f875449377aa95e0220c1c801de658cb`)
    const dadosjson = await response.json()

    return dadosjson 
}