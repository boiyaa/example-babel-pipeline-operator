function double(x) {
  return x + x;
}

function add(x, y) {
  return x + y;
}

function boundScore(min, max, score) {
  return Math.max(min, Math.min(max, score));
}

const score = 25;

const result1 = boundScore(0, 100, add(7, double(score)));

const result2 = score
  |> double
  |> (_ => add(7, _))
  |> (_ => boundScore(0, 100, _));

// ? partial application syntax
// https://github.com/tc39/proposal-pipeline-operator/#usage-with--partial-application-syntax
// It does not work.
// const result2 = score
//   |> double
//   |> add(7, ?)
//   |> boundScore(0, 100, ?);

console.log(result1);
console.log(result2);
