import { validationResult, matchedData } from 'express-validator';

const validateResult = (req, res, next) => {
  req = { ...req, ...matchedData(req) };
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const mappedErrors = Object.entries(errors.mapped()).reduce((acc, [key, value]) => {
      acc[key] = value.msg;
      return acc;
    }, {});

    return res.status(400).json({ status: 400, error: mappedErrors });
  }
  next();
};

export default validateResult;
