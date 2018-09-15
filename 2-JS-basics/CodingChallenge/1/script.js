var calcBmi = function(mass, height) {
    bmi = mass / (height * height);
    return bmi;
}

var markMass = 78;
var markHeight = 1.69;
var johnMass = 92;
var johnHeight = 1.95;

var markBmi = calcBmi(markMass, markHeight);

var johnBmi = calcBmi(johnMass, johnHeight);
console.log(markBmi, johnBmi);

var markHigherBmi = markBmi > johnBmi;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBmi);