// console.log("Hello World")

// var log = function (msg) {
//     console.log("[Log] : ", msg)
// }
// log("hello world")
// log("welcome to SIT737")


var async = function () {
    setTimeout(function () { log("I am coming out later although I have been called before the next one") }, 2000)
}
var adder = function (first, second) {
    return first + second
}
var log = function (msg) {
    console.log("[Log] : ", msg)
}


log("The sum is " + adder(5, 6))
async();
log("This is going to come out before the previous one")
