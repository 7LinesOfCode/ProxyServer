const errorHandler = (error, req, res, next) => {
  console.error(error);

  const { code, message } = error;

  const statusCode = code || 500;

  res.status(code).json({
    error: {
      code: statusCode,
      message,
    },
  });
};

export default errorHandler;
