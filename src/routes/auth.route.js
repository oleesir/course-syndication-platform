import { Router } from 'express';
import { registerUser } from '../controllers/auth.controller';
import validateResult from '../middlewares/validator.middleware';
import validationSchema from '../validations/authSchema';

const router = Router();
const { registerUserSchema } = validationSchema;

router.post('/signup', registerUserSchema, validateResult, registerUser);

export default router;
