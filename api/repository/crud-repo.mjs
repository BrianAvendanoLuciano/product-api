/**
 * base repo for crud operation
 * serves as abstraction
 * @author Brian
 */
export default class CrudRepo {
    // model
    #model;

    /**
     * initialize model
     * @param {ModelClass} model 
     */
    constructor(model) {
        const insModel = new model();
        this.#model = insModel.model();
    }

    /**
     * returns initialized model
     * @returns #model
     */
    model() {
        return this.#model;
    }

    /**
     * retrieve document based on requested query
     * @param {object} query 
     * @param {string} field 
     * @param {object} filter 
     * @returns promise
     */
    async search(query, field, filter) {
        return await this.#model.find(query, field, filter).exec();
    }

    /**
     * creates bulk documents
     * @param {Array<object>} products 
     * @returns promise
     */
    async create(products) {
       return await this.#model.insertMany(products);
    }

    /**
     * updates product based on the given ids
     * @param {Array} ids 
     * @param {Array<object>} products 
     * @returns promise
     */
    async update(ids, products) {
        return await this.#model.updateMany({ _id: { $in: ids } }, products);
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

    /**
     * bulk delete based on ids
     * @param {Array} ids 
     * @returns promise
     */
    async delete(ids) {
        return await this.#model.deleteMany({ _id: { $in: ids } });
    }
}