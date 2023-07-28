import CryptoJS from 'crypto-js';

export default class AuthService {

    auth(user, type, shop, service) {
        const message = `${user}-${type}-${shop}-${service}`;
        return this.#generateHmac(message);
    }

    #generateHmac(message) {
        const hmac = CryptoJS.HmacSHA256(message, process.env.HMAC);
        return hmac.toString(CryptoJS.enc.Base64);
    }
}