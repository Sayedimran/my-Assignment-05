
 // donate btn addeventlitaner 

document.getElementById('Donate-btn').addEventListener('click',function(){
   
    const donateInputAmount = getInputElementById('amount-input');
    const donateAmount = getTextElementById('Donate-amount');
    const totalAmountInnerText = getTextElementById('final-Donate-amount');
    console.log(totalAmountInnerText);
    
    if( isNaN(donateInputAmount) || donateInputAmount <= 0 ){
        alert('Failed to donate')
        return ;
    }
    const countDoneteAmount = donateAmount + donateInputAmount ;

    const finalTotalamount = totalAmountInnerText - countDoneteAmount ;
    
    

    document.getElementById('Donate-amount').innerText = countDoneteAmount ;
    document.getElementById('final-Donate-amount').innerText = finalTotalamount ;

    
    
    
    
    
    
    
    
})
document.getElementById('Donate-btn-1').addEventListener('click',function(){
   
    const donateInputAmount = getInputElementById('amount-input-1');
    const donateAmount = getTextElementById('Donate-amount-1');
    const totalAmountInnerText = getTextElementById('final-Donate-amount');
    console.log(totalAmountInnerText);
    
    if( isNaN(donateInputAmount) || donateInputAmount <= 0 ){
        alert('Filed to donate')
        return ;
    }
    const countDoneteAmount = donateAmount + donateInputAmount ;

    const finalTotalamount = totalAmountInnerText - countDoneteAmount ;
    
    

    document.getElementById('Donate-amount-1').innerText = countDoneteAmount ;
    document.getElementById('final-Donate-amount').innerText = finalTotalamount ;

    
    
    
    
    
    
    
    
})

document.getElementById('Donate-btn-2').addEventListener('click',function(){
   
    const donateInputAmount = getInputElementById('amount-input-2');
    const donateAmount = getTextElementById('Donate-amount-2');
    const totalAmountInnerText = getTextElementById('final-Donate-amount');
    console.log(totalAmountInnerText);
    
    if( isNaN(donateInputAmount) || donateInputAmount <= 0 ){
        alert('Failed to donate')
        return ;
    }
    const countDoneteAmount = donateAmount + donateInputAmount ;

    const finalTotalamount = totalAmountInnerText - countDoneteAmount ;
    
    

    document.getElementById('Donate-amount-2').innerText = countDoneteAmount ;
    document.getElementById('final-Donate-amount').innerText = finalTotalamount ;

    
    
    
    
    
    
    
    
})