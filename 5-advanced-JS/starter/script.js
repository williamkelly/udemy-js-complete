// object literal.
/*
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

// ///////////////////////////////////////////////////////////////////////////////////
// js pattern 
// The Constructor Pattern

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

// Object inheritance
Person.prototype.calculateAge = function(){
  console.log(2018 - this.yearOfBirth);
}

var john = new Person('john', 1990, 'lay about');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
*/

// /////////////////////////////////////////////////////////////////////////////////
// Object.create method.
/*
var personProto = {
  calculateAge: function(){
    console.log(2018 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);

john.name = 'John',
john.yearOfBirth = 1990,
john.job = 'teacher'

console.log(john);

var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1969 },
  job: { value: 'designer' },
});

console.log(jane);
*/

// //////////////////////////////////////////////

// Pattern IIFE : Immediately-invoked Function Expressions
// or a private variable

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();
// because of local scope above score is a private variable
// but it better written as an IIFE

(function (arg){
  var score = Math.random() * 10;
  console.log(score >= 5 - arg);
})(5);

// //////////////////////////////////////////////
// Pattern Closure

/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);
*/

// //////////////////////////////////////////////
// Closure test

function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var OuestionsTeacher = interviewQuestion('teacher');
OuestionsTeacher('john');
var OuestionsDesigner = interviewQuestion('designer');
OuestionsDesigner('jane');