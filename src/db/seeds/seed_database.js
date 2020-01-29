/* eslint-disable no-empty */
import User from '../models/userSchema';
import { users } from './seeds';
import db from '../index';

const seedUsers = async () => {
  try {
    await User.insertMany(users);
    return;
  } catch (error) {
    throw error;
  }
};

const seedData = async () => {
  try {
    await seedUsers();
  } catch (error) {
  } finally {
    db.close();
  }
};

seedData();
