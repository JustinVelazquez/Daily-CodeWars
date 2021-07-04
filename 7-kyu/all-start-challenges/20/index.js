function addArrays(array1, array2) {
  //code here
  if (array1.length != array2.length) throw new Error();
  return array1.map((a, i) => array1[i] + array2[i]);
}
