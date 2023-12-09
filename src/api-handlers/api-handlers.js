const posts = require("./handlers/posts");
const analysis = require("./handlers/analysis");

function apiHandlers(app) {
  app.post("/posts", posts);
  app.get("/:id/analysis", analysis);
}

module.exports = apiHandlers;
