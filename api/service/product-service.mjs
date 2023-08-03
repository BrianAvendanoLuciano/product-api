import ProductRepo from "../repository/product-repo.mjs";
import SearchHelper from "../library/mongoose/search-helper.mjs";
import FilterHelper from "../library/mongoose/filter-helper.mjs";
import field from "../library/mongoose/field-helper.mjs";

export default class ProductService {
    #productRepo;
    #searchHelper;
    #filterHelper;
    constructor() {
        this.#productRepo = new ProductRepo();
        this.#searchHelper = new SearchHelper();
        this.#filterHelper = new FilterHelper();
    }

    async searchProduct(query) {
        let products = [];

        const searchQuery = this.#searchHelper
        .setFeedId(query.feed_id)
        .setProductName(query.product_name)
        .setCategory(query.category)
        .setDetail(query.detail)
        .setStatus(query.status)
        .setFrom(query.from)
        .setTo(query.to)
        .build();

        const searchField = field(query.field);

        const searchFilter = this.#filterHelper
        .setLimit(query.limit)
        .setOffset(query.offset)
        .build();

        try {
            products = await this.#productRepo.searchProduct(searchQuery, searchField, searchFilter);
            
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

    async createProduct(products) {
        try {
            products = await this.#productRepo.createProduct(products);
            
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
}