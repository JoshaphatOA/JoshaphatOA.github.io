// Task 1
// Add an event listner to the button (the user drags his mouse over the button)
let btn = document.getElementById("justin-btn");
let result = document.getElementById("result");

btn.addEventListener("mouseover", (event)=>{
    result.innerText = "Welcome to My Heart";
    result.style.color ="blue";
    result.style.backgroundColor = "pink";

})

btn.addEventListener("mouseout", (anotherEvent)=>{
    result.innerText = "Don't Leave My Heart"
    result.style.color ="red";
    result.style.backgroundColor = "black";
})

// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)
