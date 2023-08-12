const validationMiddleware = (schema) => {
  return async (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });

    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");

      const updateMessage = details?.reduce(
        (prev, curr) => ({
          ...prev,
          ...{
            [curr.context.key]: curr.message,
          },
        }),
        {}
      );

      res.status(422).send({ message: message, error: updateMessage });
    }
  };
};
module.exports = validationMiddleware;
