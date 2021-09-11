var myName = "Roberto";
var myAge = 25;
var hasHobbies = true;
// console.log(myName);

function summarizeUser(userName, userAge, userHasHobbies) {
    return (`Name is ${userName}, age is ${userAge} and the user has hobbies ${userHasHobbies}`);
}

console.log(summarizeUser(myName, myAge, hasHobbies));