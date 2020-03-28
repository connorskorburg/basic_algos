//Given an array and a value Y, count and print the number of array values greater than Y.
function countAndPrint(y, arr){
    count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > y){
            console.log(arr[i]);
            count = count + 1;
        }
    }
    return count;
}
countAndPrint(3, [2,5,3,7,4,4]);

//Given an array, print the max, min and average values for that array.
function maxMinAvg(arr){
    sum = 0;
    max = arr[0];
    min = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    avg = sum / arr.length;
    console.log("max:", max);
    console.log("min:", min);
    console.log("avg:", avg);
}
maxMinAvg([1,4,6,10,4]); // max = 10, min = 1, avg = 5

// Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’. For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

function replaceNegatives(arr){
    arrnew = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arrnew.push("Dojo");
        }
        else{
            arrnew.push(arr[i]);
        }
    }
    return arrnew;
}
replaceNegatives([1,2,-3,-5,5]); // [1,2, "Dojo", "Dojo", 5]

//Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function removeVals(arr, x, y){
    arrnew = [];
    for(var i = 0; i < arr.length; i++){
        if(i < x){
            arrnew.push(arr[i]);
        }
        if(i > y){
            arrnew.push(arr[i]);
        }
    }
    return arrnew;
}
removeVals([20,30,40,50,60,70],2,4); // [20, 30, 70]