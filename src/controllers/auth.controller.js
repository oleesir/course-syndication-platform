/* eslint-disable import/prefer-default-export */
import { signUpUserService } from '../services/auth.service';
import { findEmail } from '../services/model.service';
import User from '../db/models/userSchema';


const registerUser = async (req, res) => {
  const existingUser = await findEmail(User, req.body.email);

  if (existingUser) {
    return res.status(409).json({
      status: 409,
      error: 'User with that email already exists'
    });
  }

  const newUser = await signUpUserService(req.body);

  return res.status(201).json({ status: 201, newUser });
};

export { registerUser };
