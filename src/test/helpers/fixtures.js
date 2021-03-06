/* eslint-disable import/prefer-default-export */
const newUser = {
  firstName: 'ryan',
  lastName: 'gosling',
  email: 'ryan@gmail.com',
  password: 'ryangosl'
};

const emptyUser = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

const emptyFirstName = {
  ...newUser, firstName: ''
};

const emptyLastName = {
  ...newUser, lastName: ''
};

const emptyEmail = {
  ...newUser, email: ''
};

const emptyPassword = {
  ...newUser, password: ''
};

const nonAlphabetFirstName = {
  ...newUser, firstName: '#^%$7'
};

const nonAlphabetLastName = {
  ...newUser, lastName: '!@#$@66'
};

const invalidEmail = {
  ...newUser, email: 'ojuemail.com'
};

const invalidPassword = {
  ...newUser, password: '12sda'
};

const existingEmail = {
  ...newUser, email: 'ryan@gmail.com'
};

const authUser = {
  email: 'ryan@gmail.com',
  password: 'ryangosl'
};

const emptyAuthUser = {
  email: '',
  password: ''
};

const emptyEmailAuthUser = {
  ...authUser, email: ''
};

const emptyPasswordAuthUser = {
  ...authUser, password: ''
};

const wrongEmail = {
  ...authUser, email: 'ling@gmail.com'
};

const wrongPassword = {
  ...authUser, password: 'jigtfjijjuhi'
};

const wrongEmailAuthUser = {
  ...authUser, email: 'ryangmail.com'
};


export {
  newUser,
  emptyUser,
  emptyFirstName,
  emptyLastName,
  emptyEmail,
  emptyPassword,
  nonAlphabetFirstName,
  nonAlphabetLastName,
  invalidEmail,
  invalidPassword,
  existingEmail,
  authUser,
  emptyAuthUser,
  emptyEmailAuthUser,
  emptyPasswordAuthUser,
  wrongEmail,
  wrongPassword,
  wrongEmailAuthUser
};
