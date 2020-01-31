import { Schema, model } from 'mongoose';

const LoginSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    required: true,
    default: Date.now
  },
  lastModifiedOn: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const Login = model('Login', LoginSchema);

export default Login;
