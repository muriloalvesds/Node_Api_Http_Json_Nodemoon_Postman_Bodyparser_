const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyparse = require('body-parser')


const app = express()

let db = [
    {'1': { nome: 'cliente 1', idade: '20'}},
    {'1': { nome: 'cliente 2', idade: '21'}},
    {'1': { nome: 'cliente 3', idade: '22'}},
]
//buscar dados
app.get('/',  (req,res) => {
    return res.json(db)
})
//inserir dados
app.post('/add', (req,res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json.body    
})
app.use(morgan('dev'))
app.use(bodyparse.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.listen(21262, ()=> {
    console.log('Express Started')
})
