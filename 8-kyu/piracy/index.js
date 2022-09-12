function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
}

//YOUR CO
Ship.prototype.isWorthIt = function () {
  //   let weight = this.draft - (this.crew * 1.5)
  //  return weight < 20 ? true : false
  return this.draft - this.crew * 1.5 > 20;
};
