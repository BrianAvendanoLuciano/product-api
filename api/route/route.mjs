import express from 'express';

import AuthController from '../controller/auth-controller.mjs';

const router = express.Router();


const authController = new AuthController();
router.post('/auth', (req, res) => {
    return authController.generateAccess(req, res);
})

export default router;