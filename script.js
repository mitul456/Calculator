

let currentDisplay = ' ';



function btnAC(){
    currentDisplay = '';
    document.getElementById('display').value = currentDisplay;
}
function btnPM(){
    currentDisplay = currentDisplay;
    document.getElementById('display').value = currentDisplay;
}
function btnMod(){
    currentDisplay = currentDisplay + '%';
    document.getElementById('display').value = currentDisplay;
}
function btndiv(){
    currentDisplay = currentDisplay + '/';
    document.getElementById('display').value = currentDisplay;
}
function btn7(){
    currentDisplay = currentDisplay + '7';
    document.getElementById('display').value = currentDisplay;
}
function btn8(){
    currentDisplay = currentDisplay + '8';
    document.getElementById('display').value = currentDisplay;
}
function btn9(){
    currentDisplay = currentDisplay + '9';
    document.getElementById('display').value = currentDisplay;
}
function btnStar(){
    currentDisplay = currentDisplay + '*';
    document.getElementById('display').value = currentDisplay;
}
function btn4(){
    currentDisplay = currentDisplay + '4';
    document.getElementById('display').value = currentDisplay;
}
function btn5(){
    currentDisplay = currentDisplay + '5';
    document.getElementById('display').value = currentDisplay;
}
function btn6(){
    currentDisplay = currentDisplay + '6';
    document.getElementById('display').value = currentDisplay;
}
function btn6(){
    currentDisplay = currentDisplay + '6';
    document.getElementById('display').value = currentDisplay;
}
function btnMin(){
    currentDisplay = currentDisplay + '-';
    document.getElementById('display').value = currentDisplay;
}
function btn1(){
    currentDisplay = currentDisplay + '1';
    document.getElementById('display').value = currentDisplay;
}
function btn2(){
    currentDisplay = currentDisplay + '2';
    document.getElementById('display').value = currentDisplay;
}
function btn3(){
    currentDisplay = currentDisplay + '3';
    document.getElementById('display').value = currentDisplay;
}
function btnPlus(){
    currentDisplay = currentDisplay + '+';
    document.getElementById('display').value = currentDisplay;
}
function btnZero(){
    currentDisplay = currentDisplay + '0';
    document.getElementById('display').value = currentDisplay;
}
function btnDot(){
    currentDisplay = currentDisplay + '.';
    document.getElementById('display').value = currentDisplay;
}
function btnEqual(){
    let result = eval(currentDisplay);
    currentDisplay = result;
    document.getElementById('display').value = currentDisplay;
}