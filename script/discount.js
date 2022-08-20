
document.getElementById('calculate-button').addEventListener('click', function () {
    const cuponeInput = document.getElementById('coupon-code');
    const cuponeValue = cuponeInput.value;
    const buttonCalc = document.getElementById('calculate-button')
    if (cuponeValue === 'DOM') {
        buttonCalc.removeAttribute('disabled')
    }
    else {
        buttonCalc.setAttribute('disabled', true)
    }

})