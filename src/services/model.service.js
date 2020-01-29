/* eslint-disable import/prefer-default-export */

const findEmail = async (model, item) => {
  const getItem = await model.findOne({ email: item });
  return getItem;
};

export { findEmail };
