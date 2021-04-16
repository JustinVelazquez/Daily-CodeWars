function sortBytes(uint32) {
  return parseInt(
    uint32
      .toString(16)
      .padStart(8, '0')
      .match(/../g)
      .sort((a, b) => b.localeCompare(a))
      .join(''),
    16
  );
}
