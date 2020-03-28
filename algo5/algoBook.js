///Setting and Swapping. 
//Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

var myNumber = 42;
var myName = "Connor";
var temp = myNumber;
myNumber = myName;
myName = temp;

//Print -52 to 1066. 
//Print integers from - 52 to 1066 using a FOR loop.

for(var i = -52; i < 1067; i++){
    console.log(i);
}

//Don’t Worry, Be Happy
//Create beCheerful().Within it, console.log string "good morning!" Call it 98 times.

function beCheerful(num){
    for(var i = 0; i < num; i++){
        console.log("good morning!");
    }
}
beCheerful(98);

//Multiples of Three – but Not All
//Using FOR, print multiples of 3 from - 300 to 0. Skip - 3 and - 6.

for(var i = -300; i < 1; i++){
    if(i == -3 || i == -6){
        continue;
    }
    else{
        console.log(i);
    }
}

//Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

var i = 2000;
while(i < 5281){
    console.log(i);
    i++;
}

//You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know ? ", else log "Just another day...."

function birthday(month, date){
    if((date == 3 && month == 21) ||(date == 21 && month == 3)){
        console.log("How did you know?");
    }
    else{
        console.log("Just another day....");
    }
}
birthday(3,21);

// Leap Year
//Write a function that determines whether a given year is a leap year.If a year is divisible by four, 
//it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function leapYear(year){
    if(year % 400 == 0){
        console.log("Leap Year!");
    }
    if(year % 100 == 0){
        console.log("Not Leap Year!");
    }
    if(year % 4 == 0 && year % 100 != 0){
        console.log("Leap Year!");
    }
}
leapYear(2020);
//leapYear(2016); leap year
//leapYear(1900); not leap year

//Print and Count 
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

function printCount(){
    count = 0;
    for(var i = 512; i < 4097; i++){
        if(i % 5  == 0){
            console.log(i);
            count = count + 1;
        }
    }
    console.log(count);
}
printCount();

//Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.

i = 6;
while(i < 60000){
    if(i % 6 == 0){
        console.log(i);
        i++;
    }
    i++;
}

//Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead.If by 10, also print " Dojo"

function codingDojo(){
    for(var i = 1; i < 101; i++){
        if(i % 5 == 0){
            if(i % 10 == 0){
                console.log("Coding Dojo");
            }
            else{
                console.log("Coding");
            }
        }
        else{
            console.log(i);
        }
    }
}
codingDojo();

//What Do You Know?
// Your function will be given an input parameter incoming.Please console.log this value.

function printIncoming(incoming){
    console.log(incoming);
}
printIncoming("Hello World");

//Whoa, That Sucker’s Huge…
// Add odd integers from - 300, 000 to 300, 000, and console.log the final sum.Is there a shortcut ?

var sum = -300000 + 300000
console.log(sum);

//Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours(exclude 0), without a FOR loop.

i = 2016; 
while(i > 0){
    if(i % 4 == 0){
        console.log(i);
        i--;
    }
    i--;
}

//Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. 
//For(2, 9, 3), print 9 6 3(on successive lines).

function flexCountDown(lowNum, highNum, mult){
    for(var i = highNum; i >= lowNum; i--){
        if(i % mult == 0){
            console.log(i);
        }
    }
}
flexCountDown(5, 100, 2);

//The Final Countdown
//This is based on “Flexible Countdown”.The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! //Given 4 parameters(param1, param2, param3, param4), print the multiples of param1, starting at param2 and extending to param3.
//One exception: if a multiple is equal to param4, then skip(don’t print) it.
//Do this using a WHILE.Given(3, 5, 17, 9), print 6, 12, 15(which are all of the multiples of 3 between 5 and 17, and excluding the value 9)

function finalCount(param1, param2, param3, param4){
    let i = param2;
    while(i < param3){
        if(i == param4){
            if(param4 % param1 == 0){
                i++;
            }
        }
        if(i % param1 == 0){
            console.log(i);
            i++;
        }
        else{
            i++;
        }
    }
}
finalCount(3, 5, 17, 9);

//Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, 
//from the number(as array’s ‘zeroth’ element) down to 0(as the last element).How long is this array ? 

