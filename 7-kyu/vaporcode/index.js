function vaporcode(string) {
  // console.log(string.toUpperCase().split(' ').join('').split('').join('  '))

  return Array.from(string.replace(/\s+/g, '').toUpperCase()).join('  ');
}
