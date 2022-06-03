import Joi from "joi";
const validateJobPostCreate = (input: object) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    color: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.boolean(),
    imageUrl: Joi.string().optional(),
    tags: Joi.array().items(Joi.string()).min(1),
  });

  return schema.validate(input);
};
export { validateJobPostCreate };
