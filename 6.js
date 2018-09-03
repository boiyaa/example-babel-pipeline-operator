import curry from "lodash.curry";

function double(x) {
  return x + x;
}

function addOrig(x, y) {
  return x + y;
}

function boundScoreOrig(min, max, score) {
  return Math.max(min, Math.min(max, score));
}

const add = curry(addOrig);
const boundScore = curry(boundScoreOrig);

const score = 25;

const result1 = boundScore(0)(100)(add(7)(double(score)));

const result2 = score
  |> double
  |> add(7)
  |> boundScore(0)(100);

console.log(result1);
console.log(result2);
