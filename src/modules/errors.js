const UserError = (message, code) => ({
  message,
  code,
});

const InternalServerError = (
  message = "Internal Server Error",
  code = 500
) => ({ message, code });

module.exports = { UserError, InternalServerError };
