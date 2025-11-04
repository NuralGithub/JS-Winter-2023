//let name = "Nural";
//console.log(typeof name);
//console.log(name);

//let number1 = 25;
//let number2 = 16;
//let number3 = 13;
//console.log(number1);
//console.log(typeof number1);
//console.log(number1 + number2 + number3);
//console.log(25 > 16);

//let a = 48;
//let b = 44;
//let result1 = a + b;
//console.log(result1 > 50);

//let a;
//console.log(typeof a);

//let person1 = {
//Name : "Adem" ,
//lastName : "Turkmen",
// age : 48}
//console.log(typeof person1);

//let number1 = "25";
//let number2 =  16;
//console.log(number1+number2);

//let number1 = 25;
//let number2 = 16;
//let result = (number1 + number2) / 2;
//console.log(number1 - number2);
//console.log(number1 * number2);
//console.log(result);

//console.log(19 % 2);

//let a = 20;
//a++;
//a++;
//a--;
//a--;
//console.log(a);
//console.log(5 ** 3);

//let number = 3;
//number += 3;
//console.log(number);
//number -= 1;
//console.log(number);
//number *= 4;
//console.log(number);
//number /= 2;
//console.log(number);

//console.log(5 > 2 && 8 < 10);
//console.log(5 < 10 || 6 < 1);
//console.log(!(5 < 8));
//console.log(5 != 3);

//let sentence = "hello dear, how ARe you DoiNG? Today is Friday. ";
//let sentenceUppercase = sentence.toUpperCase();
//console.log(`\nsentence -> ${sentence}`);
//console.log(`\nsentenceUppercase -> ${sentenceUppercase}`);

//let news =
//" Go to NBCNews.com for breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture";
//let lastIndexInNews = news.length - 1;
//console.log(`\nLast index in news -> ${lastIndexInNews}`);

//let stringVal = "Hello World";
//console.log(`\nstringVal -> ${stringVal}`);
//stringVal = stringVal.toUpperCase();
//console.log(`stringVal -> ${stringVal}`);

//let sentence = "hello dear, how ARe you DoiNG? Today is Friday. ";
//console.log(`\nChecking startswith()`);
//console.log(`sentence -> ${sentence}`);
//let isStartsWith_Hello = sentence.startsWith("hello");
//console.log(`is sentence start with "hello" -> ${isStartsWith_Hello}`);

//let sentence ='CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD from soURCes alL oVeR tHE wORld by GOOgle NeWs.';
//let endsWith_NeWs = sentence.endsWith('NeWs.');
//console.log(`is sentence end with "NeWs." -> ${endsWith_NeWs}`);

//let sentence =
//"CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD from soURCeS alL oVeR tHE wORld by GOOgle NeWs.";
//let includes_eS_al = sentence.includes('eS al');
//console.log(`is sentence include "eS al" -> ${includes_eS_al}`);

//let str1 = "Hello",
// str2 = "Dear",
//str3 = ",",
// str4 = "How are",
//str5 = "you",
//str6 = "?",
//str7 = "";
//let str = str1.concat(str7, str2, str7, str3, str4);
//console.log(`\nstr1.concat(str7, str2, str7, str3, str4) -> ${str}`);
//let strr = str1+str7+str2+str7+str3+str4;
//console.log(`\nstr1+str7+str2+str7+str3+str4`);

//let stmt1 = "hello Dear HoW are you doing.";
//console.log("*" + stmt1 + "*");

//let stmt1_trim = stmt1.trim();
//console.log(`\n'*' + stmt1_trim + '*'`);

//let sentence = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD from soURCes alL oVeR tHE wORld by GOOgle NeWs.';
//let charAt31 = sentence.charAt(31);
//console.log(`Char at index-31 -> ${charAt31}`);

//let sentence = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD from soURCes alL oVeR tHE wORld by GOOgle NeWs.';
//let indexOf_P = sentence.indexOf('P');
//console.log(`Index of 'P' -> ${indexOf_P}`);

//let lastIndexOf_News = sentence.lastIndexOf('News');
//console.log(`Last index of 'News' -> ${lastIndexOf_News}`);

