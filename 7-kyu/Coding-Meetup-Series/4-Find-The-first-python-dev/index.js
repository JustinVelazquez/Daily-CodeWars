function getFirstPython(list) {
  let dev = list.find((dev) => dev.language === 'Python');

  return dev
    ? `${dev.firstName}, ${dev.country}`
    : 'There will be no Python developers';
}
