// Due date: Jan 30 (eod)

/**
 * Q1: Find if the user has provided only first name and last Name
 *
 * userName1 = 'John Gig'            ->      true
 * userName1 = 'John Gig Hiyti'      ->      false
 * userName1 = 'John'                ->      false
 * userName1 = ''                    ->      false
 */
let userName1 = "John Gig";
let userName1Split = userName1.split(" ");
let result1 = userName1Split.length === 2;
console.log(`userName1 -> ${userName1}`);
console.log(
  `the user has provided only first name and last Name -> ${result1}\n`
);

/**
 * Q2: Create abbreviation for a 4-word sentence
 *
 * sentence2 = "Good morning to You"     ->      GMTY
 * sentence2 = "you NEVEr waLK aLOne"    ->      YNWA
 * sentence2 = "have A great day"        ->      HAGD
 *
 */
let sentence2 = "Good morning to You";
let abbr = "GMTY";
let sentence2a = "you NEVEr walk aLOne";
let abbr1 = "YNWA";
let sencence2b = "have A great day";
let abbr2 = "HAGD";
console.log(`abbr -> ${abbr}`);
console.log(`abbr1 -> ${abbr1}`);
console.log(`abbr2 -> ${abbr2}`);

/**
 * Q3: Count the number of words in the sentence
 */
let sentence3 =
  "CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.";
let sentence3Split = sentence3.split(" ");
let result2 = sentence3Split.length;
console.log(`sentence3 -> ${sentence3}`);
console.log(`count the number of words in the sentence -> ${result2}\n`);
