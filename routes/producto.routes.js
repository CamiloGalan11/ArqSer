import { Router } from "express";
import { getProducto } from "../controllers/producto.controllers.js";
import { validate } from "../middlewares/validator.middlewares.js";
import { productoValidator } from "../validators/producto.validator.js";

const router = Router();

router.get("/", validate(productoValidator), getProducto);

export default router;