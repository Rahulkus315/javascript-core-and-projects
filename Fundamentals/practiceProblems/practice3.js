// CALLBACK FUNCTION
/*
function greet(name) {
    console.log("Hello world!!" + name);
}
function execute(func){
    func("jonshon")
}
execute(greet);
*/

//add
// calculate
/*
function ADD(a, b){
    return a + b;
}
function calculate(a, b, ADD){
    let sum = ADD(a, b);
    console.log(sum)
}
calculate(10, 20, ADD);
*/
// set timeout
/*
console.log("Start");
setTimeout(function(){
    console.log("Hello world")
},200)
console.log("End")
*/


//  with the use of function (it is a correct way also)

console.log("start")
setTimeout(function sayhello(){
    console.log("Hello world")
}, 10000)

console.log("End")