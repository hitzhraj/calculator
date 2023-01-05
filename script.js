let result = document.getElementById('result');
let buttons = document.getElementsByClassName('btn');
let screenValue = "";

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.value;
        console.log("The button content is ", buttonText);
        if (buttonText === 'Clear') {
            screenValue = "";
            result.value = screenValue;
        } else if (buttonText === '=') {
            result.value = eval(screenValue);
        } else {
            screenValue += buttonText;
            result.value = screenValue;
        }
    });
}