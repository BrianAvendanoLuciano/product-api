import mongoose from 'mongoose';

export default class CustomModel {
    #schema;
    constructor() {
        this.#schema = mongoose.Schema({
            feed_id: {
                type: String,
                required: true
            },
            product_no: {
                type: Number,
                required: true
            },
            google_category_name: {
                type: String,
                required: false
            },
            google_category_no: {
                type: Number,
                required: false
            },
            rep_cateogry_no: {
                type: Number,
                required: false
            },
            size: {
                type: String,
                required: false
            },
            color: {
                type: String,
                required: false
            }
        }, { timestamps: true });
    }

    model() {
        return mongoose.model('Custom', this.#schema)
    }
}