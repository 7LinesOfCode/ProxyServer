import Exception from "../Utils/Exception.js";

export const validate = (schema) => {
  return (req, res, next) => {
    const data = req.method === "GET" ? req.query : req.body;
    const { error } = schema.validate(data, { abortEarly: true });

    if (error) {
      next(
        new Exception(
          400,
          `Validation error: ${error.details.map((detial) => detial.message)}`
        )
      );
    }

    next();
  };
};
