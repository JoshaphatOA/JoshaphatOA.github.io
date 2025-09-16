function calculate() {

    // YOUR CODE GOES HERE
    let num1 =Number( document.getElementById("number1").value);
    let num2 = Number( document.getElementById("number2").value);

    let output = 0;
    while(num1 <= num2){
        output = output + num1;
        num1 ++;
    }

    console.log(num1);
    document.getElementById("result").innerText = output;


}