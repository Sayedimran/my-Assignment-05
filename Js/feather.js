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
    

    
    HistoryBtnShow.classList.add('bg-lime-400');
    DonateBtnShow.classList.remove('bg-lime-400');
});


const homeBtnShow = document.getElementById('HomeEvent')
homeBtnShow.addEventListener('click', function () {

    console.log('Home btn cunnect');
    BlogBtnSowById('hiddenBlog');
    BlogBtnSowById('donateCalculate');
    BlogBtnSowById('HistorySection');
    BlogBtnSowById('blogEvent');



})



const blogBtnshow = document.getElementById('blogEvent');

blogBtnshow.addEventListener('click', function () {
    BlogBtnSowById('HomeEvent')

    BlogBtnHiddenById('hiddenBlog');
    BlogBtnHiddenById('donateCalculate');
    BlogBtnHiddenById('HistorySection');

})