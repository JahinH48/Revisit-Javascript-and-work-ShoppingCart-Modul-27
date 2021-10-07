function getpin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getpin();
    }
}

function genareted() {
    const pin = getpin();
    document.getElementById('display-show').value = pin;
}
document.getElementById('cal-keypad').addEventListener('click', function (event) {
    const NumberText = event.target.innerText;
    const calc = document.getElementById('Number-output');
    if (isNaN(NumberText)) {
        if (NumberText == 'C') {
            calc.value = '';
        } else {

        }
    } else {

        const previousCalc = calc.value;
        const newCalc = previousCalc + NumberText;
        calc.value = newCalc;
    }
})

function verifipin() {
    const carrentPin = document.getElementById('display-show').value;
    const type = document.getElementById('Number-output').value;
    const faill = document.getElementById('no');
    const pass = document.getElementById('yes');
    if (carrentPin == type) {

        pass.style.display = 'block';
        faill.style.display = 'none';
    }
    else {

        faill.style.display = 'block';
        pass.style.display = 'none';

    }
}