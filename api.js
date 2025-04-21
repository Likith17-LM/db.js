console.log('🚀 Entered api.js')
const express = require('express')
console.log('📦 Loaded express')
const Products = require('./products')
console.log('📦 Loaded products.js')

const router = express.Router()

// Create a product
async function createProduct(req, res, next) {
  const product = await Products.create(req.body)
  res.json(product)
}

// List products
async function listProducts(req, res, next) {
  const { offset = 0, limit = 25, tag } = req.query
  const products = await Products.list({ offset, limit, tag })
  res.json(products)
}

// Get a product
async function getProduct(req, res, next) {
  const product = await Products.get(req.params.id)
  res.json(product)
}

// Edit a product
async function editProduct(req, res, next) {
  const change = req.body
  const product = await Products.edit(req.params.id, change)
  res.json(product)
}

// Delete a product
async function deleteProduct(req, res, next) {
  const response = await Products.destroy(req.params.id)
  res.json(response)
}

module.exports = {
  createProduct,
  listProducts,
  getProduct,
  editProduct,
  deleteProduct
}
