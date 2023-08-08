/**
 * Mongoose search helper
 * @author Brian
 */
export default class SearchHelper {
    // mongodb search query
    #query = {};

    /**
     * search using feed_id
     * @param {string} feedId 
     * @returns SearchHelper
     */
    setFeedId(feedId) {
        if (feedId) {
            this.#query.feed_id = feedId;
        }
        return this;
    }

    /**
     * search using product_name
     * @param {string} productName 
     * @returns SearchHelper
     */
    setProductName(productName) {
        if (productName) {
            this.#query.product_name = `/${productName}/i`;
        }
        return this;
    }

    /**
     * search using category
     * @param {string} category 
     * @returns SearchHelper
     */
    setCategory(category) {
        if (category) {
            this.#query.category = `/${category}/i`;
        }
        return this;
    }

    /**
     * search using detail
     * @param {string} detail 
     * @returns SearchHelper
     */
    setDetail(detail) {
        if (detail) {
            this.#query.detail = `/${detail}/i`;
        }
        return this;
    }

    /**
     * search using status
     * @param {string} status 
     * @returns SearchHelper
     */
    setStatus(status) {
        if (status) {
            this.#query.status = { $in: status.split(",")};
        }
        return this;
    }

    /**
     * search products created date after
     * @param {string} productName 
     * @returns SearchHelper
     */
    setFrom(from) {
        if (from) {
            this.#query.createdAt = { $gte: from };
        }
        return this;
    }
    
    /**
     * search products created date before
     * @param {string} productName 
     * @returns SearchHelper
    */
   setTo(to) {
        if (to) {
            this.#query.createdAt = { $lte: to };
        }
        return this;
    }
    
    /**
     * returns the query
     * @returns object
     */
    build() {
        return this.#query;
    }
}