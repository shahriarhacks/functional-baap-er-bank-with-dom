function getInputFieldById(inputId) {
    const getInputField = document.getElementById(inputId);
    const getInputString = getInputField.value;
    const getInput = parseFloat(getInputString);
    getInputField.value = '';
    return getInput;
}

function getInnerFieldById(innerId) {
    const getSpanField = document.getElementById(innerId);
    const getInnerString = getSpanField.innerText;
    const getInner = parseFloat(getInnerString);
    return getInner;
}
function setAmountById(fieldId, setValue) {
    const getSetValueId = document.getElementById(fieldId);
    getSetValueId.innerText = setValue;
}
// function isNan() {
//     if (isNaN(getInput)) {
//         return alert("Enter Deposite Amount First")
//     }

// }
// if (isNaN(getInput)) {
//     alert("Enter Deposite Amount First")
// }
// if (getInput <= 0) {
//     alert("Amount can't be 0 or Negative Number")
// }
document.getElementById('deposite-button').addEventListener('click', function () {
    const depositAmount = getInputFieldById('deposite-amount');
    if (isNaN(depositAmount)) {
        return
    }
    const previousDeposit = getInnerFieldById('deposite-total');
    const totalDeposit = previousDeposit + depositAmount;
    setAmountById('deposite-total', totalDeposit);

    const previousBalance = getInnerFieldById('blance-total');
    const balaneTotal = previousBalance + depositAmount;
    setAmountById('blance-total', balaneTotal)
})
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputFieldById('withdraw-amount');
    if (isNaN(withdrawAmount)) {
        return
    }
    const previousWithdraw = getInnerFieldById('withdraw-total');
    const totalWithdraw = previousWithdraw + withdrawAmount;
    setAmountById('withdraw-total', totalWithdraw);

    const previousBalance = getInnerFieldById('blance-total');
    const totalBlanceAmount = previousBalance - withdrawAmount;
    setAmountById('blance-total', totalBlanceAmount);
})