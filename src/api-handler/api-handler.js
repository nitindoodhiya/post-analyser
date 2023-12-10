const posts = require("./handlers/posts");
const analysis = require("./handlers/analysis");

function apiHandler(app) {
  app.post("/api/v1/posts/", posts);
  app.get("/api/v1/posts/:id/analysis", analysis);
}

module.exports = apiHandler;
