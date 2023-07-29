import AuthService from "../service/auth-service.mjs";
import response from "../library/response.mjs";

export default class AuthController {
    #authService;
    constructor() {
        this.#authService = new AuthService();
    }

    generateAccess(req, res) {
        const { user, type, shop, service } = req.body;
        return response.success(res, {hmac: this.#authService.auth(user, type, shop, service)});
    }

    verifyAccess(req, res) {
        const { user, type, shop, service, hmac } = req.body;
        const jwt = this.#authService.verifyAuth(user, type, shop, service, hmac);
        if (!jwt.access) {
            return response.unauthorized(res, {message: 'invalid token'});
        }
        
        return response.success(res, {token: jwt.token});
    }
}