//let sentence = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD from soURCes alL oVeR tHE wORld by GOOgle NeWs.';
//let sentenceLowerCase = sentence.toLowerCase();
//let patternLowerCase = 'News'.toLowerCase();
//let indexOf_News_IgnoringCases = sentenceLowerCase.indexOf(patternLowerCase);
//console.log (`Index of 'News' (ignoring cases) in sentence -> ${indexOf_News_IgnoringCases}`);

//let sentence = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, CompreheNSIVe UP-to-DATE aggRegateD from soURCes alL oVeR tHE wORld by GOOgle NeWs.';
//let sentence_Replace_A_B = sentence.replace("A", "B");
//console.log(`sentence after replace 'A' with 'B' -> ${sentence_Replace_A_B} `);
//let sentence_EW_MyCalendar = sentence.replace(/EW/i, 'My Calendar');
//console.log(`\nsentence after replace /EW/i with 'My Calendar' ->${sentence_EW_MyCalendar}`);
//let sentence_AllEW_MyCalendar = sentence.replace(/EW/ig, 'My Calendar');
//console.log(`\nsentence after replace /EW/ig with 'My Calendar' -> ${sentence_AllEW_MyCalendar}`);

//sentence = "Hello World";
//console.log(`sentence -> ${sentence}`);
//let sentence_8_$ = sentence.padStart(8, "$");
//console.log(`\nsentence after adding '$' to make lenght=8 -> ${sentence_8_$}`);
//let sentence_padEnd_16_AB = sentence.padEnd(16, 'AB');
//console.log(`\nsentence after adding 'AB' to make lenght=16 -> ${sentence_padEnd_16_AB}`);

//let sentence1 = "New York City";
//let sentence2 = "new York CIty";
//console.log(`\nsentence1 -> ${sentence1}`);
//console.log(`sentence2 -> ${sentence2}`);
//let isEqual = sentence1.localeCompare(sentence2);
//console.log(`is sentence1 equal to sentence2 -> ${isEqual}`);

//let sent1Lowercase = sentence1.toLowerCase();
//let sent2Lowercase = sentence2.toLowerCase();
//let isEqual1 = sent1Lowercase.localeCompare(sent2Lowercase);
//console.log(`is sentence1 equal to sentence2 (ignoring cases) -> ${isEqual1}`);

//let sentence = "CompreheNSIVe UP-to-DATE neWs CoverAgE, CompreheNSIVe UP-to-DATE aggRegateD from soURCes alL oVeR tHE wORld by GOOgle NeWs.";
//let subString_0_4 = sentence.substring(0, 4);
//console.log(`\nsubString_0_4 -> ${subString_0_4}`);

//let subString_2 = sentence.substring(2);
//console.log(`substring_2 -> ${subString_2}`);

//let lastIndex = sentence.length - 1;
//let subString_lastIndex = sentence.substring(lastIndex);
//console.log(`substring_lastIndex -> ${subString_lastIndex}`);

//sentence = 'Hello World';

//let substring_150_160 = sentence.substring(150, 160);
//console.log(`substring_150_160 -> ${substring_150_160}`);

//let substring_3_55 = sentence.substring(3, 55);
//console.log(`substring_3_55 -> ${substring_3_55}`);

//let substring__3_8 = sentence.substring(-3, 8);
//console.log(`substring__3_8 -> ${substring__3_8}`);

//console.log(`\n Q: Convert the word into Titlecase format\n`);

//let word = 'terMINAL';
//let wordLowercase = word.toLowerCase();
//word = wordLowercase.substring(0, 1).toUpperCase() + wordLowercase.substring(1);
//console.log(`word -> ${word}`);
//let sentence = "CompreheNSIVe UP-to-DATE neWs CoverAgE, CompreheNSIVe UP-to-DATE aggRegateD from soURCes alL oVeR tHE wORld by GOOgle NeWs.";
//let slice_0_4 = sentence.slice(0, 4);
//console.log(`\nslice_0_4 -> ${slice_0_4}`);

//let slice_2 = sentence.slice(2);
//console.log(`slice_2 -> ${slice_2}`);

//let lastIndex = sentence.length - 1;
//let slice_lastIndex = sentence.slice(lastIndex);
//console.log(`slice_lastIndex -> ${slice_lastIndex}`);

