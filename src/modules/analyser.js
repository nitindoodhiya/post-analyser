function analyseText(text) {
  const words = text.split(/\s+/);
  const totalLength = words.reduce(
    (prefixLength, word) => prefixLength + word.length,
    0
  );

  return { count: words.length, average: totalLength / words.length };
}

function analyser(post) {
  return analyseText(post.content);
}

module.exports = analyser;
