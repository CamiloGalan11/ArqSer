import { Router } from "express";
import Producto from "./producto.routes.js";

const router = Router();
const generalRouters =[
    {path : '/producto', route : Producto}
]

generalRouters.forEach(route =>{
    router.use(route.path, route.route)
});

export default router;