function double(x) {
  return x + x;
}

function add(x) {
  return function(y) {
    return x + y;
  };
}

function boundScore(min) {
  return function(max) {
    return function(score) {
      return Math.max(min, Math.min(max, score));
    };
  };
}

const score = 25;

const result1 = boundScore(0)(100)(add(7)(double(score)));

const result2 = score
  |> double
  |> add(7)
  |> boundScore(0)(100);

console.log(result1);
console.log(result2);