function countdown(num){
    let arrnew = [];
    for(var i = num; i >= 0; i--){
        arrnew.push(i);
    }
    console.log(arrnew.length);
    return arrnew;
}
countdown(5);

//Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.

function printReturn(arr){
    if(arr.length == 2){
        console.log(arr[0]);
        return arr[1];
    }
}
printReturn([2,5]);

//First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length.What happens if
// the array’s first value is not a number, but a string(like "what?") or a boolean(like false). 

function firstPlusL(arr){
    sum = arr[0] + arr.length;
    return sum;
}
firstPlusL(["hello", 2, 3, 4, 10]); // if first value is false(arr[0] = 0), if first value is true(arr[0] = 1)

//Values Greater than Second
// For[1, 3, 5, 7, 9, 13], print values that are greater than its 2nd value.Return how many values this is.

function greaterThanSec(arr){
    let count = 0;
    for(var i = 2; i < arr.length; i++){
        if(arr[i] > arr[1]){
            console.log(arr[i]);
            count = count + 1;
        }
    }
    return count;
}
greaterThanSec([1,3,5,7,9,13]);

//Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater
// than its 2nd value.Print how many values this is.What will you do if the array is only one element long ? 

function greatThanSec(arr){
    let arrnew = [];
    if(arr.length == 1 || arr.length == 2){
        return arr.length;
    }
    if(arr.length > 2){
        for(var i = 2; i < arr.length; i++){
            if(arr[i] > arr[1]){
                arrnew.push(arr[i]);
            }
        }
        console.log(arrnew.length);
        return arrnew;
    }
}
greatThanSec([1,2,3,4,5,10,20,5,2]);// arrnew = [3,4,5,10,20,5], arrnew.length = 6

//This Length, That Value
// Given two numbers, return array of length num1 with each value num2.Print "Jinx!" if they are same.

function thisLenThatVal(num1, num2){
    let arrnew = [];
    if(num1 == num2){
        console.log("Jinx!")
    }
    if(num1 != num2){
        for(var i = 0; i < num1; i++){
            arrnew.push(num2);
        }
    }
    return arrnew;
}
thisLenThatVal(5, 100);

//Fit the First Value
// Your function should accept an array.If value at[0] is greater than array’s length, print "Too big!";
// if value at[0] is less than array’s length, print "Too small!"; otherwise print "Just right!". 

function firstVal(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[0] > arr.length){
            console.log("Too big!");
            break;
        }
        if(arr[0] == arr.length){
            console.log("Just right!");
            break;
        }
        if(arr[0] < arr.length){
            console.log("Too small!");
            break;
        }
    }
}
firstVal([10, 5, 5, 5, 5]); //Too big!
// firstVal([5, 5, 5, 5, 5]); // Just right!
// firstVal([2, 5, 5, 5, 5]); // Too small!

//Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales.Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit, and 
// returns the equivalent temperature as expressed in Celsius degrees.For review, Fahrenheit = (9 / 5 * Celsius) + 32.

function fahrenheitToCelsius(fDegrees){
    fTemp = (fDegrees - 32) * (5/9);
    return fTemp;
}
fahrenheitToCelsius(45);

//Celsius to Fahrenheit

function celsiusToFahrenheit(cDegrees){
    cTemp = (cDegrees * 9/5) + 32;
    return cTemp;
}
celsiusToFahrenheit(90); 


//next page


//Biggie Size
// Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1, 3, 5, -5]) returns that 
// same array, changed to[-1, "big", "big", -5]. 

function makeItBig(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}
makeItBig([-1, 3, 5, -5]); // [-1, "big", "big", -5]

//Print Low, Return High
// Create a function that takes array of numbers. The function should print the lowest value in the array, 
// and return the highest value in the array.

function printReturn(arr){
    max = arr[0];
    min = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}
printReturn([2,4,10,25,7,8,9]);

//Print One, Return Another
// Build a function that takes array of numbers.The function should print second - to - last value in the array, 
// and return first odd value in the array.

function printReturn(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
            console.log(arr[arr.length - 2]);
            return arr[i];
        }
    }
}
printReturn([2,4,5,7,6,2]);

//Double Vision
// Given array, create a function to return a new array where each value in the original has been doubled.
// Calling double([1, 2, 3]) should return [2, 4, 6] without changing original.

