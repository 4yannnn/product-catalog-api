// server.js
// Simple Product Display API using Express

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// In-memory products array (>=5 products, >=3 categories, mixed inStock)
const products = [
  { id: 1, name: 'Aurora Laptop', category: 'Electronics', price: 54999, inStock: true },
  { id: 2, name: 'Nebula Smartphone', category: 'Electronics', price: 25999, inStock: false },
  { id: 3, name: 'Atlas Office Chair', category: 'Furniture', price: 7999, inStock: true },
  { id: 4, name: 'Zenith Headphones', category: 'Accessories', price: 3499, inStock: false },
  { id: 5, name: 'Comet Mechanical Keyboard', category: 'Accessories', price: 4999, inStock: true },
  { id: 6, name: 'Horizon Desk Lamp', category: 'Furniture', price: 1299, inStock: true }
];

// Middleware to serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// GET /products - return all products
app.get('/products', (req, res) => {
  res.json(products);
});

// GET /products/categories - return unique categories
app.get('/products/categories', (req, res) => {
  const categories = Array.from(new Set(products.map(p => p.category)));
  res.json({ categories });
});

// GET /products/instock - return only products with inStock === true
app.get('/products/instock', (req, res) => {
  const inStockProducts = products.filter(p => p.inStock === true);
  res.json(inStockProducts);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
