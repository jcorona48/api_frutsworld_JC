import {Router} from 'express'
import {getProductos, createProductos, updateProductos, deleteProductos, getProducto} from '../controllers/Productos.controller.js'

const router = Router()

router.get("/Productos", getProductos);

router.get("/Productos/:id", getProducto);

router.post("/Productos", createProductos);

router.patch("/Productos/:id", updateProductos);

router.delete("/Productos/:id", deleteProductos);

export default router;