//sentence = 'Hello World';

//let slice_150_160 = sentence.slice(150, 160);
//console.log(`slice_150_160 -> ${slice_150_160}`);

//let slice_3_55 = sentence.slice(3, 55);
//console.log(`slice_3_55 -> ${slice_3_55}`);

//let slice__3_8 = sentence.slice(-3, 8);
//console.log(`slice__3_8 -> ${slice__3_8}`);

//sentence = "Hello dear how are you doing";
//let splitBy_o = sentence.split("o");
//console.log(`splitBy_o -> ${splitBy_o}`);

//let planets = ["EaRTH", "MerCUrY", "MaRS", "JuPITer"];
//console.log(`planets -> ${planets}`);
//let planetsLength = planets.length;
//console.log(`planetsLenght -> ${planetsLength}`);

//let valueAt2 = planets[2]
//console.log(`\nthe value present at index-2 -> ${valueAt2}`);

//console.log(planets[1].toUpperCase());
//console.log(planets[1].length);

//planets[0] = "SaTURn";
//console.log(`planets -> ${planets}`);

//let word = 'HaPPy BirTHDaY dEar';
//let wordLowercase = word.toLowerCase();
//let words = wordLowercase.split(' ');
//words[0] = words[0].substring(0, 1).toUpperCase() + words[0].substring(1);
//words[1] = words[1].substring(0, 1).toUpperCase() + words[1].substring(1);
//words[2] = words[2].substring(0, 1).toUpperCase() + words[2].substring(1);
//word = words[0] + ' ' + words[1] + ' ' + words[2];
//word = words[0].concat(' ', words[1], ' ', words[2]);
//console.log(`word -> ${word}`);

//let planets = ['EaRTh', 'MerCUrY', 'MaRS', 'JuPITer'];
//let planets_toString = planets.toString();
//console.log(`planets_toString -> ${planets_toString}`);
//console.log(`typeof planets_toString -> ${typeof planets_toString}`);

//let planets_Join1 = planets.join('--');
//console.log(`planets_Join1 --> ${planets_Join1}`);

//let planets_Join2 = planets.join();
//console.log(`planets_Join2 --> ${planets_Join2}`);

//let planets_Join3 = planets.join('123');
//console.log(`planets_Join3 --> ${planets_Join3}`);

//let planets_Join4 = planets.join('');
//console.log(`planets_Join4 --> ${planets_Join4}`);

//let planets = ['EaRTh', 'MerCUrY', 'MaRS', 'JuPITer'];

//let popedValue = planets.pop();
//console.log(`popedValue -> ${popedValue}`);
//console.log(`planets -> ${planets}`);

//let shiftedValue = planets.shift();
//console.log(`popedValue -> ${shiftedValue}`);
//console.log(`planets -> ${planets}`);

//let lenAfterPushFunction = planets.push('Pluto');
//console.log(`lenAfterPushFunction -> ${lenAfterPushFunction}`);
//console.log(`planets -> ${planets}`);

//let lenAfterShiftFunction = planets.unshift('SATURN');
//console.log(`lenAfterShiftFunction -> ${lenAfterShiftFunction}`)
//console.log(`planets -> ${planets}`);

//let planets_Splice1 = planets.splice(2, 0, 'Jupiter', 'Earth', 'Mars', 'Earth', 'King', 'Planets Fitness');
//console.log(`planets_Splice1 -> ${planets_Splice1}`);
//console.log(`planets -> ${planets}`);

//let planets_Splice2 = planets.splice(3,2);
//console.log(`\nplanets_Splice2 --> ${planets_Splice2}`);
//console.log(`planets -> ${planets}`);

//let planets_Splice3 = planets.splice(3, 1, 'HELLO');
//console.log(`\nplanets_Splice3 --> ${planets_Splice3}`);
//console.log(`planets -> ${planets}`);

//let planets_Splice4 = planets.splice(0, 4, 'King', 'Queen');
//console.log(`\nplanets_Splice4 --> ${planets_Splice4}`);
//console.log(`planets -> ${planets}`);

//planets.splice(1, 0, 'Earth','Jupiter', 'Venus');
//console.log(`planets -> ${planets}`);

