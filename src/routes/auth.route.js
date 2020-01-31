import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/auth.controller';
import validateResult from '../middlewares/validator.middleware';
import validationSchema from '../validations/authSchema';

const router = Router();
const { registerUserSchema, loginUserSchema } = validationSchema;

router.post('/signup', registerUserSchema, validateResult, registerUser);
router.post('/signin', loginUserSchema, validateResult, loginUser);

export default router;
