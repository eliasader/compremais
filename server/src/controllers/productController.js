import product from "../models/Products.js";

class productController {
    static listProducts = async(req, res) =>{
        try {
            const prodList = await product.find({});
            res.send(prodList)
        } catch (err) {
            res.status(500).send({message: `${err.message} - Falha na requisição dos produtos`});
        }
    }
}
   

export default productController;