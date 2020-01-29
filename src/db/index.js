import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const {
  DATABASE_URL_DEV,
  DATABASE_URL_TEST,
  DATABASE_URL_PROD,
} = process.env;

const env = process.env.NODE_ENV || 'dev';

const environment = {
  dev: DATABASE_URL_DEV,
  test: DATABASE_URL_TEST,
  production: DATABASE_URL_PROD
};

const databaseString = environment[env];

const connectToDb = async () => {
  await mongoose
    .connect(databaseString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

  console.log('Database connected');
};

connectToDb();

const db = mongoose.connection;

export default db;
