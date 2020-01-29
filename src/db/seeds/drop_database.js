/* eslint-disable no-empty */
import dotenv from 'dotenv';
import User from '../models/userSchema';
import db from '../index';

dotenv.config();

const { NODE_ENV } = process.env;

const dropModels = async () => {
  const inProduction = NODE_ENV === 'production';

  if (inProduction) return false;

  try {
    await User.deleteMany({});
  } catch (error) {
  } finally {
    db.close();
  }
};

dropModels();
