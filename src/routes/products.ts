import express from 'express';
import { getProducts, getProductsByTeam, addProduct } from '../controllers/productController';
import { auth } from '../middleware/auth';
import { createProductSchema, teamProductsSchema, validate } from '../config/validation';

const router = express.Router();

router.get('/', auth, getProducts);
router.get('/team/:team', auth, validate(teamProductsSchema), getProductsByTeam);
router.post('/', auth, validate(createProductSchema), addProduct);

export default router;