/**
 * Mongoose search helper
 * @author Brian
 */
export default class SearchHelper {
    // mongodb search query
    query = {};

    /**
     * search using product number(s)
     * @param {string} status 
     * @returns ProudctSearchHelper
     */
    setProductNo(productNo) {
        if (productNo) {
            this.query.product_no = { $in: productNo.split(",") };
        }
        return this;
    }

    /**
     * search using status
     * @param {string} status 
     * @returns ProudctSearchHelper
     */
    setStatus(status) {
        if (status) {
            this.query.status = { $in: status.split(",") };
        }
        return this;
    }

    /**
     * search products created date after
     * @param {string} from 
     * @returns ProudctSearchHelper
     */
    setFrom(from) {
        if (from) {
            this.query.createdAt = { $gte: from };
        }
        return this;
    }
    
    /**
     * search products created date before
     * @param {string} to 
     * @returns ProudctSearchHelper
    */
   setTo(to) {
        if (to) {
            this.query.createdAt = { $lte: to };
        }
        return this;
    }
    
    /**
     * returns the query
     * @returns object
     */
    build() {
        return this.query;
    }
}