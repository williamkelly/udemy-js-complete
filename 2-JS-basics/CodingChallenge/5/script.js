var john = {
    'bills': [124, 48, 268, 180, 42],
    'name': 'john',
    'calcTips': function() {
        this.tip = [];
        this.finalValues = [];
        var tip;
        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            if (bill < 50) {
                tip = .2;
            } else if (bill >= 50 && bill <= 200) {
                tip = .15;
            } else {
                tip = .1;
            }
            tip = bill * tip;
            this.tip[i] = tip;
            this.finalValues[i] = bill + tip;
        }
    }
}
var mark = {
    'bills': [77, 375, 110, 45],
    'name': 'mark',
    'calcTips': function() {
        this.tip = [];
        this.finalValues = [];
        var tip;
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                tip = .2;
            } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
                tip = .1;
            } else {
                tip = .25;
            }
            tip = this.bills[i] * tip;
            this.tip[i] = tip;
            this.finalValues[i] = this.bills[i] + tip;
        }
    }
}

john.calcTips();
mark.calcTips();

console.log(john);
console.log(mark);
/*
console.log(finalBills);

console.log(marksTips);
console.log(marksFinalBills);
*/

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) { 
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

console.log(john.tip);
john.average = calcAverage(john.tip);
mark.average = calcAverage(mark.tip);
console.log(john.average);
console.log(mark.average);