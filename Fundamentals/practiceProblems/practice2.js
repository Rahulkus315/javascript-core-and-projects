/*
setInterval(function(){
    console.log("Hello world");

}, 2000);

// ===.
let count = 0
setInterval(function(){
    console.log(count);
    count++;
}, 0.00001);
*/

// ==============
// setInterval(function(){
//     let time = new Date();
//     console.log(time.toLocaleTimeString())
// }, 1000)

//===============

//  how to stop setInterval
let count = 1;
let timer = setInterval(function(){
    console.log(count);
    if(count === 10){
        clearInterval(timer);
    }
    count++;
}, 5000)