import AuthService from "../service/auth-service.mjs";
import response from "../library/response.mjs";

/**
 * class AuthController
 * responsible for calling the business
 * logic for authenticating user.
 */
export default class AuthController {
    // store the auth service
    #authService;

    /**
     * initialize service class
     * @returns void
     */
    constructor() {
        this.#authService = new AuthService();
    }

    /**
     * This will create the hmac for requesting JWT
     * @param {express req} req 
     * @param {express res} res 
     * @returns json
     */
    generateHMAC(req, res) {
        const { user, type, shop, service, request_date } = req.body;
        return response.success(res, {hmac: this.#authService.auth({ user, type, shop, service, request_date })});
    }

    /**
     * This will create jwt.
     * jwt will allow the user to use our api
     * @param {express req} req 
     * @param {express res} res 
     * @returns json
     */
    generateJWT(req, res) {
        const { user, type, shop, service, request_date, hmac } = req.body;
        const jwt = this.#authService.createJWT({user, type, shop, service, request_date, hmac});
        if (!jwt.access) {
            if (jwt.token == 'expired') {
                return response.unauthorized(res, {message: 'hmac is expired'});
            }
            return response.unauthorized(res, {message: 'invalid token', interval: jwt.interval, request_date: jwt.request_date, date: jwt.date});
        }
        
        return response.success(res, {token: jwt.token});
    }
}