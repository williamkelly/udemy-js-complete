var teamJohn = [89, 120, 103];
var teamMike = [116, 94, 123];
var teamMary = [97, 134, 105];

var aveScoreJohn = (teamJohn[0] + teamJohn[1] + teamJohn[2]) / teamJohn.length;
var aveScoreMike = (teamMike[0] + teamMike[1] + teamMike[2]) / teamMike.length;
var aveScoreMary = (teamMary[0] + teamMary[1] + teamMary[2]) / teamMary.length;
console.log('John\'s team: ' + aveScoreJohn);
console.log('Mike\'s team: ' + aveScoreMike);
console.log('Mary\'s team: ' + aveScoreMary);
// var winner = aveScoreJohn > aveScoreMike ? 'John' : 'Mike';
switch(true) {
    case aveScoreJohn > aveScoreMike && aveScoreJohn > aveScoreMary:
        console.log('John\'s team is the winner with ' + aveScoreJohn + ' average points.');
        break;
    case aveScoreMike > aveScoreJohn && aveScoreMike > aveScoreMary:
        console.log('Mike\'s team is the winner with ' + aveScoreMike + ' average points.');
        break;
    case aveScoreMary > aveScoreJohn && aveScoreMary > aveScoreMike:
        console.log('Mary\'s team is the winner with ' + aveScoreMary + ' average points.');
        break;
    default:
        console.log('Its a draw, all teams have ' + aveScoreMike + ' average points.');
}
console.log
// console.log(' ' + aveScoreJohn);