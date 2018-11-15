import express from 'express';

import usersRoute from './users';
import loginRoute from './login';
import checkauthRoute from './checkauth';

const router = express.Router();

//router.get('/', (req, res) => res.send('hello'));
router.use('/users', usersRoute);
router.use('/login', loginRoute);
router.use('/checkauth', checkauthRoute);

export default router;  

