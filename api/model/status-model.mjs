import mongoose from 'mongoose';

export default class StatusModel {
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
            status: {
                type: String,
                required: true
            }
        }, { timestamps: true });
    }

    model() {
        return mongoose.model('Status', this.#schema)
    }
}