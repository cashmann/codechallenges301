function find_average(array) {
  // your code here
  return array.reduce((acc, val) => val + acc, 0)/array.length;
}