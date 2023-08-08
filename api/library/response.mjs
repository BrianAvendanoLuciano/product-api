/**
 * class Response
 * @author Brian
 * response helper
 */
export default class Response {
    /**
     * success response (status code 200s)
     * @param {express res} res 
     * @param {response body} param1 
     * @param {int} code 
     * @returns json
     */
    static success(res, {...body}, code=200) {
        return res.status(code).json({
            result: 'success',
            ...body
        });
    }

    /**
     * unauthorized response (status code 400s)
     * @param {express res} res 
     * @param {response body} param1 
     * @param {int} code  
     * @returns 
     */
    static unauthorized(res, {...body}, code=401) {
        return res.status(code).json({
            result: 'unauthorized',
            ...body
        });
    }

    /**
     * errer response (status code 500s)
     * @param {express res} res 
     * @param {response body} param1 
     * @param {int} code  
     * @returns 
     */
    static error(res, result='error', {...body}, code=500) {
        return res.status(code).json({
            result,
            ...body
        });
    }
}