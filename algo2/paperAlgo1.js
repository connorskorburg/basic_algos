//exercise 1
function multiply(x, y) {
    console.log(x);
    console.log(y);
}
b = multiply(2, 3);
console.log(b);
//output will console.log 2,3 and undefined

//exercise 2
function multiply(x,y){
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));
//output will console.log 6, 10

//exercise 3
var x = [1,2,3,4,5,10];
for(var i = 0; i < 5; i++){
    i = i + 3;
    console.log(i);
}
//output will console.log 3,7

//exercise 4
var x = 15; 
console.log(x);
function awesome(){
    var x = 10;
    console.log(x);
}
console.log(x)
awesome();
console.log(x);
//output will console.log 15, 15, 10, 15

//exercise 5
for(var i = 0; i < 15; i+2){
    console.log(i);
}
//output will console.log 0, 2, 4, 6, 8, 10, 12, 14

//exercise 6
for(var i = 0; i < 3; i++){
    for(var j = 0; j < 2; j++){
        console.log(i*j);
    }
}
//output will console log 0, 0, 0, 1, 0, 2

//exercise 7 
function looping(x,y){
    for(var i = 0; i < x; i++){
        for(var j = 0; j < x; j++){
            console.log(i*j);
        }
    }
}
z = looping(3,3);
console.log(z);
//output will console.log 0, 0, 0, 0, 1, 2, 0, 2, 4, undefined

//exercise 8
function looping(x,y){
    for(var i = 0; i < x; i++){
        for(var j = 0; j < y; j++){
            console.log(i*j);
        }
    }
    return x * y; 
}
z = looping(3,5);
console.log(z);
//output will console.log 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 2, 4, 6, 8, 15

//part two
//Print 1 to x
function printUpTo(x){
    if(x < 0){
        console.log("Negative Number");
        return false;
    }
    else{
        for(var i = 0; i < x; i++){
            console.log(i);
        }
    }
}
printUpTo(100000);
y = printUpTo(-10);
console.log(y);

//Print Sum
function printSum(x){
    var sum = 0;
    for(var i = 0; i <= x; i++){
        console.log(i);
        sum = sum + i;
    }
    return sum;
}
y = printSum(255);
console.log(y);

//PrintSumArray
function printSumArray(x){
    var sum = 0; 
    for(var i = 0; i < x.length; i++){
        sum = sum + x[i];
    }
    return sum;
}
console.log(printSumArray([1,2,3]));