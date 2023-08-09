import StatusRepo from "../repository/status-repo.mjs";
import StatusSearchHelper from "../library/mongoose/search-helper/status-search-helper.mjs";
import FilterHelper from "../library/mongoose/filter-helper.mjs";
import field from "../library/mongoose/field-helper.mjs";

/**
 * status business logic
 * @author Brian
 */
export default class StatusService {
    // status repository
    #statusRepo;
    
    /**
     * initialize status repo
     */
    constructor() {
        this.#statusRepo = new StatusRepo();
    }

    /**
     * search status based on query param
     * @param {object} query 
     * @returns object
     */
    async searchStatus(query) {
        let status = [];
        const searchHelper = new StatusSearchHelper();
        const filterHelper = new FilterHelper();

        // set query
        const searchQuery = searchHelper
        .setProductNo(query.product_no)
        .setStatus(query.status)
        .setFrom(query.from)
        .setTo(query.to)
        .build();

        // which field(s) to retrieve
        const searchField = field(query.field);

        // serach filter (pagination)
        const searchFilter = filterHelper
        .setLimit(query.limit)
        .setOffset(query.offset)
        .build();

        try {
            status = await this.#statusRepo.search(searchQuery, searchField, searchFilter);
            
            return {
                success: true,
                status
            }
        } catch (err) {
            return {
                success: false,
                message: err.message
            }
        }
    }
}