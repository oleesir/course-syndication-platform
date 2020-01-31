import { check } from 'express-validator';


export default {
  registerUserSchema: [
    check('firstName')
      .trim()
      .exists()
      .withMessage('firstname is required')
      .isLength({ min: 2, max: 30 })
      .withMessage('name should be between 2 to 30 characters')
      .isAlpha()
      .withMessage('name should only contain alphabets')
      .customSanitizer(name => name.toLowerCase()),
    check('lastName')
      .trim()
      .exists()
      .withMessage('lastname is required')
      .isLength({ min: 2, max: 30 })
      .withMessage('name should be between 2 to 30 characters')
      .isAlpha()
      .withMessage('name should only contain alphabets')
      .customSanitizer(name => name.toLowerCase()),
    check('email')
      .trim()
      .exists()
      .withMessage('Email address is required')
      .isEmail()
      .withMessage('Enter a valid email address')
      .customSanitizer(email => email.toLowerCase()),
    check('password')
      .trim()
      .exists()
      .withMessage('Password is required')
      .isLength({ min: 8, max: 15 })
      .withMessage('Password should be between 8 to 15 characters'),
  ],
  loginUserSchema: [
    check('email')
      .trim()
      .exists()
      .withMessage('Email address must be specified')
      .not()
      .isEmpty()
      .withMessage('Email address is required')
      .isEmail()
      .withMessage('Enter a valid email address')
      .customSanitizer(email => email.toLowerCase()),
    check('password')
      .trim()
      .exists()
      .withMessage('Password must be specified')
      .not()
      .isEmpty()
      .withMessage('Password is required')
      .isLength({ min: 8, max: 15 })
      .withMessage('Password should be between 8 to 15 characters'),
  ]
};
