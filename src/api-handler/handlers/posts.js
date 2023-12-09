const { UserError, errorHandler } = require("../../modules/errors");

const queryExecutor = require("../../modules/query-executor");

const response = (res, object) => res.status(200).json(object);

function validateInput(id, content, res) {
  if (!id || !content) {
    throw new UserError("Empty Input");
  }
}

async function insertPost(id, content) {
  const query = "INSERT INTO posts (id, content) VALUES (?, ?)";
  try {
    await queryExecutor(query, [id, content]);
  } catch (error) {
    if (error.code !== "ER_DUP_ENTRY") throw error;
  }
}

const posts = async (req, res) => {
  const { id, content } = req?.body;
  validateInput(id, content);
  await insertPost(id, content);
  return response(res, { success: true });
};

module.exports = async (req, res) => {
  try {
    return await posts(req, res);
  } catch (error) {
    const errorResponse = errorHandler(error);
    return response(res, errorResponse);
  }
};
