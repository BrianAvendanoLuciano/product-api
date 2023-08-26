import CustomService from "../service/custom-service.mjs";
import response from "../library/response.mjs";

/**
 * custom routes
 * @author Brian
 */
export default class CustomController {
    // custom service
    #service;

    /**
     * initialize custom service
     */
    constructor() {
        this.#service = new CustomService()
    }
    
    /**
     * get customs
     * @param {express req} req 
     * @param {express res} res 
     * @returns json
     */
    async get(req, res) {
        const customs = await this.#service.searchCustom(req.query);

        if (!customs.success) {
            return response.error(res, 'db_error',
                { message: customs.message }
            );
        }

        return response.success(res, {
            result: 'success',
            customs: customs.custom
        });
    }
}