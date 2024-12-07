
// donate btn addeventlitaner 

document.getElementById('Donate-btn').addEventListener('click', function () {

    const donateInputAmount = getInputElementById('amount-input');
    console.log(donateInputAmount);




    if (isNaN(donateInputAmount) || donateInputAmount <= 0) {
        alert('Failed to donate');

        return;
    }
    else {
        showModal();
        document.querySelector('#my_modal_1').addEventListener('click', function (event) {
            if (event.target.tagName === 'DIALOG') {
                closemodal();
            }
        });

       

            const HistoryDiv = document.createElement('div');


            const donatePlaseName = document.getElementById('donate-place').innerText;



            HistoryDiv.className = "border p-8 px-32 w-fit mt-6 rounded-lg border-gray-300  bg-white";
            HistoryDiv.innerHTML = `
        
                    <h1 class="text-lg font-bold">${donateInputAmount.toFixed(2)} Taka is ${donatePlaseName}</h1>
                    <p>Date:${new Date()}</p>
    `


            document.getElementById('History-container').appendChild(HistoryDiv);



            HistoryBtnShow.classList.add('bg-lime-400');
            DonateBtnShow.classList.remove('bg-lime-400');
        };


    const donateAmount = getTextElementById('Donate-amount');
    const totalAmountInnerText = getTextElementById('final-Donate-amount');





    const countDoneteAmount = donateAmount + donateInputAmount;

    const finalTotalamount = totalAmountInnerText - countDoneteAmount;



    document.getElementById('Donate-amount-1').innerText = countDoneteAmount;
    document.getElementById('final-Donate-amount').innerText = finalTotalamount;





});




document.getElementById('Donate-btn-1').addEventListener('click', function () {

    const donateInputAmount = getInputElementById('amount-input-1');

    if (isNaN(donateInputAmount) || donateInputAmount <= 0) {
        alert('Failed to donate');
        return;
    } 
     else {
        showModal();
        document.querySelector('#my_modal_1').addEventListener('click', function (event) {
            if (event.target.tagName === 'DIALOG') {
                closemodal();
            }
        });

        
            


            const HistoryDiv = document.createElement('div');


            const donatePlaseName = document.getElementById('donate-place-1').innerText;



            HistoryDiv.className = "border p-8 px-32 w-fit mt-6 rounded-lg border-gray-300  bg-white";
            HistoryDiv.innerHTML = `
        
                    <h1 class="text-lg font-bold">${donateInputAmount.toFixed(2)} Taka is ${donatePlaseName}</h1>
                    <p>Date:${new Date()}</p>
    `


            document.getElementById('History-container').appendChild(HistoryDiv);



            HistoryBtnShow.classList.add('bg-lime-400');
            DonateBtnShow.classList.remove('bg-lime-400');
        };

    

    const donateAmount = getTextElementById('Donate-amount-1');
    const totalAmountInnerText = getTextElementById('final-Donate-amount');
    console.log(totalAmountInnerText);






    const countDoneteAmount = donateAmount + donateInputAmount;

    const finalTotalamount = totalAmountInnerText - countDoneteAmount;



    document.getElementById('Donate-amount-1').innerText = countDoneteAmount;
    document.getElementById('final-Donate-amount').innerText = finalTotalamount;



});

document.getElementById('Donate-btn-2').addEventListener('click', function () {

    const donateInputAmount = getInputElementById('amount-input-2');

    if (isNaN(donateInputAmount) || donateInputAmount <= 0) {
        alert('Failed to donate');

        return;
    } else {


        showModal();
        document.querySelector('#my_modal_1').addEventListener('click', function (event) {
            if (event.target.tagName === 'DIALOG') {
                closemodal();
            }
        });


          
        const donatePlaseName = document.getElementById('donate-place-2').innerText;
         console.log(donatePlaseName);
         
     
        const HistoryDiv = document.createElement('div');

            HistoryDiv.className = "border p-8 px-32 w-fit mt-6 rounded-lg border-gray-300  bg-white";
            HistoryDiv.innerHTML = `
        
                    <h1 class="text-lg font-bold">${donateInputAmount.toFixed(2)} Taka is ${donatePlaseName}</h1>
                    <p>Date:${new Date()}</p>
    `


            document.getElementById('History-container').appendChild(HistoryDiv);



            HistoryBtnShow.classList.add('bg-lime-400');
            DonateBtnShow.classList.remove('bg-lime-400');
        };



    

    const donateAmount = getTextElementById('Donate-amount-2');
    const totalAmountInnerText = getTextElementById('final-Donate-amount');
    console.log(totalAmountInnerText);





    const countDoneteAmount = donateAmount + donateInputAmount;

    const finalTotalamount = totalAmountInnerText - countDoneteAmount;



    document.getElementById('Donate-amount-2').innerText = countDoneteAmount;
    document.getElementById('final-Donate-amount').innerText = finalTotalamount;









});

