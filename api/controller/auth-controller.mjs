import AuthService from "../service/auth-service.mjs";

export default class AuthController {
    #authService;
    constructor() {
        this.#authService = new AuthService();
    }

    generateAccess(req, res) {
        const { user, type, shop, service } = req.body;
        return res.status(200).json({
            result: 'success',
            hmac: this.#authService.auth(user, type, shop, service)
        });
    }

    verifyAccess(req, res) {
        const { user, type, shop, service, hmac } = req.body;
        const jwt = this.#authService.verifyAuth(user, type, shop, service, hmac);
        if (!jwt.access) {
            return res.status(401).json({
                result: 'unauthorized',
                message: 'invalid token'
            })
        }
        return res.status(200).json({
            result: 'success',
            token: jwt.token
        });
    }
}