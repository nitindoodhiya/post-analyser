const redis = require("../modules/redis");

const limitCount = 10;

function analyseText(text) {
  const words = text.split(/\s+/);
  const totalLength = words.reduce(
    (prefixLength, word) => prefixLength + word.length,
    0
  );

  return { count: words.length, averageLength: totalLength / words.length };
}

function newExipryDate() {
  return 60 * 60 * 24 * 3;
}

async function updateCacheExpiry(id) {
  await redis.expire(id, newExipryDate());
}

function addToCache(key, data) {
  return redis.setKey(key, { data, frequency: 1 }, newExipryDate());
}

async function analyser(post) {
  const { id } = post;
  const cache = await redis.getValue(id);
  if (cache) {
    await updateCacheExpiry(id, cache);
    return cache.data;
  }

  const data = analyseText(post.content);
  await addToCache(id, data);
  const res = await redis.getValue(id);
  console.log({ res });
  return data;
}

module.exports = analyser;
