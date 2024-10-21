import Joi from "joi";

export const roversValidator = Joi.object({
  id: Joi.number().strict().required(),
  name: Joi.string().required(),
  api_key: Joi.string().required().messages({
    "any.required": "API key is required",
    "string.base": "API key must be a valid string",
  }),
});
