const myBtn = document.getElementById("myBtn");
const myLabel1= document.getElementById("myLabel1");
const myLabel2= document.getElementById("myLabel2");
const myLabel3= document.getElementById("myLabel3");

const max = 6;
const min = 1;

let randomNumber1;
let randomNumber2;
let randomNumber3;

myBtn.onclick = function(){
    randomNumber1 = Math.floor(Math.random() * max)+ min;
    myLabel1.textContent = randomNumber1;
    randomNumber3 = Math.floor(Math.random() * max)+ min;
    myLabel3.textContent = randomNumber3;
    randomNumber2 = Math.floor(Math.random() * max)+ min;
    myLabel2.textContent = randomNumber2;
}

