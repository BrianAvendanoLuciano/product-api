import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

/**
 * class AuthService
 * @author Brian
 * auth business logic
 */
export default class AuthService {

    /**
     * define message and creates an hmac
     * @param {object} param0 
     * @returns this.#generateHmac
     */
    auth({ user, type, shop, service, request_date }) {
        const message = `${user}-${type}-${shop}-${service}-${request_date}`;
        return this.#generateHmac(message);
    }

    /**
     * validates hmac and creates jwt
     * @param {object} param0 
     * @returns object
     */
    createJWT({ user, type, shop, service, request_date, hmac }) {
        const interval = Date.now() - request_date;

        // hmac will expire in 2 minutes
        if (interval > 0 && interval > 120000) {
            return {
                access: false,
                token: 'expired'
            }
        }

        if (this.auth({ user, type, shop, service, request_date }) != hmac) {
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

    /**
     * private method
     * creates hmac
     * @param {string} message 
     * @returns 
     */
    #generateHmac(message) {
        const hmac = CryptoJS.HmacSHA256(message, process.env.HMAC);
        return hmac.toString(CryptoJS.enc.Base64);
    }

    /**
     * private method
     * creates jwt
     * @param {string} user 
     * @param {string} type 
     * @param {string} shop 
     * @param {string} service 
     * @returns string (jwt)
     */
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