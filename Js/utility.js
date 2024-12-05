
function getInputElementById(elementById){

    const getAmount = document.getElementById(elementById).value ;

    const amountValue = parseFloat(getAmount);
     
    return amountValue ;

}
function getTextElementById(elementById){

    const getTextAmount = document.getElementById(elementById).innerText;

    const amountTextValue = parseFloat(getTextAmount);
     
    return amountTextValue ;

}