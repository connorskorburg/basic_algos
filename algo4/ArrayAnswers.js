// Given an array and a value Y, count and print the number of array values greater than Y.
function greaterThanY(arr, y) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            counter++;
        }
    }
    console.log("Values greater than", y, ":", counter);
}
greaterThanY([4, 2, 3, 50, -30, 122], 0);

// Given an array, print the max, min and average values for that array.
function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log("Max:", max, "Min:", min, "Average:", sum / arr.length);
}
maxMinAvg([4, 2, 3, 50, -30, 122])

// Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   
// For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function replaceNegatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}

var result = replaceNegatives([1, 2, -3, -5, 5]);
console.log(result);

// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  
// For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
function removeVals(arr, start, end) {
    // this one is tough and you can do it a lot of different ways!
    var offset = end - start + 1;
    for (var i = start; i <= offset; i++) {
        arr[i] = arr[i + offset];
    }
    console.log(arr); // check out this console log to see how the array looks
    // now we're going to lop off the same "offset" number of values from the end of the array
    arr.length = arr.length - offset;
    return arr;
}
var result = removeVals([20, 30, 40, 50, 60, 70], 2, 4);
console.log(result); 