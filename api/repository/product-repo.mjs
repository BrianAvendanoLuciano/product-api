import ProductModel from "../model/product-model.mjs";

export default class ProductRepo {
    #model;
    constructor() {
        const product = new ProductModel();
        this.#model = product.model();
    }

    async searchProduct(query, field, filter) {
        return await this.#model.find(query, field, filter).exec();
    }
}