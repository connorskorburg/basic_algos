// Return the given array, after setting any negative values to zero.  
// For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].
function resetNegatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
var result = resetNegatives([1, 2, -1, -3]);
console.log(result);

// Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  
// For example moveForward( [1,2,3]) should return [2,3,0].
function moveForward(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;
    return arr;
}
var result = moveForward([1, 2, 3]);
console.log(result);

// Given an array, return an array with values in a reversed order.  
// For example, returnReversed([1,2,3]) should return [3,2,1].
function returnReversed(arr) {
    // the trick here is to realize that you only need to go up to the midpoint in the for loop
    // be sure to keep a temp variable so you don't lose the value that's about to be overwritten
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}
var result = returnReversed([1, 2, 3]);
console.log(result);



//another way to do it
function returnReversed(arr) {
    for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
returnReversed([1, 2, 3, 5, 6, 7])

// Create a function that changes a given array to list each original element twice, retaining original order.  
// Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
function repeatTwice(arr) {
    // the trick here is to find the pattern between the original array and the final array
    // ["a","b","c"] needs to become ["a","a","b","b","c","c"]
    // working backwards through the array, you can move "c" to its two new positions, which are 2*index and 2*index+1
    // ["a", "b", "c",____, "c", "c"] 
    // ["a", "b", "b", "b", "c", "c"]
    // ["a", "a", "b", "b", "c", "c"]
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[2 * i + 1] = arr[i];
        arr[2 * i] = arr[i];
    }
    console.log(arr);
}
repeatTwice([4, "Ulysses", 42, false]);