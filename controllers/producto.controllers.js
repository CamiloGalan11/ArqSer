import { getProductoModel } from "../models/producto.models.js";

export const getProducto = async (req, res) => {
    console.log("Get Producto");
    let data = await getProductoModel();
    res.send({msg: 'Get Producto', data : data})
}