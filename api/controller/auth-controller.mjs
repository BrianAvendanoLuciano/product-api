import AuthService from "../service/auth-service.mjs";

export default class AuthController {
    #authService;
    constructor() {
        this.#authService = new AuthService();
    }

    generateAccess(req, res) {
        const { user, type, shop, service } = req.body;
        return res.status(200).json(this.#authService.auth(user, type, shop, service));
    }
}