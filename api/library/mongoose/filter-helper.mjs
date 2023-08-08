export default class FilterHelper {
    // mongoose filter
    #filter = {};

    /**
     * sets the document limit
     * @param {int} limit 
     * @returns FilterHelper
     */
    setLimit(limit) {
        if (limit) {
            this.#filter.limit = limit;
        }
        return this;
    }

    /**
     * sets the document skip
     * @param {int} limit 
     * @returns FilterHelper
     */
    setOffset(offset) {
        if (offset) {
            this.#filter.skip = offset;
        }
        return this;
    }

    /**
     * return the filter object
     * @returns object
     */
    build() {
        return this.#filter;
    }
}