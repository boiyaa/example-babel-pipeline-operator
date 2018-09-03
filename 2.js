function doubleSay(str) {
  return str + ", " + str;
}
function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim(str) {
  return str + "!";
}

const value = "hello";

const result1 = exclaim(capitalize(doubleSay(value)));

const result2 = value
  |> doubleSay
  |> capitalize
  |> exclaim;

console.log(result1);
console.log(result2);
