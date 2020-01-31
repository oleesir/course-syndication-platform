/* eslint-disable import/prefer-default-export */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const saltRounds = 10;

const encryptPassword = async (password) => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    throw error;
  }
};

const generateToken = payload => jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1day' });

const comparePassword = (password, hash) => bcrypt.compareSync(password, hash);

export { encryptPassword, generateToken, comparePassword };
