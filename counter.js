let currentNumberArr = document.getElementsByClassName("number");

function increaseNumber(index) {
    currentNumberArr[index].innerText = parseInt(currentNumberArr[index].innerText)  1;
    calculateSum();
}

function decreaseNumber(index) {
    currentNumberArr[index].innerText = parseInt(currentNumberArr[index].innerText) - 1;
    calculateSum();
}

function calculateSum() {
    currentNumberArr = document.getElementsByClassName("number");
    const firstNumber = currentNumberArr[0].innerHTML;
    const secondNumber = currentNumberArr[1].innerHTML;
    const sum = parseInt(firstNumber) + parseInt(secondNumber);

    document.getElementById("sum").innerText = sum;
}