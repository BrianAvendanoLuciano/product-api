import CustomRepo from "../repository/custom-repo.mjs";
import CustomSearchHelper from "../library/mongoose/search-helper/custom-search-helper.mjs";
import FilterHelper from "../library/mongoose/filter-helper.mjs";
import field from "../library/mongoose/field-helper.mjs";

/**
 * custom business logic
 * @author Brian
 */
export default class CustomService {
    // custom repository
    #customRepo;
    
    /**
     * initialize custom repo
     */
    constructor() {
        this.#customRepo = new CustomRepo();
    }

    /**
     * search custom based on query param
     * @param {object} query 
     * @returns object
     */
    async searchCustom(query) {
        let custom = [];
        const searchHelper = new CustomSearchHelper();
        const filterHelper = new FilterHelper();

        // set query
        const searchQuery = searchHelper
        .setProductNo(query.product_no)
        .setRepCategoryNo(query.rep_category_no)
        .setGoogleCategoryNo(query.google_category_no)
        .setGoogleCategoryName(query.google_category_name)
        .setSize(query.size)
        .setColor(query.color)
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
            custom = await this.#customRepo.search(searchQuery, searchField, searchFilter);
            
            return {
                success: true,
                custom
            }
        } catch (err) {
            return {
                success: false,
                message: err.message
            }
        }
    }
}