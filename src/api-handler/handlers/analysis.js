const analyser = require("../../modules/analyser");
const { NotFoundError, errorHandler } = require("../../modules/errors");
const queryExecutor = require("../../modules/query-executor");

const response = (res, object) => res.status(200).json(object);

async function fetchPost(id) {
  const query = "SELECT *  FROM posts WHERE id=?";
  try {
    const [result] = await queryExecutor(query, [id]);
    return result ? result[0] : null;
  } catch (error) {
    throw error;
  }
}

const analysis = async (req, res) => {
  const { id } = req.params;
  const post = await fetchPost(id);
  if (!post) throw new NotFoundError("Invalid Post");
  const analysis = await analyser(post);
  return response(res, analysis);
};

module.exports = async (req, res) => {
  try {
    return await analysis(req, res);
  } catch (error) {
    const errorResponse = errorHandler(error);
    return response(res, errorResponse);
  }
};
