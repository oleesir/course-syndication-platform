/* eslint-disable import/prefer-default-export */
export const badRequestError = (res, error, code = 400) => res.status(code).json({
  status: code,
  error
});

export const unauthorizedError = (res, error) => res.status(401).json({
  status: 401,
  error
});

export const conflictError = (res, error) => res.status(409).json({
  status: 409,
  error
});

export const success = (res, data, code = 200) => res.status(code).json({
  status: code,
  data
});

export default {
  badRequestError, unauthorizedError, conflictError, success
};
