const { UserError } = require("../../modules/errors");

const response = (object) => res.status(200).json(object);

module.exports = async (req, res) => {
  const { id, content } = req?.body;
  if (!id || !content) {
    return response(UserError("Empty Input Received", 400));
  }

  return response({ result: 1 });
};
