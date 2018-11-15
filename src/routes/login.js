import express from 'express';

import User from '../models/user';

import LoginController from '../controllers/login';

const router = express.Router();
const loginController = new LoginController(User);

router.post('/', (req, res) => loginController.login(req, res));

export default router;