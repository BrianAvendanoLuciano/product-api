import ProductService from "../service/product-service.mjs";

export default class ProductController {
    #service;
    constructor() {
        this.#service = new ProductService()
    }
    
    async get(req, res) {
        return res.status(200).json(await this.#service.searchProduct(req.query));
    }
}