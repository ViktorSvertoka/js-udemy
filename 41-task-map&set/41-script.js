'use strict';

// Let's get on with our soccer betting app ⚽💰!
// This time we have a map called events(see below) with a log of events that occurred during the game.
// The values ​​are the events themselves, and the keys are the minutes at which each event happened(the match had 90 minutes plus extra time).
// Your tasks:

const events = new Map([
  [19, 'Goal'],
  [21, 'Substitution'],
  [43, 'Goal'],
  [56, 'Substitution'],
  [69, 'Yellow card'],
  [73, 'Substitution'],
  [75, 'Yellow card'],
  [79, 'Substitution'],
  [81, 'Red card'],
  [93, 'Goal'],
]);

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

// 1. Create an array of gameEvents with different game events that can happen (no duplicates).

const gameEvents = [...new Set(events.values())];
console.log(gameEvents);

// 2. After the end of the game, it turned out that the yellow card from minute 75 was unfair.
// So remove this event from the game events log.

events.delete(75);
console.log(events);

// 3. Calculate and log the following in the console: “On average, an event happened every 11 minutes”
// (keep in mind that there are 90 minutes in the game).

console.log(`On average, an event happened every ${90 / events.size} minutes`);

// 4. Loop over the events map and log each item to the console,
// with mark whether it is in the first or second half(after 45 minutes) of the game, for example:
// [FIRST HALF] 19:  Goal

for (const [key, value] of events) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${key} ${value}`);
}
