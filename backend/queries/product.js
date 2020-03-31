const db = require('./db')

const getProducts = (request, response) => {
  db.pool.query('SELECT * FROM products ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getProductById = (request, response) => {
  const id = parseInt(request.params.id)

  db.pool.query('SELECT * FROM products WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createProduct = (request, response) => {
  const { name, description, image, thumbnail } = request.body

  db.pool.query('INSERT INTO products (name, description, image, thumbnail) VALUES ($1, $2, $3, $4)', [name, description, image, thumbnail], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Product added with ID: ${result.insertId}`)
  })
}

const updateProduct = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, description, image, thumbnail } = request.body

  db.pool.query(
    'UPDATE products SET name = $1, email = $2 WHERE id = $3',
    [name, description, image, thumbnail, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Product modified with ID: ${id}`)
    }
  )
}

const deleteProduct = (request, response) => {
  const id = parseInt(request.params.id)

  db.pool.query('DELETE FROM products WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Product deleted with ID: ${id}`)
  })
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}