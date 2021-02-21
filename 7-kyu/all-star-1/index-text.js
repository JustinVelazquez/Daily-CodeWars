describe("Tests", () => {
    it("test", () => {
  function NBAplayer(name, team, ppg){
    this.name=name;
    this.team=team;
    this.ppg=ppg;
  }
  
  var iverson = new NBAplayer("Iverson", "76ers", 11.2);
  var jordan = new NBAplayer("Jordan", "bulls", 20.2);
  Test.assertEquals(sumPPG(iverson, jordan), 31.4);
    });
  });
  