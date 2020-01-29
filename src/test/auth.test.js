import '@babel/polyfill';
import request from 'supertest';
import app, { server } from '../app';
import db from '../db/index';
import {
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
  existingEmail
} from './helpers/fixtures';

const URL = '/api/v1/auth';

describe('Auth Routes', () => {
  afterAll(async () => {
    await server.close();
    await db.close();
  });

  describe('Signup Routes', () => {
    it('should signup a new user', (done) => {
      request(app)
        .post(`${URL}/signup`)
        .send(newUser)
        .expect(201)
        .end((err, res) => {
          expect(res.body.status).toBe(201);
          expect(res.body.newUser).toHaveProperty('firstName');
          expect(res.body.newUser).toHaveProperty('lastName');
          expect(res.body.newUser).toHaveProperty('email');
          expect(res.body.newUser).toHaveProperty('token');
          if (err) return done(err);
          done();
        });
    });

    it('should not register a new user with empty input fields', (done) => {
      request(app)
        .post(`${URL}/signup`)
        .send(emptyUser)
        .expect(400)
        .end((err, res) => {
          expect(res.body.status).toBe(400);
          expect(res.body.error.firstName).toBe('name should be between 2 to 30 characters');
          expect(res.body.error.lastName).toBe('name should be between 2 to 30 characters');
          expect(res.body.error.email).toBe('Enter a valid email address');
          expect(res.body.error.password).toBe('Password should be between 8 to 15 characters');
          if (err) return done(err);
          done();
        });
    });

    it('should not register a new user with an empty first name field', (done) => {
      request(app)
        .post(`${URL}/signup`)
        .send(emptyFirstName)
        .expect(400)
        .end((err, res) => {
          expect(res.body.error.firstName).toBe('name should be between 2 to 30 characters');
          if (err) return done(err);
          done();
        });
    });

    it('should not register a new user with an empty last name field', (done) => {
      request(app)
        .post(`${URL}/signup`)
        .send(emptyLastName)
        .expect(400)
        .end((err, res) => {
          expect(res.body.error.lastName).toBe('name should be between 2 to 30 characters');
          if (err) return done(err);
          done();
        });
    });


    it('should not register a new user with an empty email field', (done) => {
      request(app)
        .post(`${URL}/signup`)
        .send(emptyEmail)
        .expect(400)
        .end((err, res) => {
          expect(res.body.error.email).toBe('Enter a valid email address');
          if (err) return done(err);
          done();
        });
    });

    it('should not register a new user with an empty password field', (done) => {
      request(app)
        .post(`${URL}/signup`)
        .send(emptyPassword)
        .expect(400)
        .end((err, res) => {
          expect(res.body.error.password).toBe('Password should be between 8 to 15 characters');
          if (err) return done(err);
          done();
        });
    });

    it('should not register a new user with a non-alphabet firstName field', (done) => {
      request(app)
        .post(`${URL}/signup`)
        .send(nonAlphabetFirstName)
        .expect(400)
        .end((err, res) => {
          expect(res.body.error.firstName).toBe('name should only contain alphabets');
          if (err) return done(err);
          done();
        });
    });

    it('should not register a new user with a non-alphabet firstName field', (done) => {
      request(app)
        .post(`${URL}/signup`)
        .send(nonAlphabetFirstName)
        .expect(400)
        .end((err, res) => {
          expect(res.body.error.firstName).toBe('name should only contain alphabets');
          if (err) return done(err);
          done();
        });
    });

    it('should not register a new user with a non-alphabet lastName field', (done) => {
      request(app)
        .post(`${URL}/signup`)
        .send(nonAlphabetLastName)
        .expect(400)
        .end((err, res) => {
          expect(res.body.error.lastName).toBe('name should only contain alphabets');
          if (err) return done(err);
          done();
        });
    });

    it('should not register a new user with a non-alphabet lastName field', (done) => {
      request(app)
        .post(`${URL}/signup`)
        .send(nonAlphabetLastName)
        .expect(400)
        .end((err, res) => {
          expect(res.body.error.lastName).toBe('name should only contain alphabets');
          if (err) return done(err);
          done();
        });
    });

    it('should not register a new user with an invalid email field', (done) => {
      request(app)
        .post(`${URL}/signup`)
        .send(invalidEmail)
        .expect(400)
        .end((err, res) => {
          expect(res.body.error.email).toBe('Enter a valid email address');
          if (err) return done(err);
          done();
        });
    });

    it('should not register a new user with an invalid password length field', (done) => {
      request(app)
        .post(`${URL}/signup`)
        .send(invalidPassword)
        .expect(400)
        .end((err, res) => {
          expect(res.body.error.password).toBe('Password should be between 8 to 15 characters');
          if (err) return done(err);
          done();
        });
    });

    it('should not register a new user with an invalid password length field', (done) => {
      request(app)
        .post(`${URL}/signup`)
        .send(invalidPassword)
        .expect(400)
        .end((err, res) => {
          expect(res.body.error.password).toBe('Password should be between 8 to 15 characters');
          if (err) return done(err);
          done();
        });
    });


    it('should not register a new user with an already existing email', (done) => {
      request(app)
        .post(`${URL}/signup`)
        .send(existingEmail)
        .expect(409)
        .end((err, res) => {
          expect(res.body.error).toBe('User with that email already exists');
          if (err) return done(err);
          done();
        });
    });
  });
});
