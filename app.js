const express = require('express')
const app = express()
const api = require('./api')

app.use(express.json())

app.post('/products', api.createProduct)
app.get('/products', api.listProducts)
app.get('/products/:id', api.getProduct)
app.put('/products/:id', api.editProduct)
app.delete('/products/:id', api.deleteProduct)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`)
})
