// Excercise 1 - Predict the Output
// DO NOT RUN THE CODE UNTIL YOU HAVE MADE YOUR PREDICTIONS
// challenge 1
function makeDinner(ingredient1, ingredient2, minutes) {
    console.log("mixing in:", ingredient1);
    if (ingredient2 == "Hot Sauce") {
        console.log("SPICY");
        if (minutes > 90) {
            console.log("slow and low");
        }
    } else {
        console.log("MILD");
    }
}
makeDinner("tomato sauce", "sugar", 60);
makeDinner("salt", "Hot Sauce", 90);
makeDinner("beans", "Hot Sauce", 120);


// challenge 2
function thisLengthThatNumber(num1, num2) {
    var newArr = [];
    newArr.length = num1;
    for (var i = 0; i <= newArr.length; i++) {
        newArr[i] = num2;
    }
    return newArr;
}
console.log(thisLengthThatNumber(2, 4));
console.log(thisLengthThatNumber(2, 2)); // explain this outcome







// Excercise 2 - Fix the Code so that we avoid the previous error.
// challenge 1
function thisLengthThatNumber(num1, num2) {
    var newArr = [];
    newArr.length = num1;
    for (var i = 0; i <= newArr.length; i++) {
        newArr[i] = num2;
    }
    return newArr;
}
console.log(thisLengthThatNumber(3, 4)); // expect: [4,4,4]
console.log(thisLengthThatNumber(2, 2)); // expect: [2,2]


// challenge 2 - Fix the code so that the given array has each
// of its values shifted one position to the right and return it.
// Example: given [1,2,3] return [1,1,2,3]
function shiftRight(arr) {
    for (var i = arr.length; i >= 0; i--) {
        arr[i - 1] = arr[i];
    }
    return arr;
}







// Exercise 3 - Write the Code
// Oddities
// Build a function that takes in 3 arguments: 2 numbers and a string.
// If the sum of the numbers is odd, print the string.
// If the sum of the numbers is even, print "None Shall Pass"
// If the numbers are the same, print "Quite the Pair"
// If both numbers are negative, print "Somebody Needs a Pep Talk!"