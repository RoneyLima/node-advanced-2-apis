const fetch = require('node-fetch')

module.exports = async function buscaCep(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const json = await response.json()

    return json 
}

// module.exports = function buscaCep(cep){
//     // deve ser com Crase para colocar o template string
//     // .then porque é uma promessa
//     fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
//         response.json().then((cep) =>console.log(cep)) 
//     })
// }