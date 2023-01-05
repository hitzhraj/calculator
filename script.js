//addition function
function add(a, b) {
    return a + b;
}

//subtraction function
function subtract(a, b) {
    return a - b;
}

//multiplication function
function multiply(a, b) {
    return a * b;
}

//division function
function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    if (op === '+') {
        return add(a, b);
    } else if (op === '-') {
        return subtract(a, b);
    } else if (op === '*') {
        return multiply(a, b);
    } else if (op === '/' && b !== null) {
        return divide(a, b);
    } else {
        return 'Enter a valid input';
    }
}

function display(val) {
    document.getElementById('result').value += val;
}

function clr() {
    document.getElementById('result').value = "";
}

// function myFunction(event) {
//     if (event.key == '0' || event.key == '1' 
//         || event.key == '2' || event.key == '3'
//         || event.key == '4' || event.key == '5' 
//         || event.key == '6' || event.key == '7'
//         || event.key == '8' || event.key == '9' 
//         || event.key == '+' || event.key == '-'
//         || event.key == '*' || event.key == '/')
//         document.getElementById("result").value += event.key;
// }

// var cal = document.getElementById("calcu");
//         cal.onkeyup = function (event) {
//             if (event.keyCode === 13) {
//                 console.log("Enter");
//                 let x = document.getElementById("result").value
//                 console.log(x);
//                 solve();
//             }
//         }