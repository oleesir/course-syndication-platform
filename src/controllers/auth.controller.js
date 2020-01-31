/* eslint-disable import/prefer-default-export */
import { signUpUserService, loginUserService } from '../services/auth.service';
import { unauthorizedError, success, conflictError } from '../utils/response.utils';
import { Errors } from '../constants';


const registerUser = async (req, res) => {
  try {
    const newUser = await signUpUserService(req.body);

    return success(res, newUser, 201);
  } catch (err) {
    if (err.message === Errors.EXISTING_USER) {
      return conflictError(res, 'User with that email already exists');
    }
  }
};

const loginUser = async (req, res) => {
  try {
    const loggedInUser = await loginUserService(req.body);

    return success(res, loggedInUser, 200);
  } catch (err) {
    if (err.message === Errors.UNAUTHORISED_USER) {
      return unauthorizedError(res, 'Email or password is incorrect');
    }
  }
};

export { registerUser, loginUser };
