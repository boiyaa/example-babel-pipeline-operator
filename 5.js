const double = x => x + x;

const add = x => y => x + y;

const boundScore = min => max => score => Math.max(min, Math.min(max, score));

const score = 25;

const result1 = boundScore(0)(100)(add(7)(double(score)));

const result2 = score
  |> double
  |> add(7)
  |> boundScore(0)(100);

console.log(result1);
console.log(result2);
