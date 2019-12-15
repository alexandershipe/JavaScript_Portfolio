function calculateme(){

   // var operation = document.getElementById("operation").value;

    if (document.getElementById("operation1").checked)
    {
        operation = document.getElementById("operation1").value;
    }
    if (document.getElementById("operation2").checked)
    {
        operation = document.getElementById("operation2").value;
    }
    if (document.getElementById("operation3").checked)
    {
        operation = document.getElementById("operation3").value;
    }
    if (document.getElementById("operation4").checked)
    {
        operation = document.getElementById("operation4").value;
    }

    if(isNaN(document.getElementById("operand1").value) || document.getElementById("operand1").value === ""){
        return window.alert("Please enter a valid number for operand 1."); 
    }
    else if(isNaN(document.getElementById("operand2").value) || document.getElementById("operand2").value === ""){
        return window.alert("Please enter a valid number for operand 2."); 
    }

    var operand1  = parseInt(document.getElementById("operand1").value, 10);
    var operand2  = parseInt(document.getElementById("operand2").value,10);

    var answer = 7.0;

    if (operation == "Addition")
    {
        answer = operand1 + operand2;
    }
    else if (operation == "Subtraction")
    {
        answer = operand1 - operand2;
    }
    else if (operation == "Multiplication")
    {
        answer = operand1*operand2;
    }
    else 
    {
        answer = operand1/operand2;
    }

    document.getElementById("Answer").style.display = "block";
    document.getElementById("final").innerHTML = answer;

}


// Hide the total amount on initial load
document.getElementById("Answer").style.display = "none";

// clicking button calls the Button click function
document.getElementById("calculate").onclick = function() {calculateme();};
