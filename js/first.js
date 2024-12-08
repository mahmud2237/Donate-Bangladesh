

let totalBalance = document.getElementById('total-balance');
let donation1 = document.getElementById('donated1');
let donation2 = document.getElementById('donated2');
let donation3= document.getElementById('donated3');

let donateBtn1 = document.getElementById('button1');
let donateInput1 = document.getElementById('donate-input1');
let donateBtn2 = document.getElementById('button2');
let donateInput2 = document.getElementById('donate-input2');
let donateBtn3 = document.getElementById('button3');
let donateInput3 = document.getElementById('donate-input3');


donateInput1.addEventListener('keyup', function () {
    const donation = parseFloat(donateInput1.value);
    if (typeof donation === 'number' && donation > 0) {
        donateBtn1.disabled = false;
    } else {
        donateBtn1.disabled = true;
    }
})
donateInput2.addEventListener('keyup', function () {
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