//let planets = ["King", "Earth", "Jupiter", "Venus", "Queen", "MaRS", "Pluto"];
//let fruits = ["apple", "BAnana", "Cherry", "GraPEs", "Celery", "BluebeRRY"];
//let states = ["NY", "Nj", "PA", "ca", "wi", "Tx", "aL"];

//const arrayAfterConcat = planets.concat(fruits, states);
//console.log(`planets -> ${planets}`);
//console.log(`fruits -> ${fruits}`);
//console.log(`states -> ${states}`);
//console.log(`arrayAfterConcat -> ${arrayAfterConcat}`);

//console.log(`\nAdding values using concat()n`);
//const newFruits = fruits.concat("Mango", "KIWI");
//fruits.concat("Mango, KIWI");
//console.log(`fruits -> ${fruits}`);
//console.log(`newFruits -> ${newFruits}`);

//states = states.concat("AB", "XY");
//states.concat("AB", "XY");
//console.log(`states -> ${states}`);

//let isIncludes_apple = fruits.includes("apple");
//console.log(`\nis "apple" present at any index -> ${isIncludes_apple}`);

//let isIncludes_Cel = fruits.includes("Cel");
//console.log(`\nis "Cel" present at any index -> ${isIncludes_Cel} `);

//let isIncludes_CHerry = fruits.includes("CHerry");
//console.log(`\nis "CHerry" present at any index -> ${isIncludes_CHerry}`);

//let isIncludes_Mango = fruits.includes("Mango");
//console.log(`\nis "Mango" present at any index -> ${isIncludes_Mango}`);
//let fruits1 = [
//"apple",
//"BAnana",
//"Cherry",
//"GraPEs",
//"Celery",
//"BluebeRRY",
//"apple",
//"BluebeRRY",
//"Cherry",
//"apple",
//"Grapes",
//"BAnana",
//"BluebeRRY",
//"apple",]
//;
//let indexOf_apple = fruits1.indexOf("apple");
//console.log(`\nFirst occurence of "apple" is at index -> ${indexOf_apple}`);

//let indexOf_Blue = fruits1.indexOf("Blue");
//console.log(`\nFirst occurence of "Blue" is at index -> ${indexOf_Blue}`);

//let indexOf_Celery = fruits1.indexOf("Celery");
//console.log(`\nFirst occurence of "Celery" is at index -> ${indexOf_Celery}`);

//let lastIndexOf_apple = fruits1.lastIndexOf("apple");
//console.log(`\nLast occurence of "apple" is at index -> ${lastIndexOf_apple}`);

//let lastIndexOf_Blue = fruits1.lastIndexOf("Blue");
//console.log(`\nLast occurence of "Blue" is at index -> ${lastIndexOf_Blue}`);

//let lastIndexOf_Celery = fruits1.lastIndexOf("Celery");
//console.log(`\nLast occurence of "Celery" is at index -> ${lastIndexOf_Celery}`);

//let isArray_123 = Array.isArray(123);
//console.log(`\nis '123' an array -> ${isArray_123}`);

//let isArray_Happy = Array.isArray['Happy'];
//console.log(`\nis '[Happy]' an array -> ${isArray_Happy}`);

//let fruits1 = [
//"apple",
//"BAnana",
//"Cherry",
//"GraPEs",
//"Celery",
//"BluebeRRY",
//"apple",
//"BluebeRRY",
//"Cherry",
//"apple",
//"Grapes",
//"BAnana",
//"BluebeRRY",
//"apple",
//];

//fruits1.reverse();
//console.log(`fruits1 -> ${fruits1}\n`);

//fruits1.fill('KING', 3, 6 );
//console.log(`fruits1 -> ${fruits1}`);

//fruits1.fill('John Doe', 5);
//console.log(`fruits1 -> ${fruits1}`);

//fruits1.fill('Hello');
//console.log(`fruits1 -> ${fruits1}`);

//let name1 = 'why'

//if (name1.length >= 10) {
//console.log('Hello World');

//}

//if (name1.length >=10 || name1.includes('y')){
//  console.log('Hello World');
//}
//if (name1.length >=10 || name1.includes('y')){
//console.log('Hello World - 2');
//}

