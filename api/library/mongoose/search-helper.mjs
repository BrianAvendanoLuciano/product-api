/**
 * Mongoose search helper
 * @author Brian
 */
export default class SearchHelper {
    #query;

    setFeedId(feedId) {
        this.#query.feed_id = feedId; 
    }

    setName(productName) {
        this.#query.product_name = `/${productName}/i`;
    }

    setFrom(from) {
        this.#query.createdAt.$gte = from;
    }

    /**
     * sets the document limit
     * @param {int} limit 
     * @returns SearchHelper
     */
    setLimit(limit) {
        this.#query.limit = limit;
        return this;
    }

    setOffset(offset) {
        this.#query
    }
}