function evaporator(content, evap_per_day, threshold) {
  threshold = threshold / 100;
  evap_per_day = evap_per_day / 100;
  return Math.ceil(Math.log(threshold) / Math.log(1 - evap_per_day));
}
