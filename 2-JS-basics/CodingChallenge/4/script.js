var mark = {
    'name': 'mark smith',
    'mass': 78,
    'height': 1.69,
    'calcBmi': function() {
        bmi = this.mass / (this.height * this.height);
        this.bmi = bmi;
        return bmi;
    }
}
var john = {
    'name': 'john stick',
    'mass': 78,
    'height': 1.69,
    'calcBmi': function() {
        bmi = this.mass / (this.height * this.height);
        this.bmi = bmi;
        return bmi;
    }
}

if (mark.calcBmi() > john.calcBmi()) {
    console.log(mark.name + ' has a higher BMI than ' + john.name + ' of ' + mark.bmi);
} else if (mark.bmi < john.bmi) {
    console.log(mark.name + ' has a lower BMI than ' + john.name + ' of ' + mark.bmi);
} else {
    console.log(mark.name + ' and ' + john.name + ' have the same BMI of ' + mark.bmi);
}