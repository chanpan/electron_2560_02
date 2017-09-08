exports.CheckFieldInTable = (localField, serverField) => {
  var arr1 = [];
  var arr2 = [];
  var out = [];
  for (let i of localField) {
    arr1.push(i); //sqlite local
  }
  for (let i of serverField) {
    arr2.push(i); //ezform server
  }
  for (let i of arr2) {
    var a = arr1.indexOf(i);
    if (a == -1) {
      out.push(i);
    }
  }
  return out;
};
