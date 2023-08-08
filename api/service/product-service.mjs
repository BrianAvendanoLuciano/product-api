import ProductRepo from "../repository/product-repo.mjs";
import ProudctSearchHelper from "../library/mongoose/search-helper/product-search-helper.mjs";
import FilterHelper from "../library/mongoose/filter-helper.mjs";
import field from "../library/mongoose/field-helper.mjs";

/**
 * product business logic
 * @author Brian
 */
export default class ProductService {
    // product repository
    #productRepo;
    
    /**
     * initialize product repo
     */
    constructor() {
        this.#productRepo = new ProductRepo();
    }

    /**
     * search product based on query param
     * @param {object} query 
     * @returns object
     */
    async searchProduct(query) {
        let products = [];
        const searchHelper = new ProudctSearchHelper();
        const filterHelper = new FilterHelper();

        // set query
        const searchQuery = searchHelper
        .setFeedId(query.feed_id)
        .setProductName(query.product_name)
        .setProductNo(query.product_no)
        .setCategory(query.category)
        .setDetail(query.detail)
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
            products = await this.#productRepo.search(searchQuery, searchField, searchFilter);
            
            return {
                success: true,
                products: products
            }
        } catch (err) {
            return {
                success: false,
                message: err.message
            }
        }
    }

    /**
     * creates new products
     * @param {Array<object>} products 
     * @returns object
     */
    async createProduct(products) {
        try {
            products = await this.#productRepo.create(products);
            
            return {
                success: true,
                message: 'new product(s) added'
            }
        } catch (err) {
            return {
                success: false,
                message: err.message
            }
        }
    }

    /**
     * separate products from update to insert
     * @param {Array<object>} products 
     * @returns 
     */
    separateProducts(products) {
        const insert = [];
        const update = [];
        const updateId = [];

        for (let i=0; i<products.length; i++) {
            const current = products[i];
            if (current._id) {
                update.push(current);
                updateId.push(current._id);
                continue;
            }
            insert.push(current);
        }

        return {
            insert, update, updateId
        }
    }
}