import mongoose from 'mongoose';

export default class ProductModel {
    #schema;
    constructor() {
        this.#schema = mongoose.Schema({
            feed_id: {
                type: String,
                required: true
            },
            product_name: {
                type: String,
                required: true
            },
            details: {
                type: String,
                required: true
            },
            price: {
                type: String,
                required: true
            },
            category: {
                type: String,
                required: true
            },
        }, { timestamps: true });
    }

    model() {
        return mongoose.model('Product', this.#schema)
    }
}