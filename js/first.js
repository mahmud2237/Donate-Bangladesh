

let totalBalance = document.getElementById('total-balance');

let donated1 = document.getElementById('donated1');


let donated2 = document.getElementById('donated2');
// console.log(donation2);
let donated3 = document.getElementById('donated3');
// console.log(donation3);


let donateBtn1 = document.getElementById('button1');
let donateInput1 = document.getElementById('donate-input1');

let donateBtn2 = document.getElementById('button2');
let donateInput2 = document.getElementById('donate-input2');

let donateBtn3 = document.getElementById('button3');
let donateInput3 = document.getElementById('donate-input3');


donateInput1.addEventListener('keyup', function (event) {
    event.preventDefault();
    const donation = parseFloat(donateInput1.value);
    if (typeof donation === 'number' && donation > 0) {
        donateBtn1.disabled = false;
        donateBtn1.addEventListener('click', function () {
            const totalBalanceNum = parseFloat(totalBalance.innerText);
            const newBalance = totalBalanceNum - donation;
            totalBalance.innerText = newBalance;
            const donated1Num = parseFloat(donated1.innerText);
            const plusBalance = donated1Num + donation;
            donated1.innerText = plusBalance;
        })
    } else {
        donateBtn1.disabled = true;
    }
})

donateInput2.addEventListener('keydown', function () {
    const donation = parseFloat(donateInput2.value);
    if (typeof donation === 'number' && donation > 0) {
        donateBtn2.disabled = false;
    } else {
        donateBtn2.disabled = true;
    }
})
donateInput3.addEventListener('keyup', function () {
    const donation = parseFloat(donateInput3.value);
    if (typeof donation === 'number' && donation > 0) {
        donateBtn3.disabled = false;
    } else {
        donateBtn3.disabled = true;
    }
})

