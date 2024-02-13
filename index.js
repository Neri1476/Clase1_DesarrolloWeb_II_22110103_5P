const express = require('express')

const app = express()

const port = 3001

let food  = [
    {id: '1', name: 'Pizza'},
    {id: '2', name: 'Burguer'},
    {id: '3', name: 'Taco'}
]

app.listen(port, () => {
    console.log('¡¡La aplicacion esta en uso!!')
})

app.get(('/food'), (req, res) => {
    res.send(food)
})

app.post('/food', (req, res) => {
    const {body} = req
    food.push(body)
    res.send('Se agrego un nuevo platillo')
})

app.patch('/food/:id', (req, res) => {
    const {body} = req
    const {name} = body
    const {params} = req
    const {id} = params

    const food = food.find((food) => food.id)

    food.name = name
    res.send({message: "Platillo actualizado", food})
})

app.delete('/food/:id', (req, res) => {
    const {id} = req.params
    food = food.filter((food) => food.id != id)
    res.send("Se elimino el platillo")
})