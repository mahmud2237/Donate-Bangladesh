
let timeNow = new Date();
let totalBalance = document.getElementById('total-balance');

let donated1 = document.getElementById('donated1');
let donateBtn1 = document.getElementById('button1');
let donateInput1 = document.getElementById('donate-input1');

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
            // add history
            const div = document.createElement('div');
            div.innerHTML = `
                <div class = 'divider'></div>
                <h1 class = 'text-2xl text-black'>${donation} Taka is Donated for Flood at Feni, Bangladesh</h1>
                <p>Date: ${timeNow}</p>
                <div class = 'divider'></div>
            `
            document.getElementById('history-section').appendChild(div);
        })
    } else {
        donateBtn1.disabled = true;
    }
})


let donated2 = document.getElementById('donated2');
let donateBtn2 = document.getElementById('button2');
let donateInput2 = document.getElementById('donate-input2');
donateInput2.addEventListener('keyup', function () {
    const donation = parseFloat(donateInput2.value);
    if (typeof donation === 'number' && donation > 0) {
        donateBtn2.disabled = false;
        donateBtn2.addEventListener('click', function () {
            const totalBalanceNum = parseFloat(totalBalance.innerText);
            const newBalance = totalBalanceNum - donation;
            totalBalance.innerText = newBalance;
            const donated2Num = parseFloat(donated2.innerText);
            const plusBalance = donated2Num + donation;
            donated2.innerText = plusBalance;
            // add history
            const div = document.createElement('div');
            div.innerHTML = `
                <div class = 'divider'></div>
                <h1 class = 'text-2xl text-black'>${donation} Taka is Donated for Flood at NewKhali, Bangladesh</h1>
                <p>Date: ${timeNow}</p>
                <div class = 'divider'></div>
            `
            document.getElementById('history-section').appendChild(div);
        })
    } else {
        donateBtn2.disabled = true;
    }
})


let donated3 = document.getElementById('donated3');
let donateBtn3 = document.getElementById('button3');
let donateInput3 = document.getElementById('donate-input3');

donateInput3.addEventListener('keyup', function () {
    const donation = parseFloat(donateInput3.value);
    if (typeof donation === 'number' && donation > 0) {
        donateBtn3.disabled = false;
        donateBtn3.addEventListener('click', function () {
            const totalBalanceNum = parseFloat(totalBalance.innerText);
            const newBalance = totalBalanceNum - donation;
            totalBalance.innerText = newBalance;
            const donated3Num = parseFloat(donated3.innerText);
            const plusBalance = donated3Num + donation;
            donated3.innerText = plusBalance;
            // add history
            const div = document.createElement('div');
            div.innerHTML = `
                <div class = 'divider'></div>
                <h1 class = 'text-2xl text-black'>${donation} Taka is Donated for Quota Protest, Bangladesh</h1>
                <p>Date: ${timeNow}</p>
                <div class = 'divider'></div>
            `
            document.getElementById('history-section').appendChild(div);
        })
    } else {
        donateBtn3.disabled = true;
    }
})

