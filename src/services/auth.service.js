/* eslint-disable import/named */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import User from '../db/models/index';
import { encryptPassword, generateToken, comparePassword } from '../middlewares/encryption';
import { findEmail } from './model.service';
import { Errors } from '../constants';


const signUpUserService = async (obj) => {
  try {
    const existingUser = await findEmail(User, obj.email);

    if (existingUser) {
      throw new Error(Errors.EXISTING_USER);
    }

    const encryptedPassword = await encryptPassword(obj.password);
    const newUserDetails = {
      ...obj,
      password: encryptedPassword
    };

    const newUser = await User.create(newUserDetails);

    const dataForToken = { id: newUser._id, email: newUser.email };

    const token = generateToken(dataForToken);

    const data = {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      token
    };

    return data;
  } catch (error) {
    throw error;
  }
};

const loginUserService = async ({ email, password }) => {
  try {
    const existingUser = await findEmail(User, email);

    if (!existingUser) {
      throw new Error(Errors.UNAUTHORISED_USER);
    }

    if (existingUser) {
      const verifyUserPassword = await comparePassword(password, existingUser.password);

      if (!verifyUserPassword) {
        throw new Error(Errors.UNAUTHORISED_USER);
      }

      const dataForToken = { id: existingUser._id, email: existingUser.email };

      const token = generateToken(dataForToken);

      const data = {
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email,
        token
      };

      return data;
    }
  } catch (error) {
    throw error;
  }
};

export { signUpUserService, loginUserService };