//name1 = 'King';

//if (name1.lenght >= 10 || name1.includes('y')){
//  console.log('Hello World');
//} else {
//  console.log('Bye World');
//}

//name2 = 'Johnson doe wright';
//if (name2.length >=10 || name2.includes('y')){
//  console.log('Hello World -3');
//} else {
//  console.log('Bye World')
//}
//name3 = 'king'
//if (name3.length >= 10 || name3.includes('y')) {
//  console.log('Hello World - 5');
//} else if(name3.toLowerCase().startsWith('k')) {
//console.log('name3 starts with "k"');
//} else if (name3.split(' ').length > 2) {
//  console.log('name3 has more than two words');
//}

//let studentNames = ['John', 'Lauren', 'Kissa', 'Lily', 'Rein', 'Tommy'];
//if (studentNames [1].length >5) {
//  console.log(studentNames[1]);
//}

//let cityName = 'Mexico city nEwMexiCo'

//if (cityName.includes('nEw')) {
//  console.log(cityName.toUpperCase());
//} else {
//  console.log(cityName.toLowerCase());
//  console.log(cityName.length);
//}

//let sports = [ 'Football', 'Rugby', 'Swimming', 'Soccer', 'Baseball'];

//if (sports.includes('Swimming')) {
//  console.log(`the index at which 'Swimming' is present in the array -> ${sports.indexOf('Swimming')}`);
//} else {
//  sports.push('Swimming');
//console.log(sports);
//}

//num = 6;

//  if (num == 2) {
//  console.log("num is Two");
//} else if (num == 10) {
//  console.log("num is Ten");
//} else if (num == 12) {
//  console.log("num is Twelve");
//} else if (num == 20) {
//  console.log("num is Twenty");
//} else if (num == 25) {
//  console.log("num is Twenty Five");
//} else if (num == 6) {
//  console.log("num is Six");
//} else if (num == 40) {
//  console.log("num is Forty");
//}

//num = 25;
//switch (num) {
//  case 2:
//    console.log("num is Two");
//    break;
//  case 10:
//    console.log("num is Ten");
//    break;
//  case 12:
//    console.log("num is Twelve");
//    break;
//  case 20:
//    console.log("num is Twenty");
//    break;
//  case 25:
//   console.log("num is Twenty Five");
//    break;
//  case 6:
//    console.log("num is Six");
//    break;
//  case 40:
//    console.log("num is Forty");
//    break;
//}

//let monthName = "Nov",
//  season = "";

//if (
//  monthName.localeCompare("Dec") == 0 ||
//  monthName.localeCompare("Jan") == 0 ||
//  monthName.localeCompare("Feb") == 0
//) {
//  season = "Winter";
//} else if (
//  monthName.localeCompare("Mar") == 0 ||
//  monthName.localeCompare("Apr") == 0 ||
//  monthName.localeCompare("May") == 0
//) {
//  season = "Spring";
//} else if (
//  monthName.localeCompare("Jun") == 0 ||
//  monthName.localeCompare("Jul") == 0 ||
//  monthName.localeCompare("Aug") == 0
//) {
//  season = "Summer";
//} else if (
//  monthName.localeCompare("Sep") == 0 ||
//  monthName.localeCompare("Oct") == 0 ||
//  monthName.localeCompare("Nov") == 0
//) {
// season = "Fall";
//} else {
//  console.log(`Invalid monthName -> ${monthName}`);
//}
//console.log(`\n\nmonth -> ${monthName} ; season -> ${season}`);

//switch (monthName) {
//  case "Dec":
//  case "Jan":
//  case "Feb":
//    season = "Winter";
//    break;
//  case "Mar":
//  case "Apr":
//  case "May":
//    season = "Spring";
//    break;
//  case "Jun":
//  case "Jul":
//  case "Aug":
//    season = "Summer";
//    break;
//  case "Sep":
//  case "Oct":
//  case "Nov":
//    season = "Fall";
//    break;
//  default:
//    console.log(`Invalid monthName -> ${monthName}`);

//    console.log(`n\n\Using switch`);
//    console.log(`Month -> ${monthName} ; season -> ${season}`);
//}

//let username = 'jOHn';

