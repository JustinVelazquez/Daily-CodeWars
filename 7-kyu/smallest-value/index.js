function min(arr, toReturn) {
  let minValue = Math.min(...arr);
  return toReturn === 'value' ? minValue : arr.indexOf(minValue);
}
