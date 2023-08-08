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

    async createProduct(products) {
       return await this.#model.insertMany(products);
    }

    async updateProduct(ids, products) {
        return await this.#model.updateMany(ids, products);
        // User.updateMany({age:{$gte:5}}, 
        //     {name:"ABCD"}, function (err, docs) {
        //     if (err){
        //         console.log(err)
        //     }
        //     else{
        //         console.log("Updated Docs : ", docs);
        //     }
        // });
    }
}