import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    enum: ['regular', 'admin'],
    default: 'regular'
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

const User = model('User', UserSchema);

export default User;
