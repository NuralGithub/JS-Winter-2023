// F -> C
// T(℃) = (T(℉) -32) / 1.8
let fTemp = 47;

let fTempIntoCTemp = (fTemp - 32) / 1.8
console.log(`\n${fTemp}℉ is equals to ${fTempIntoCTemp}℃`);

// F -> K
// T(K) = (T(℉) + 459.67) x 5/9
let fTempIntoKTemp = (fTemp + 459.67) * 5/9;
console.log(`${fTemp}℉ is equals to ${fTempIntoKTemp}°K`);

// C -> F
// T(℉) =(T(℃) * 1.8) + 32
let cTemp = 8.333333333333334;
let cTempIntoFTemp = (cTemp * 1.8) + 32
console.log(`${cTemp}℃ is equals to ${cTempIntoFTemp}°F`);

// C -> K 
// T(K) = (T(℃) + 273.15)
let cTempIntoKTemp = (cTemp + 273.15)
console.log(`${cTemp}℃ is equals to ${cTempIntoKTemp}°K`);

// K -> F
// T(°F) = (T(K) * 9/5) - 459.67
let kTemp = 281.4833333333333;
let kTempIntoFTemp = (kTemp * 9/5) -459.67
console.log(`${kTemp}°K is equals to ${kTempIntoFTemp}°F`);

// K -> C
// T(℃) = (T(K) - 273.15)
let kTempIntoCTemp = (kTemp -273.15)
console.log(`${kTemp}°K is equals to ${kTempIntoCTemp}℃`);