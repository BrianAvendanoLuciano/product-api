import SearchHelper from "./search-helper.mjs";

/**
 * Mongoose search helper
 * @author Brian
 */
export default class CustomSearchHelper extends SearchHelper{
    /**
     * search using rep_category_no
     * @param {string} repCategoryNo 
     * @returns CustomSearchHelper
     */
    setRepCategoryNo(repCategoryNo) {
        if (repCategoryNo) {
            this.query.rep_category_no = { $in: repCategoryNo.split(',') };
        }
        return this;
    }

    /**
     * search using google_category_no
     * @param {string} googleCategoryNo 
     * @returns CustomSearchHelper
     */
    setGoogleCategoryNo(googleCategoryNo) {
        if (googleCategoryNo) {
            this.query.google_category_no = { $in: googleCategoryNo.split(',') };
        }
        return this;
    }

    /**
     * search using google_category_name
     * @param {string} googleCategoryName 
     * @returns CustomSearchHelper
     */
    setGoogleCategoryName(googleCategoryName) {
        if (googleCategoryName) {
            this.query.google_category_name = `/${googleCategoryName}/i`;
        }
        return this;
    }

    /**
     * search using size
     * @param {string} size 
     * @returns CustomSearchHelper
     */
    setSize(size) {
        if (size) {
            this.query.size = size;
        }
        return this;
    }

    /**
     * search using color
     * @param {string} color 
     * @returns CustomSearchHelper
     */
    setColor(color) {
        if (color) {
            this.query.color = color;
        }
        return this;
    }
}