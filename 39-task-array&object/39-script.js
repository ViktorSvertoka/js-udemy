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
const players1 = [...game.players[0]];
console.log(players1);

const players2 = [...game.players[1]];
console.log(players2);

// 2. The first player in each of these arrays is the goalkeeper and the rest are the field players.
// For REAL MADRID(team1) create one variable(goalkeeper) with the name of the goalkeeper
// and one array(fieldPlayers) with all the remaining 10 field players.

const goalkeeper = players1[0];
console.log(goalkeeper);

const fieldPlayers = [...players1];
console.log(fieldPlayers);
