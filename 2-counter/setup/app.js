"use strict";

let counter = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
btns.forEach(function (button){
    button.addEventListener("click", function(event){//cannnot use id as you cant iterate through ids only classes.
        const clickedBtn = event.currentTarget.classList;
        if (clickedBtn.contains("decrease")){
            counter--;
        }
        else if (clickedBtn.contains("increase")){
            counter++;
        }else {
            counter = 0;
        }
        if (counter < 0){
            value.style.color = "red";
        }else if (counter > 0){
            value.style.color = "green";
        }else {
            value.style.color  = "black";
        }
        value.textContent = counter;
    });
});



//************* MY ORIGINAL CODE *********************//
// let counter = 0;
// let increase = function (event){
//     counter++;
//     let counterText = counter.toString();
//     document.getElementById("value").innerHTML = counterText;
//     changeColor();
// }
// let decrease = function (event){
//     counter--;
//     let counterText = counter.toString();
//     document.getElementById("value").innerHTML = counterText;
//     changeColor();
// }
// let reset = function (event){
//     counter = 0;
//     let counterText = counter.toString();
//     document.getElementById("value").innerHTML = counterText;
//      changeColor();
// }
//
//
// document.getElementById("increase").addEventListener("click", increase);
// document.getElementById("decrease").addEventListener("click", decrease);
// document.getElementById("reset").addEventListener("click", reset);
// let color = document.getElementById("value");
//
// function changeColor(){
//     if (counter < 0){
//         color.style.color = "red";
//     }else if (counter > 0){
//         color.style.color = "green";
//     }
//     else {
//         color.style.color = "black";
//     }
// }
