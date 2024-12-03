import express from 'express';
import { register, login } from '../controllers/authController';
import { loginUserSchema, registerUserSchema, validate } from '../config/validation';

const router = express.Router();

router.post('/register',validate(registerUserSchema), register);
router.post('/login',validate(loginUserSchema), login);

export default router;