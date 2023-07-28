import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

export default class AuthService {

    auth(user, type, shop, service) {
        const message = `${user}-${type}-${shop}-${service}`;
        return this.#generateHmac(message);
    }

    verifyAuth(user, type, shop, service, hmac) {
        if (this.auth(user, type, shop, service) != hmac) {
            return {
                access: false,
                token: null
            };
        }
        return {
            access: true,
            token: this.#generateJwt(user, type, shop, service)
        };
    }

    #generateHmac(message) {
        const hmac = CryptoJS.HmacSHA256(message, process.env.HMAC);
        return hmac.toString(CryptoJS.enc.Base64);
    }

    #generateJwt(user, type, shop, service) {
        return jwt.sign(
            { user, type, shop, service },
            process.env.JWT,
            {
                expiresIn: '2h'
            }
        )
    }
}