const sentence1 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
const sentence1_AllA_QueenAndKing = sentence1.replace(/A/gi, "Queen and King");
console.log(`\nsentence1 after replace /A/ig with 'Queen and King -> ${sentence1_AllA_QueenAndKing}`);

const sentence2 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';

const sentence2Length = sentence2.length;
console.log(`sentence2 lenght is ${sentence2Length}`);

const isStartsWith_COM = sentence2.startsWith('COM');
console.log(`\nis sentence2 starts with "COM" (ignoring cases) -> ${isStartsWith_COM}`);

const endsWith_Google_news = sentence2.endsWith('Google news');
console.log(`\is sentence2 end with "Google news" (ignoring cases) ->${endsWith_Google_news}`);

let sentence2Lowercase = sentence2.toLowerCase();
let indexOf_from = sentence2Lowercase.indexOf('from');
let lastIndexOf_from = sentence2Lowercase.lastIndexOf('from');
let result4 = indexOf_from === lastIndexOf_from && indexOf_from >= 0 ;
console.log (`does word 'from' present only once in sentence2 (ignoring cases) -> ${result4}`);

let secondLastIndex = sentence2.length-2;
let charAt_secondLastIndex = sentence2.charAt(secondLastIndex);
console.log(`\n\nthe character present at second-last index in the string -> ${charAt_secondLastIndex}`);



