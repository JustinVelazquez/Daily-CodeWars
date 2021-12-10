function inviteMoreWomen(L) {
  //coding and coding..
  let menCount = 0;
  let womenCount = 0;

  L.forEach(function (person) {
    person == 1 ? menCount++ : womenCount++;
  });

  return womenCount >= menCount ? false : true;
}
