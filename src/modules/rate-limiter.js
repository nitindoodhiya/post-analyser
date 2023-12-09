const redis = require("../modules/redis");
const limit = 10;

async function rateLimiter(req, res, next) {
  const timestamp = Math.floor(new Date() / 1000);
  const ip = req.socket.remoteAddress;
  const key = `${ip}_${timestamp}`;
  const currentQPS = await redis.incr(key);

  console.log({ currentQPS, key });
  if (currentQPS >= limit) {
    res.status(429).json({ errMessage: "Too Many Requests" });
  } else return next();
}

module.exports = rateLimiter;