//if (username.toLowerCase().localeCompare("happy") === 0) {
//  console.log("Good name");
//} else if (username.toLowerCase().localeCompare("joy") === 0) {
//  console.log("Your name has only 3- characters");
//  console.log(username.toUpperCase());
//} else if (username.toLowerCase().localeCompare('john') === 0) {
//  usernameLowercase = username.toLowerCase();
//  console.log(
//    usernameLowercase.charAt(0).toUpperCase() + usernameLowerCase.substring(1)
//  );
//} else {
//  console.log("Your username is different than we expected");
//}

//username = "jOHn";

//switch (username.toLowerCase()) {
//case "happy":
//console.log("Good name");
//break;
//case "joy":
//console.log("Your name has only 3-characters");
//console.log(username.toUpperCase());
//break;
//case "john":
//usernameLowerCase = username.toLowerCase();
// console.log(
// usernameLowerCase.charAt(0).toUpperCase() + usernameLowercase.substring(1)
//);
//default:
// console.log("Your username is different than we expected");
// break;
//}

// Create a software, based on the given day-name; print the task of the day.

// if day is Mon, Monday -> print ("Today is the Technosoft class")
// if day is Tue -> print ("Today is self learning day")
// if day is Wed -> print ("Today is the Technosoft class")
// if day is Thu -> print ("Today is self learning day")
// if day is Fri -> print ("Today is the Technosoft class")
// if day is Sat -> print ("Today is lab session day")
// if day is Sun -> print ("No study today")
// Note: if day value is not valid -> print an error saying "Entered day-value is not valid"
// User can provide day-name is any form, Mon or MOn or MON or MoN or monday or MonDAy or MONDAY   (mon/monday)

// console.log (`\nQ: Create a software, based on the given day-name; print the task of the day.\n`)

// let dayName = 'sun';
// console.log(`dayname -> ${dayName}`);

// switch(dayName.toLowerCase()) {
// case 'mon':
// case 'monday':
// case 'wed':
// case 'wednesday':
// case 'fri':
// case 'friday':
// console.log("Today is the Tecnosoft class");
// break;
// case 'tue':
// case 'tuesday':
// case 'thu':
// case 'thursday':
// console.log( "Today is self learning day");
// break;
// case 'sat':
// case 'saturday':
// console.log('Today is lab session day');
// break;
// case 'sun':
// case 'sunday':
// console.log('No study today');
// break;
// default:
// console.log("Entered day-value is not valid");
// }

//  Based on the day-name and if user has meeting or not;
//     print whether user should work from home or go to office.

//     mon, thur and there no meeting
//         Work from home
//     other weekdays or there is meeting
//         Go to office
//     weekends
//         Enjoy
// day
// isMeeting = true (if there any meeting)
// isMeeting = false (if there any No meeting)

// console.log('\nQ: Based on the day-name and if user has meeting or not; \nPrint whether user should work from home or go to office.\n');
// let day = 'Frid';
// let isAnyMeeting = false;

// switch (day.toLowerCase()) {
//  case 'sunday':
//   case 'saturday':
//     console.log('Enjoy');
//     break;
//     case 'monday':
//       case 'thursday':
//         if (isAnyMeeting) {
//           console.log('Go to office');
//         } else {
//           console.log('Work from home');
//         }
//         break;
//         case 'tuesday':
//           case 'wednesday':
//             case'friday':
//             console.log('Go to Office');
//             break;
//             default:
//               console.log(`Invalid day entered -> ${day}`);
//               break;
//

// console.log(
//   "\nQ: Print all values from the given array which startsWith letter  'm' (ignoring cases)\n"
// );
// const arr = [
//   "Mars",
//   "MerCUrY",
//   "MaRS",
//   "JuPITer",
//   "Earth",
//   "Saturn",
//   "my plaNEt",
//   "VeNUS",
// ];
// for (let X = 0; X <= arr.length - 1; X++) {
//   if (arr[X].toLowerCase().startsWith("m")) {
//     console.log(arr[X]);
//   }
// }

