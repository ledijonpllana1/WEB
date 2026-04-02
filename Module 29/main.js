var programmingLanguages = ['java','php','python'];


console.log(programmingLanguages)


console.log(programmingLanguages[3])

programmingLanguages.push('js');
console.log(programmingLanguages);

programmingLanguages.pop();
console.log(programmingLanguages);

programmingLanguages.unshift('c#');
console.log(programmingLanguages);

// programmingLanguages.shift();
// console.log(programmingLanguages);

programmingLanguages.splice('0,2,ruby');
console.log(programmingLanguages);

console.log(Math.random()*5);

console.log(Math.floor(Math.random()*5));
var students=['John,Drin,Filan']

var [s1,s2,s3]=student

console.log(s1)
console.log(s2)
console.log(s3)

var places=['London,NewYork,berlin,prishtina'];

var[FirstPlace, ,SecondPlace, ,ThirdPalce]=places

console.log(SecondPlace)
console.log(ThirdPlace)

var numbers=[1,2,3,4,5,6,7,8,9,10];

var[firstNr,secondNr ,...otherNUmbers]=numbers

console.log(first)
console.log(othernumbers,toString);