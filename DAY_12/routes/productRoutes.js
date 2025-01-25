const {getProducts , getProduct , addedProduct , deletedProduct ,updatedProduct , updateProduct , validate , idValidator} = require("../routeHandler/productFunction")
const express = require("express")
const app = express()

const productRoutes = express.Router()
// by using this we can able to get the id
// if there is an id is will validate using idValidator
// param middleware
productRoutes.param("id",idValidator)

app.use("/api/v1/products",productRoutes)

// app.get("/api/v1/products" , getProducts)
// app.post("/api/v1/products" , addedProduct)
// Route combine
productRoutes.route("/").get(getProducts).post(validate,addedProduct)

// app.get("/api/v1/products/:id" , getProduct)
// app.delete ("/api/v1/products/:id" , deletedProduct)
// app.patch("/api/v1/products/:id" , updatedProduct)
// app.put("/api/v1/products/:id" , updateProduct)
// Route combine
productRoutes.route("/:id").get(getProduct).delete(deletedProduct).patch(updatedProduct).put(updateProduct);

// to export
module.exports = productRoutes;