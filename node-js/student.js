const getName = (number) => {
  console.log(number);
  return "Anisul Islam";
};
const getAge = () => {
  return "25";
};
const result = 80;
// exports.getName = getName;
// exports.getAge = getAge;
// exports.result = result;
module.exports = {
  getName,
  getAge,
  result,
};
