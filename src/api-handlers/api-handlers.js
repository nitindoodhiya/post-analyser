const posts = require("./handlers/posts");

function apiHandlers(app) {
  app.post("/posts", posts);
}
module.exports = apiHandlers;
