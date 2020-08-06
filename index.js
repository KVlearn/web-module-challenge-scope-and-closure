// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter1 has the count variable declared inside the function (as functional scope).
 * whereas counter2 has the count variable declared in the global scope
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 uses closure. Here the count variable is within {} and is stored (keeps track) every time this function is invoked.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 will eliminate having global variables which causes human error incase of larger code. 
 * When there are common variables that needs to be reused across the code.
 * 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}
const counter1 = counterMaker();
// counter2 code
let count = 0;
function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
return(Math.floor(Math.random()*3)) /* gives either 0 or 1 or 2 */
}
console.log('Task#2:');
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
console.log('Task#3:');
let finals= finalScore(inning,3)
console.log(finals);

function finalScore(scoreFunc,numOfInnings){
  let homeScore=0,awayScore=0;
  let outObj={};
  /*loop and calc homeScore */
  for (i=0;i<numOfInnings;i++){
  homeScore = homeScore + scoreFunc()}
  /*loop and calc awayScore */
  for (j=0;j<numOfInnings;j++){
    awayScore = awayScore + scoreFunc()}
  outObj.Home = homeScore;
  outObj.Away = awayScore;
  return outObj;
}
/* Task 4: 
Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */
console.log('Task#4');

console.log('invoke get inning score:')
console.log(getInningScore(inning));

function getInningScore(inningFunc){
  let outObj={};
  outObj.Home=inningFunc();
  outObj.Away=inningFunc();
  return outObj; /*has the out score as object*/
}
/*Function to get the suffix for numbers 1 thru 10 */
function getNumSuffix(index){
  let suffixme=" "
  if (index===1){
    suffixme= 'st'
  }else if (index===2){
    suffixme= 'nd'
  }else if(index===3){
    suffixme = 'rd'
  }else if(index>=4 && index<=10){
    suffixme = 'th'
  }
  return suffixme;
  }

console.log('After calling scoreboard func:')
console.log(scoreboard(getInningScore,inning,10));

function scoreboard(func1,func2,noOfInnings) {
  finalObj={
    awayScore:0,
    homeScore:0
  };
  for(i=1;i<=noOfInnings;i++){
    let inningScore=0
    inningScore=func1(func2);
    finalObj.homeScore=finalObj.homeScore+inningScore.Home;
    finalObj.awayScore=finalObj.awayScore+inningScore.Away;
    let numSuffix=getNumSuffix(i);
    if (i===noOfInnings){
      console.log(`Final Score :${finalObj.awayScore} - ${finalObj.homeScore}`)}else{
      console.log(`${i}${numSuffix} inning: ${finalObj.awayScore} - ${finalObj.homeScore}`);
    }
  }
  return finalObj;
}


