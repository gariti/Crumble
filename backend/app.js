const express = require('express')
const bodyParser = require('body-parser')
const queriesUser = require('./queries/user')
const queriesProduct = require('./queries/product')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'root API for Souk...nothing to see here' })
  })

app.get('/users', queriesUser.getUsers)
app.get('/users/:id', queriesUser.getUserById)
app.post('/users', queriesUser.createUser)
app.put('/users/:id', queriesUser.updateUser)
app.delete('/users/:id', queriesUser.deleteUser)

app.get('/products', queriesProduct.getProducts)
app.get('/products/:id', queriesProduct.getProductById)
app.post('/products', queriesProduct.createProduct)
app.put('/products/:id', queriesProduct.updateProduct)
app.delete('/products/:id', queriesProduct.deleteProduct)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))