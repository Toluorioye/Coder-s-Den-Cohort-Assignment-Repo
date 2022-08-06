// EXERCISE LEVEL 1


let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);

let capital = challenge.toUpperCase();
let lower = challenge.toLowerCase();

let cut = challenge.substring(3,7);
let purCut = challenge.substring(3);

let check = challenge.includes("Script");
let divide = challenge.split();
let div = challenge.split(" ");
let coma = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let real = coma.split(", ");
let replac = challenge.replace("JavaScript", "Python");
let findCharacter = challenge.charAt(15);
let findCodeCharacter = challenge.charCodeAt(11);
let findIndex = challenge.indexOf("a");
let findLastIndex = challenge.lastIndexOf("a");
let because = "You cannot end a sentence with because because because is a conjunction";
let findBecause = because.indexOf("because");
let findLastBecause = because.lastIndexOf("because");
let searchForBecause = because.search("because")

let solveTrim = " 30 Days Of JavaScript "
let findTrim = solveTrim.trim(" ");
let findStart = challenge.startsWith("30");
let findEnd = challenge.endsWith("JavaScript")
let findAMatch = /a/g
let foundMatch = challenge.match(findAMatch);
let merge ="30 Days of"
let joining = merge.concat( " JavaScript");
let repete = challenge.repeat(2);


// level 2
console.log(`The quote \"There is no exercise better for the heart than reaching down and lifting people up.\" by John Holmes teaches us to help one another`);
console.log(`Love is not patronizing and charity isn't about about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.`);

let stringedDigit = "10";
console.log(typeof(stringedDigit));
let unstringedDigit = Number(stringedDigit);
console.log(unstringedDigit);

let stringedFloat = "9.8";
console.log(typeof(stringedFloat));
let unstringedFloat = parseInt(stringedFloat);
console.log(unstringedFloat);

let program1 = "python";
let check1 = program1.includes("on")
console.log(check1);
let program2 = "jargon";
let check2 = program2.includes("on")
console.log(check2)

let program3 = "I hope this course is not full of jargon";
let check3 = program3.includes("jargon")
console.log(check3)

let rand = Math.floor(Math.random()* 101)
console.log(rand);
let randLow = Math.floor(Math.random() * 51 )+50 ;
console.log(randLow);

let randHigh = Math.floor(Math.random()* 256)
console.log(randHigh)
 
let javaWord = "Javascript";
console.log(javaWord.charAt(Math.random() * 10));


console.log(" 1\t 1\t 1\t 1\t 1\t \n 2\t 1\t 2\t 4\t 8\t \n 3\t 1\t 3\t 9\t 27\t \n 4\t 1\t 4\t 16\t 64\t \n 5\t 1\t 5\t 25\t 125\t " )

let findStartBe = because.indexOf("because");
let findEndBe = because.lastIndexOf("because"); 
let removeBe = because.substr(31,23)
console.log(removeBe);



// Level 3
let lovers = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let findLove = /love/gi;
let foundLove = lovers.match(findLove);
console.log(foundLove);

let lookForBecause = /because/g
console.log(because.match(lookForBecause));

let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

console.log(sentence.replace(/[$%@&#;]/g,""))



// let onlineCoursesPerYear = onlineCoursesMonthly *12;
// let salaryPerYear = salaryPerMonth * 12;
// let totalAnnualIncome = onlineCoursesPerYear + salaryPerYear + annualBonus;
// console.log(totalAnnualIncome + " euro");

let extract ='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
matchExtract = /\d+/g;
let extracted = extract.match(matchExtract);

let annualIncome = parseInt(extracted[0]) + parseInt(extracted[1]) + parseInt(extracted[2]) ;
console.log(annualIncome);










