import express from 'express';

const router = express.Router();

router.post('/auth', (req, res) => {
    return res.status(200).json({hmac: 'hmac'});
})

export default router;