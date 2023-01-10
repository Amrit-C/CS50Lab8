const wrongBtns = document.querySelectorAll(".wrongBtn");
const rightBtn = document.querySelector(".rightBtn");

rightBtn.addEventListener("click", (e) => {
    console.log(e.target);
    rightBtn.classList.add("right");
    const msg = document.querySelector(".section h3");

    const msgDiv = document.createElement('div');
    const msgDivText = document.createTextNode('Correct!');
    msgDiv.appendChild(msgDivText);

    const section = document.querySelector('.section');
    const list = document.querySelector('.btns');

    section.insertBefore(msgDiv, list);

});


wrongBtns.forEach(wrong => {
    wrong.addEventListener('click', e => {
        e.target.classList.add("wrg");

        const errorMsg = document.createElement('div'); 
        const errorMsgText = document.createTextNode('Wrong! Please select again.'); 

        errorMsg.appendChild(errorMsgText);
        errorMsg.className = 'error';

        const section = document.querySelector('.section');
        const list = document.querySelector('.btns');

        section.insertBefore(errorMsg, list);

        setTimeout(() => {
            const rmError = document.querySelector('.error'); 
            rmError.remove();
        }, 3000);

    })
}
);

const inputValue = document.querySelector('#answer');
const submitBtn = document.querySelector('.submitBtn');
const container = document.querySelector('.section2');
const inputContainer = document.querySelector('.inputContainer');

submitBtn.addEventListener('click', e => {
    if(inputValue.value === '2016'){
        inputValue.classList.add("rightAns");
        const RMsg = document.createElement('div');
        const RMsgText = document.createTextNode('Correct!');
        RMsg.appendChild(RMsgText);
        container.insertBefore(RMsg, inputContainer);
    } else {
        const WMsg = document.createElement('div');
        const WMsgText = document.createTextNode('Please Try Again.');
        WMsg.appendChild(WMsgText);
        container.insertBefore(WMsg, inputContainer);
    }
});