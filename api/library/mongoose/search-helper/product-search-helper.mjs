import SearchHelper from "./search-helper.mjs";

/**
 * Mongoose search helper
 * @author Brian
 */
export default class ProudctSearchHelper extends SearchHelper{
    /**
     * search using feed_id
     * @param {string} feedId 
     * @returns ProudctSearchHelper
     */
    setFeedId(feedId) {
        if (feedId) {
            this.query.feed_id = feedId;
        }
        return this;
    }

    /**
     * search using product_name
     * @param {string} productName 
     * @returns ProudctSearchHelper
     */
    setProductName(productName) {
        if (productName) {
            this.query.product_name = `/${productName}/i`;
        }
        return this;
    }

    /**
     * search using category
     * @param {string} category 
     * @returns ProudctSearchHelper
     */
    setCategory(category) {
        if (category) {
            this.query.category = `/${category}/i`;
        }
        return this;
    }

    /**
     * search using detail
     * @param {string} detail 
     * @returns ProudctSearchHelper
     */
    setDetail(detail) {
        if (detail) {
            this.query.detail = `/${detail}/i`;
        }
        return this;
    }
}