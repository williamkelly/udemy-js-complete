var bills = [124, 48, 268];
var tips = [];
var finalBills = [];

var calcTips = function(bills) {
    var tip; 
    if (bills < 50) {
        tip = .2;
    } else if (bills >= 50 && bills <= 200) {
        tip = .15;
    } else {
        tip = .1;
    }
    tip = bills * tip;
    tips.push(tip);
    finalBills.push(bills + tip);
}

calcTips(bills[0]);
calcTips(bills[1]);
calcTips(bills[2]);

console.log(bills);
console.log(tips);
console.log(finalBills);