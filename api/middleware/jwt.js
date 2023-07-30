import jwt from 'jsonwebtoken';
import response from '../library/response.mjs';

/**
 * class VerifyJwt
 * @author Brian
 * verifies the jwt
 */
export default class VerifyJwt {
    /**
     * 
     * @param {express req} req 
     * @param {express res} res 
     * @param {express next} next 
     * @returns json | continue code
     */
    static verifyJwtToken(req, res, next) {
        const token = req.headers['x-access-token'];

        if (!token) {
            return response.unauthorized(res, {message: 'missing token'}, 403);
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT);
            req.user = decoded;
        } catch (err) {
            return response.unauthorized(res, {message: 'invalid token'})
        }

        return next();
    }
}