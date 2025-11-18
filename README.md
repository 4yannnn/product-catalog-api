# Product Catalog API

## Project Description
A small Node.js + Express API that serves product data and a simple frontend to display it.

**Technologies used:** Node.js, Express, plain HTML/CSS/JS

## Project Structure
```
product-catalog-api/
├── public/
│   └── index.html      # Frontend page
├── .gitignore
├── package.json
├── server.js           # Express server & API endpoints
└── README.md
```

## API Documentation

### GET /products
- **Path:** `/products`
- **Method:** GET
- **Description:** Returns a JSON array with all products.
- **Sample Response:**
```json
[
  { "id":1, "name":"Aurora Laptop", "category":"Electronics", "price":54999, "inStock":true },
  { "id":2, "name":"Nebula Smartphone", "category":"Electronics", "price":25999, "inStock":false }
]
```

### GET /products/categories
- **Path:** `/products/categories`
- **Method:** GET
- **Description:** Returns a JSON object with the unique categories array.
- **Sample Response:**
```json
{ "categories": ["Electronics", "Furniture", "Accessories"] }
```

### GET /products/instock
- **Path:** `/products/instock`
- **Method:** GET
- **Description:** Returns only products where `inStock` is `true`.
- **Sample Response:**
```json
[
  { "id":1, "name":"Aurora Laptop", "category":"Electronics", "price":54999, "inStock":true }
]
```

## Installation & Setup Instructions
1. Clone the repository:
```
git clone https://github.com/4yannnn/product-catalog-api.git
cd product-catalog-api
```
2. Install dependencies:
```
npm install
```
3. Start the server:
```
npm start
```
Or during development (auto-restart on changes):
```
npm run dev
```
4. Open the frontend in your browser:
- Frontend: http://localhost:3000/
- API endpoints: http://localhost:3000/products, http://localhost:3000/products/categories, http://localhost:3000/products/instock

## GitHub Repository Link
Replace with the link to your public repository:
`https://github.com/4yannnn/product-catalog-api.git`

## Author Information
Author name: **Ayan**
