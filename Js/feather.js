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
    BlogBtnHiddenById('faq-section');



})



const blogBtnshow = document.getElementById('blogEvent');

blogBtnshow.addEventListener('click', function () {
    BlogBtnSowById('HomeEvent')
    
 
    BlogBtnHiddenById('hiddenBlog');
    BlogBtnHiddenById('donateCalculate');
    BlogBtnHiddenById('HistorySection');
    
    const FAQ = document.createElement('div');
    FAQ.innerHTML = `
       <main class="mx-24">
      <h1 class=" font-bold m-4 text-4xl  ">Important FAQ </h1>
       <div>
        <div class="join join-vertical rounded-xl w-full">
          <div class="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div class="collapse-title text-xl font-medium">What is the document Object Model (DOM)? </div>
            <div class="collapse-content">
              <p>The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page</p>
            </div>
          </div>
          <div class="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div class="collapse-title text-xl font-medium">How do you select an element  from the DOM?</div>
            <div class="collapse-content">
              <p>The getElementById method allows you to select an element by its ID. This method returns the element object if it finds an element with the specified ID,</p>
            </div>
          </div>
          <div class="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div class="collapse-title text-xl font-medium">What is event delegation in the contaxt of the DOM , and Why is it useful?</div>
            <div class="collapse-content">
              <p>The idea is that you "delegate" the handling of an event to a different element (in this case, the div, which is a parent element) instead of the actual element (the button) that received the event.</p>
            </div>
          </div>
        </div>
       </div>

     </main>
    `
    document.getElementById('faq-section').appendChild(FAQ)
})