// console.log(
//   '\nQ: Print all words from the sentence having lenght>5 and contains "i  or I"\n'
// );
// const sentence =
//   "BOOM found that the visuals does not show recent condition of Turkey after a major eartquake jolted the country.";
// const sentenceArr = sentence.split(" ");
// for (let i = 0; i <= sentenceArr.length - 1; i++) {
//   if (sentenceArr[i].length > 5 && sentenceArr[i].toLowerCase().includes("i")) {
//     console.log(sentenceArr[i]);
//   }
// }

// console.log('\n\n for loop \n\n');
// for (let count=11 ; count <=15 ; count++) {
//   console.log('Hello World');
// }

// console.log('\n\n while-loop \n\n');
// console.log('Q: Print "Hello World" 5-times');
// let count =11
// while (count <=15) {
//   console.log('Hello World');
//   count++
// }

// console.log('\n\n do-while-loop \n\n');
//  console.log('Q: Print "Hello World" 5-times');
//  let dCount =11
//  do {
//    console.log('Hello World');
//    dCount++
//  } while (dCount <=15)

// let employee101 = {
//   name : 'John Doe',
//   age : 25,
//   liveInState : 'NJ',
//   gender : 'M',
//   department : 'Finance',
//   salary : '250000',
//   firstJob : false,
//   pastJob : {
//     past1: 'ABC',
//     past2: 'XYZ',
//     past3: 'DEF',
// },
// skills : ['Finance101', 'Marketing', 'Finance102', 'Finance103']
// };

// console.log(employee101.salary); 
// console.log(employee101['salary']);
// console.log(employee101.skills[0]);
// console.log(employee101.pastJob.past2);
// console.log(employee101['pastJob']['past2']);

// let myObj = {
//   myName : 'Happy Peace',
//   11 : 22,
//   5 : true,
//   true : 22,
//   'ssn number' : 1234
// }
// myObj[ 'age'] = 20
// console.log(myObj);
// myObj ['11'] ='King and Queen';
// console.log(myObj);
// myObj.gender ='M'
// console.log(myObj);
// myObj['live in state'] ='TX'
// console.log(myObj);
// const name1 = myObj.myName;
// console.log(`name1 = ${name1}`);
// console.log(myObj[5]);
// console.log(myObj['ssn number']);
// const abcValue = myObj.abc;
// console.log(`abcValue -> ${abcValue}`);
// console.log( delete myObj.age);
// console.log(myObj);
// console.log( delete myObj.M);
// console.log(myObj);
// console.log( delete myObj[11]);
// console.log(myObj);
// const is_abcd_present = 'abcd' in myObj;
// console.log(`\nis 'abcd' present as one of the attributes -> ${is_abcd_present}`);
// const is_ssn_present = 'ssn' in myObj;
// console.log(`\nis 'ssn' present as one of the attributes -> ${is_ssn_present}`);
// const is_MyName_present = 'MyName' in myObj;
// console.log(`\nis 'MyName' present as one of the attributes -> ${is_MyName_present}`);
// const is_true_present = 'true' in myObj;
// console.log(`\nis 'true' present as one of the attributes -> ${is_true_present}`);

// for ( let i=1; i<=10; i++) {
//    console.log(i);
// }

//const str1 = 'Hello deAR, haVE a great DAy tO yOu';
//let titleCaseStr1 = '';
//const arr = str1.toLowerCase().split(' ');

//for (let i=0 ; i<= arr.length-1 ; i++) {
//   titleCaseStr1 = titleCaseStr1 + arr[i].charAt(0).toUpperCase() +
//   arr[i].slice(1) + ' ';

//console.log(str1); 
//console.log(titleCaseStr1);
   
let lVar1 = 10, lVar2 = 20, lVar3 = 30, lVar4 = 40;
let lRes1 = lVar2 < lVar4 && lVar1 === (lVar4-lVar2);
console.log(lRes1);
let lRes2 = lVar2 < lVar4 || lVar1 === (lVar4-lVar2);
console.log(lRes2);
let lRes3 = (lVar1 > lVar4 || lVar4+lVar1 >= lVar3+lVar2) && (lVar2-lVar3 <= lVar4);
console.log(lRes3);
let lRes4 = (lVar1 > lVar4 || lVar4+lVar1 >= lVar3+lVar2) && !(lVar2-lVar3 <= lVar4);
console.log(lRes4);

