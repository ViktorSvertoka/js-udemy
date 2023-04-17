'use strict';

// We are creating a soccer betting app ⚽💰!
// Let's say we are getting data about a specific game from a web service (the game variable below).
// In this task, we will work with this data.

const game = {
  team1: 'REAL MADRID',
  team2: 'BARCELONA',
  players: [
    [
      'Courtois',
      'Vazquez',
      'Militao',
      'Nacho',
      'Mendy',
      'Casemiro',
      'Valverde',
      'Modrich',
      'Kroos',
      'Vinicius',
      'Benzema',
    ],
    [
      'Stegen',
      'Mingueza',
      'Araujo',
      'Lenglet',
      'Dest',
      'Busquets',
      'Jong',
      'Alba',
      'Messi',
      'Pedri',
      'Dembele',
    ],
  ],
  score: '2:1',
  scored: ['Kroos', 'Benzema', 'Mingueza'],
  date: 'Apr 10th, 2021',
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
};

// 1. Create separate arrays with players for each team (variables players1 and players2).

const [players1, players2] = game.players;
console.log(players1, players2);

// const players1 = [...game.players[0]];
// console.table(players1);

// const players2 = [...game.players[1]];
// console.table(players2);

// 2. The first player in each of these arrays is the goalkeeper and the rest are the field players.
// For REAL MADRID(team1) create one variable(goalkeeper) with the name of the goalkeeper
// and one array(fieldPlayers) with all the remaining 10 field players.

const [goalkeeper, ...fieldPlayers] = players1;
console.log(goalkeeper, fieldPlayers);

// const goalkeeper = players1[0];
// console.log(goalkeeper);

// let fieldPlayers = [...players1];
// fieldPlayers.shift(0);
// console.log(fieldPlayers);

// 3. Create an array allPlayers containing all players from both teams (22 players).

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. REAL MADRID(team1) used 5 substitute players during the game.
// Create a new array(players1Total) containing all original players
// of team1 as well as ‘Marcelo’, 'Isco', 'Asensio', ‘Diaz' and 'Odriozola'.

const players1Total = [
  ...players1,
  'Marcelo',
  'Isco',
  'Asensio',
  'Diaz',
  'Odriozola',
];

console.log(players1Total);

// 5. Based on the game.odds object, create one variable for each odd (called team1, draw and team2).

// const {
//   odds: { team1, draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const chance1 = game.odds.team1;
// console.log(chance1);

// const chance2 = game.odds.draw;
// console.log(chance2);

// const chance3 = game.odds.team2;
// console.log(chance3);

// 6. A write function printGoals that takes an arbitrary number of player names(NOT an array)
// and prints each one to the console along with the total number of goals
// scored(the number of player names passed to the function).

function printGoals(...players) {
  console.log(`${players.length} goals were scored in the game.`);
  players.forEach(player => console.log(player));
}

printGoals(...game.scored);

// 7. The team with the lower odds will win more likely.
// Print to the console which team is more likely to win,
// WITHOUT using an if / else or ternary operator.

const {
  odds: { team1, team2 },
} = game;
const likelyWinner = (team1 < team2 && game.team1) || game.team2;

console.log(`${likelyWinner} is more likely to win the game`);
