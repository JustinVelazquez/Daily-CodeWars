function highAndLow(numbers) {
  let array = numbers.split(' ').sort((a, b) => b - a);
  return `${array[0]} ${array[array.length - 1]}`;
}
