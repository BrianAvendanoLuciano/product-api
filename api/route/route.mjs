import express from 'express';
import { body, validationResult  } from 'express-validator';
import VerifyJwt from '../middleware/jwt.mjs';

import AuthController from '../controller/auth-controller.mjs';
import ProductController from '../controller/product-controller.mjs';

const router = express.Router();
const apiRoute = '/api/v1';

// auth controller
const authController = new AuthController();
// route for generating hmac
router.post('/auth', body(['user', 'type', 'shop', 'service', 'request_date']).notEmpty(), (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(409).json({
            result: 'required_fied',
            error: result.array()
        })
    }

    return authController.generateHMAC(req, res);
})
// route for generating jwt
router.post('/jwt', body(['user', 'type', 'shop', 'service', 'request_date', 'hmac']).notEmpty(), (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(409).json({
            result: 'required_fied',
            error: result.array()
        })
    }

    return authController.generateJWT(req, res);
})

// prouct search controller
const productController = new ProductController();
router.get(`${apiRoute}/products`, VerifyJwt.verifyJwtToken, async (req, res) => {
    return await productController.get(req, res);
})

export default router;