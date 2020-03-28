//exercise 1
var x = [1, 2, 3, 4, 5, 10]
for (var i = 0; i < 5; i++) {
    console.log(i);
}
//output will console.log 0, 1, 2, 3, 4

//exercise 2
var x = [1, 2, 3, 4, 5, 10]
for (var i = 0; i < 5; i++) {
    i = i + 1;
    console.log(i);
}
//output will console.log 1, 3, 5

//exercise 3
var x = [1, 2, 3, 4, 5, 10]
for (var i = 0; i < 5; i++) {
    i = i + 3;
    console.log(i);
}
//output will console.log 3, 7

//exercise 4
function y(num1, num2) {
    return num1 + num2;
}
console.log(y(2, 3))
console.log(y(3, 5))
//function will return 5, 8 and console.log 5,8

//exercise 5 
function y(num1, num2) {
    console.log(num1);
    return num1 + num2;
}
console.log(y(2, 3))
console.log(y(3, 5))
//function will return 5,8. output will console.log 2,5,3,8

//exercise 6
a = 15;
console.log(a);
function y(a) {
    console.log(a);
    return a;
}
b = y(10);
console.log(b);
//function will return 10 to b = y(10). output will console.log 15, 10, 10. 

//exercise 7
a = 15;
console.log(a);
function y(a) {
    console.log(a);
    return a * 2;
}
b = y(10);
console.log(b);
//function returns 20 to b = y(10). output will console.log 15, 10, 20