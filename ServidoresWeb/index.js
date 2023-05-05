const express = require('express')
const Service = require('./src/service');

const app = express()
const PORT = 3000;
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Lista de usuarios',
    body: Service.getUsers()
  })
})

app.get('/:id', (req, res) => {
  let {params: { id }} = req
  let user = Service.getUser(id)
  res.json({
    message: `Usuario ${id}`,
    body: user
  })
})

app.post('/', (req, res) => {
  // let newUser = req.body
  let { body: newUser } = req;
  let user = Service.createUser(newUser)
  res.status(201).json({
    message: 'Usuario creado',
    body: user
  })
})

app.put('/:id', (req, res) => {
  let {params: { id }, body: editedUser } = req
  let user = Service.editUser(id, editedUser)
  res.json({
    message: `Usuario ${id} editado`,
    body: user
  })
})

app.delete('/:id', (req, res) => {
  let {params: { id }} = req
  let user = Service.delUser(id)
  res.json({
    message: `Usuario ${id} borrado`,
    body: user
  })
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})

