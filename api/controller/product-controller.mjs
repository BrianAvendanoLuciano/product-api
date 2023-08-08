import ProductService from "../service/product-service.mjs";
import response from "../library/response.mjs";

/**
 * product routes
 * @author Brian
 */
export default class ProductController {
    // product service
    #service;

    /**
     * initialize product service
     */
    constructor() {
        this.#service = new ProductService()
    }
    
    /**
     * get products
     * @param {express req} req 
     * @param {express res} res 
     * @returns json
     */
    async get(req, res) {
        const products = await this.#service.searchProduct(req.query);

        if (!products.success) {
            return response.error(res, 'db_error',
                { message: products.message }
            );
        }

        return response.success(res, {
            result: 'success',
            products: products.products
        });
    }

    /**
     * put products
     * @param {express req} req 
     * @param {express res} res 
     * @returns json
     */
    async put(req, res) {
        const products = await this.#service.createProduct(req.body.products);

        if (!products.success) {
            return response.error(res, 'db_error',
                { message: products.message }
            );
        }

        return response.success(res, {
            result: 'success',
            message: products.message
        });
    }
}