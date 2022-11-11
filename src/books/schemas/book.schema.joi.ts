import * as Joi from 'joi';

const joiBookSchema = Joi.object().keys({
  name: Joi.string().min(1).required(),
  author: Joi.string().min(1).required(),
  pages: Joi.number().min(1).optional(),
  price: Joi.number().min(1).optional(),
  barcode: Joi.string().min(1).required(),
});

export { joiBookSchema };
