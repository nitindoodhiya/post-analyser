const posts = require("./handlers/posts");
const analysis = require("./handlers/analysis");

function apiHandler(app) {
  app.post("/posts", posts);
  app.get("/:id/analysis", analysis);
}

module.exports = apiHandler;
