
function getInputElementById(elementById) {

    const getAmount = document.getElementById(elementById).value;

    const amountValue = parseFloat(getAmount);

    return amountValue;

}
function getTextElementById(elementById) {

    const getTextAmount = document.getElementById(elementById).innerText;

    const amountTextValue = parseFloat(getTextAmount);

    return amountTextValue;

}

function showElementById(elementById) {
    document.getElementById('donateCalculate').classList.add('hidden');

    document.getElementById('HistorySection').classList.add('hidden');
    
    

    
    document.getElementById(elementById).classList.remove('hidden');




}
function BlogBtnSowById(elementById) {
    
   
    document.getElementById('blogEvent').classList.add('hidden');
    document.getElementById('HomeEvent').classList.add('hidden');
    
      
    document.getElementById(elementById).classList.remove('hidden');
}

function BlogBtnHiddenById(elementById) {
  
    // document.getElementById('hiddenBlog').classList.remove('hidden');
    // document.getElementById('hiddenBlog').classList.remove('hidden');
    
    document.getElementById(elementById).classList.add('hidden');


}



function showModal(){
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
}
function closemodal(){
    const modal = document.getElementById('my_modal_1');
    modal.closemodal()
}