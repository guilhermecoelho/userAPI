import express from 'express';

import CheckauthController from '../controllers/checkauth';

const router = express.Router();

const checkauthController = new CheckauthController();

router.post('/', (req, res) => checkauthController.checkauth(req, res));

export default router;