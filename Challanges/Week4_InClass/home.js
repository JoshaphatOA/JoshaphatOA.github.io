// console.log("Week 4 - Hello World");

// Document Object Model

let greeting = document.getElementById("greeting");
console.log(greeting);

// get all instances of p
let paras = document.getElementsByTagName("p");
console.log(paras);

//item in array -> gives you the index
//item of array -> gives you the items
for(para of paras){
    console.log(para.innerText);
}

