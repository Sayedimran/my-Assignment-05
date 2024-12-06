const DonateBtnShow = document.getElementById('showDonateBtn')
DonateBtnShow.addEventListener('click', function () {
    showElementById('donateCalculate');
    DonateBtnShow.classList.add('bg-lime-400')
    HistoryBtnShow.classList.remove('bg-lime-400')
    console.log('ki holo ');



});


const HistoryBtnShow = document.getElementById('ShowHistoryBtn')
HistoryBtnShow.addEventListener('click', function () {

    showElementById('HistorySection');
    console.log('ki holo 1 ');


    const HistoryDiv = document.createElement('div');

    const donateInputAmount = getInputElementById('amount-input');

    const donatePlaseName = document.getElementById('donate-place').innerText;


    HistoryBtnShow.classList.add('bg-lime-400');
    DonateBtnShow.classList.remove('bg-lime-400');

    if (isNaN(donateInputAmount) || donateInputAmount <= 0) {
        alert('Failed to donate')
        return;
    }
    else {
        HistoryDiv.className = "border p-8 px-32 w-fit mt-6 rounded-lg border-gray-300  bg-white";
        HistoryDiv.innerHTML = `
        
                    <h1 class="text-lg font-bold">${donateInputAmount.toFixed(2)} Taka is ${donatePlaseName}</h1>
                    <p>Date:${new Date()}</p>
    `


        document.getElementById('History-container').appendChild(HistoryDiv);

    }
});