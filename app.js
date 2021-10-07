
function totalNumber(jisan, add) {
    const caseInput = document.getElementById(jisan);
    let caseNumber = caseInput.value;

    if (add == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    const coseTotal = document.getElementById('tk');
    coseTotal.innerText = caseNumber * 59;
    caseInput.value = caseNumber;
    const coseTotaltk = document.getElementById('tk-2');
    coseTotaltk.innerText = caseNumber * 1219;

    // calculated total 

    calculated();

}
function inputeValue(product) {
    const phoneInput = document.getElementById(product);
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}

function calculated() {

    const phoneTotal = inputeValue('case-number1') * 1219;
    const caseFTotal = inputeValue('case-number') * 59;
    const SubTotal = phoneTotal + caseFTotal;
    const tex = SubTotal / 10;
    const totalePrice = SubTotal + tex;

    document.getElementById('Subtotal').innerText = SubTotal;
    document.getElementById('Tax').innerText = tex;
    document.getElementById('Total').innerText = totalePrice;
}
// fast phone 

document.getElementById('case-plus1').addEventListener('click', function () {
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1; */
    totalNumber('case-number1', true);

})
document.getElementById('case-nagitive1').addEventListener('click', function () {

    totalNumber('case-number1', false);

})

// 2nd plus
document.getElementById('case-nagitive').addEventListener('click', function () {

    totalNumber('case-number', false);

})
document.getElementById('case-plus').addEventListener('click', function () {
    totalNumber('case-number', true);

})

//  Total Amound 




