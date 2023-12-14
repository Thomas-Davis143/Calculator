//Thomas Davis
//Date: 6/1/2023
//version: 1.0
//This program works as a calculator



//variables
let output = document.getElementById("output")
let operand1=0;
let operand2=0;
let operator="";
let result="";
//function when equal is pressed
function result1(){
    //sets operand 2 to current input
    operand2=document.getElementById("output").innerHTML;
    //if statement to select correct operation
    if(operator=="+"){
        result = Number(operand1)+Number(operand2);
    }
    else if(operator=="-"){
        result = Number(operand1)-Number(operand2);
    }
    else if(operator=="x"){
        result = Number(operand1)*Number(operand2);
    }
    else if(operator=="/"){
        result = Number(operand1)/Number(operand2);
    }
    //print result and clear the operands and operator
    document.getElementById("output").innerHTML=result;
    operand1=0;
    operand2=0;
    operator="";
}
//when number is clicked display it
function clickedB(num){
    document.getElementById("output").innerHTML+=num

}
//when operator button is clicked
function operator1(type){
    //save current input as operand 1
    operand1=document.getElementById("output").innerHTML;
    num=0;
    //clear screen
    document.getElementById("output").innerHTML=""
    //if statement for operator
    if(type==0){
        operator="+"
    }
    else if(type==1){
        operator="-"
    }
    else if(type==2){
        operator="x"
    }
    else if(type==3){
        operator="/"
    }
}
//function to clear all var and displays
function clearAll(){
    operand1="";
    operand2="";
    operator="";
    document.getElementById("output").innerHTML=""
}
