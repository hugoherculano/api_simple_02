const { Router } = require('express');
const axios = require('axios')

const rota = Router()

const clientes = [
    {
        nome: 'Hugo Vinicius',
        idade: 20,
        cargo: 'CTO'
    }
]

rota.get('/', (req, res) => {
    res.status(200).json(clientes)
});


rota.post('/create', (req, res) => {
    
    const {
        nome,
        idade,
        cargo
    } = req.body;
    
    try {
        clientes.push({ nome, idade, cargo });
        
        return res.status(201).json(clientes);
        
    } catch(e) {
        return res.status(400).json({ errou: "Erro na criação de funcionário! "});
    }
    
});

rota.get('/github', (req, res) => {

    axios.get('https://api.github.com/users')
    .then(result => res.status(200).json(result.data))
    .catch(erro => console.log("Errou!!!"))

});

module.exports = rota