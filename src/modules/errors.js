class UserError extends Error {
  constructor(message) {
    super(message);
    this.extensions = {
      isUserError: true,
      code: 400,
      errMessage: message,
    };
  }
}

module.exports = { UserError };
