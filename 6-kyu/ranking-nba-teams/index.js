var r1 =
  'Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112,' +
  'Los Angeles Lakers 111 Minnesota Timberwolves 112,Phoenix Suns 95 Dallas Mavericks 111,Portland Trail Blazers 112 New Orleans Pelicans 94,' +
  'Sacramento Kings 104 Los Angeles Clippers 111,Houston Rockets 85 Denver Nuggets 105,Memphis Grizzlies 76 Cleveland Cavaliers 106,' +
  'Milwaukee Bucks 97 New York Knicks 122,Oklahoma City Thunder 112 San Antonio Spurs 106,Boston Celtics 112 Philadelphia 76ers 95,' +
  'Brooklyn Nets 100 Chicago Bulls 115,Detroit Pistons 92 Utah Jazz 87,Miami Heat 104 Charlotte Hornets 94,' +
  'Toronto Raptors 106 Indiana Pacers 99,Orlando Magic 87 Washington Wizards 88,Golden State Warriors 111 New Orleans Pelicans 95,' +
  'Atlanta Hawks 94 Detroit Pistons 106,Chicago Bulls 97 Cleveland Cavaliers 95,';

var r2 =
  'San Antonio Spurs 111 Houston Rockets 86,Chicago Bulls 103 Dallas Mavericks 102,Minnesota Timberwolves 112 Milwaukee Bucks 108,' +
  'New Orleans Pelicans 93 Miami Heat 90,Boston Celtics 81 Philadelphia 76ers 65,Detroit Pistons 115 Atlanta Hawks 87,' +
  'Toronto Raptors 92 Washington Wizards 82,Orlando Magic 86 Memphis Grizzlies 76,Los Angeles Clippers 115 Portland Trail Blazers 109,' +
  'Los Angeles Lakers 97 Golden State Warriors 136,Utah Jazz 98 Denver Nuggets 78,Boston Celtics 99 New York Knicks 85,' +
  'Indiana Pacers 98 Charlotte Hornets 86,Dallas Mavericks 87 Phoenix Suns 99,Atlanta Hawks 81 Memphis Grizzlies 82,' +
  'Miami Heat 110 Washington Wizards 105,Detroit Pistons 94 Charlotte Hornets 99,Orlando Magic 110 New Orleans Pelicans 107,' +
  'Los Angeles Clippers 130 Golden State Warriors 95,Utah Jazz 102 Oklahoma City Thunder 113,San Antonio Spurs 84 Phoenix Suns 104,' +
  'Chicago Bulls 103 Indiana Pacers 94,Milwaukee Bucks 106 Minnesota Timberwolves 88,Los Angeles Lakers 104 Portland Trail Blazers 102,' +
  'Houston Rockets 120 New Orleans Pelicans 100,Boston Celtics 111 Brooklyn Nets 105,Charlotte Hornets 94 Chicago Bulls 86,Cleveland Cavaliers 103 Dallas Mavericks 97';
function nbaCup(resultSheet, toFind) {
  //   // We take in a list of strings concated together... and an team argument(toFind) to search for in our list
  //   // The String contains team names, scores and results. Teams are 1-2 words and game results are sepearted by commas
  //   //We want to return a string of the wins/losses/draws/etc for the team provided as an arguement
  //   // The returning values for the stats must be a int and if a flaot we return an error
  //   //If the team name cant be found we return an Error string

  //   //Examples
  //   // nba_cup(r, "Los Angeles Clippers") -> "Los Angeles Clippers:W=1;D=0;L=1;Scored=204;Conceded=208;Points=3"
  //   // nba_cup(r, "Boston Celtics") -> "Boston Celtics:W=1;D=0;L=0;Scored=120;Conceded=100;Points=3"

  let games = resultSheet.split(',');
  let allGames = [];
  //   console.log(games);
  games.forEach((game, idx) => {
    allGames.push(parseGame(game));
  });
  console.log(allGames);
  const teamGames = getScoresByTeam(toFind, allGames);
  //   console.log(teamGames);
}

const parseGame = (game) => {
  const data = {};
  const gameArr = game.split(' ');
  let team = '';
  gameArr.forEach((item) => {
    if (isNaN(item)) {
      team += `${item} `;
    } else {
      const score = parseFloat(item);
      data[team.trim()] = score;
      team = '';
    }
  });
  return data;
};

const getScoresByTeam = (team, allGames) => {
  const arrResults = [];
  allGames.forEach((game) => {
    const oneGame = [];
    if (team in game) {
      oneGame.push(team, game[team]);

      delete game[team];
      oneGame.push(Object.keys(game)[0], Object.values(game)[0]);

      arrResults.push(oneGame);
    }
  });
  return arrResults;
  //   console.log(arrResults);
};

nbaCup(r2, 'Boston Celtics');

//   const nbaCup = (resultSheet, toFind) => {
//     if (!toFind) return '';
//     const results = resultSheet.split(',');
//     const allGames = [];
//     results.forEach((game, idx) => {
//       allGames.push(parseGame(game));
//     });
//     const teamGames = getScoresByTeam(toFind, allGames);
//     if (!teamGames.length) {
//       return `${toFind}:This team didn't play!`;
//     } else {
//       let w = 0;
//       let d = 0;
//       let l = 0;
//       let scored = 0;
//       let conceded = 0;
//       let points = 0;
//       for (let i = 0; i < teamGames.length; i += 1) {
//         const game = teamGames[i];
//         if (game[1] % 1 !== 0 || game[3] % 1 !== 0) {
//           return `Error(float number):${game[2]} ${game[3]} ${game[0]} ${game[1]}`;
//         }
//         scored += game[1];
//         conceded += game[3];
//         // Winning
//         if (game[1] > game[3]) {
//           w += 1;
//           points += 3;
//         }
//         // Losses
//         if (game[1] < game[3]) {
//           l += 1;
//         }
//         // Draws
//         if (game[1] === game[3]) {
//           d += 1;
//           points += 1;
//         }

//       }
//       return `${toFind}:W=${w};D=${d};L=${l};Scored=${scored};Conceded=${conceded};Points=${points}`;
//     }
//   }
