// This is inclusive of both start and end
function randomInclusive(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

// This is inclusive of start, exclusive of end
function randomExclusive(start, end) {
  return Math.floor(Math.random() * (end - start)) + start;
}

module.exports = {
  randomExclusive,
  randomInclusive,
};
