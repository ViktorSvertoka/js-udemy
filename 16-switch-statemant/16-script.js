if (color === 'green') {
  console.log('Go!');
} else if (color === 'yellow') {
  console.log('Get ready!');
} else if (color === 'red') {
  console.log('Stop!');
} else {
  console.log('Incorrect color!');
}

//=======================================================

const color = 'green';

switch (color) {
  case 'green':
    console.log('Go!');
    break;
  case 'yellow':
    console.log('Get ready!');
    break;
  case 'red':
    console.log('Stop!');
    break;
  default:
    console.log('Incorrect color!');
}

//=======================================================

const weekday = 'sunda';

switch (weekday) {
  case 'monday':
    console.log('Keep calm' + " and pretend it's not monday.");
    break;
  case 'tuesday':
    console.log('Tuesday is ' + "just monday's ugly sister.");
    break;
  case 'wednesday':
    console.log(
      'Nothing screws ' +
        'up your friday like ' +
        "realizing it's only " +
        'wednesday!',
    );
    break;
  case 'thursday':
    console.log(
      "It's friday! " + 'Sorry... Just practicing ' + 'for tomorrow:)',
    );
    break;
  case 'friday':
    console.log('Stay strong! ' + 'Weekend is coming soon!');
    break;
  case 'saturday':
  case 'sunday':
    console.log(
      'Why are ' +
        'Saturday and Sunday the ' +
        'strongest days? Because ' +
        'all the others are ' +
        'week-days!',
    );
    break;
  default:
    console.log('This is not ' + 'a weekday I know...');
}
