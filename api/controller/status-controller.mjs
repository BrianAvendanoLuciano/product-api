import StatusService from "../service/status-service.mjs";
import response from "../library/response.mjs";

/**
 * status routes
 * @author Brian
 */
export default class StatusController {
    // status service
    #service;

    /**
     * initialize status service
     */
    constructor() {
        this.#service = new StatusService()
    }
    
    /**
     * get status
     * @param {express req} req 
     * @param {express res} res 
     * @returns json
     */
    async get(req, res) {
        const status = await this.#service.searchStatus(req.query);

        if (!status.success) {
            return response.error(res, 'db_error',
                { message: status.message }
            );
        }

        return response.success(res, {
            result: 'success',
            status: status.status
        });
    }
}