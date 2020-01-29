/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import User from '../db/models/index';
import { encryptPassword, generateToken } from '../middlewares/encryption';

const signUpUserService = async (obj) => {
  try {
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

export { signUpUserService };
