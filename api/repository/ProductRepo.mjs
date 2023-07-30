import ProductModel from "../model/ProductModel.mjs";

export default class ProductRepo {
    #model;
    constructor() {
        const product = new ProductModel();
        this.#model = product.model();
    }

    searchProduct() {
        // this.#model()
    }
}