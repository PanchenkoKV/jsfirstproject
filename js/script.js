"use strict";
// let number =5;
// const numBorederWight =5;
// number = 10;
// console.log(number);
// alert("Go");
//const result = confirm("Are you here?");
const answer = prompt("Do you have a cat?","No");
console.log(typeof(answer));

function newContent() {
    alert("загрузка нового контента");
    document.open();
    document.write("<h1>Долой старое, да здравствует новое!</h1>");
    document.close();
  }