function double(arr){
    let arrnew = [];
    for(var i = 0; i < arr.length; i++){
        arrnew.push(arr[i] * arr[i]);
    }
    return arrnew;
}
double([1,2,3,4,5]);

//Count Positives
// Given array of numbers, create function to replace last value with number of positive values.
// Example, countPositives([-1, 1, 1, 1]) changes array to[-1, 1, 1, 3] and returns it. 

function countPositives(arr){
    let count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            count = count + 1;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}
countPositives([-1, 1, 1, 1]);

//Evens and Odds
// Create a function that accepts an array.Every time that array has three odd values in a row, print "That’s odd!" 
// Every time the array has three evens in a row, print "Even more so!"

function evensOdds(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            if(arr[i + 1] % 2 == 0){
                if(arr[i + 2] % 2 ==0){
                    console.log("Even more so!");
                }
            }
        }
        if (arr[i] % 2 == 1) {
            if (arr[i + 1] % 2 == 1) {
                if (arr[i + 2] % 2 == 1) {
                    console.log("That's odd!");
                }
            }
        }
    }
}
evensOdds([1,1,1,2,2,2,1,3,12,4,4,1]); // thats odd, even more so even more so

//Increment the Seconds
// Given arr, add 1 to odd elements([1], [3], etc.), console.log all values and return arr. 

function incSec(arr){
    for(var i = 0; i < arr.length; i++){
        if(i % 2 == 1){
            arr[i] = arr[i] + 1; 
        }
    }
    return arr;
}
incSec([1,2,3,4,5,6,7,8,9]); //[1,3,3,5,5,7,7,9,9]

//Previous Lengths
// You are passed an array containing strings. Working within that same array, replace each
// string with a number – the length of the string at previous array index – and return the array.

function prevLen(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].length;
    }
    return arr;
}
prevLen(["hello","goodbye","welcome","greetings"]);

//Add Seven to Most
// Build function that accepts array.Return a new array with all values except first, adding 7 to each.Do not alter the original array.

function addSeven(arr){
    let arrnew = [];
    for(var i = 1; i < arr.length; i++){
        arrnew.push(arr[i] + 7);
    }
    return arrnew;
}
addSeven([1,2,3,4,5,6,7]); //[9,10,11,12,13,14]

//Reverse Array
// Given array, write a function to reverse values, in -place.Example: reverse([3, 1, 6, 4, 2]) returns same array, containing[2, 4, 6, 1, 3].

function revArr(arr){
    for(var i = 1; i < (arr.length / 2) + 1; i++){
        temp = arr[i - 1];
        arr[i - 1] = arr[arr.length - i];
        arr[arr.length - i] = temp;
    }
    return arr;
}
revArr([1,2,3,4,5]);

//Outlook: Negative
// Given an array, create and return a new one containing all the values of the provided array, made negative(not simply multiplied by - 1).
// Given[1, -3, 5], return [-1, -3, -5]. 

function newNeg(arr){
    let arrnew = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arrnew.push(arr[i]);
        }
        if(arr[i] > 0){
            arrnew.push(arr[i] * -1);
        }
    }
    return arrnew;
}
newNeg([1, -3, 5]); 

//Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is
// equal to "food".If no array elements are "food", then print "I'm hungry" once. 

function alwaysHungry(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
        }
        if(arr.includes("food") == false){
            console.log("I'm hungry");
            break;
        }
    }
}
alwaysHungry([1, 2, 4, "food", 5, "food", 6, "food" ]);
// alwaysHungry([1,2,3,4,5]); 

//Swap Toward the Center
// Given array, swap first and last, third and third - tolast, etc.Input[true, 42, "Ada", 2, "pizza"] becomes["pizza", 42, "Ada", 2, true].
// Change[1, 2, 3, 4, 5, 6] to[6, 2, 4, 3, 5, 1].

function swapToCenter(arr){
    for(var i = 1; i < arr.length; i++){
        if(i % 2 == 1){
            temp = arr[i];
            arr[i] = arr[arr.length - i]
            arr[arr.length - i] = temp;
        }
    }
    return arr;
}
swapToCenter([1,2,3,4,5,6]); // [6,2,4,3,5,1]