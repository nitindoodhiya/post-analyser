const { UserError } = require("../../modules/errors");

const response = (object) => res.status(200).json(object);

function validateInput(id, content) {
  if (!id || !content) {
    return response(UserError("Empty Input Received", 400));
  }
}

module.exports = async (req, res) => {
  const { id, content } = req?.body;
  const error = validateInput(id, content);
  if (!error) return error;

  return response({ result: 1 });
};
