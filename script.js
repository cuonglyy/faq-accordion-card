const questionBtn = document.querySelectorAll('.faq-question__btn');
const answer = document.querySelectorAll('.faq-answer__text');
const arrowIcon = document.querySelectorAll('.arrow-icon');
const questionContainer = document.querySelectorAll('.faq__parent');

const questionBtnArr = Array.from(questionBtn);
const answerArr = Array.from(answer);
const arrowIconArr = Array.from(arrowIcon);
const questionContainerArr = Array.from(questionContainer);


const displayAnswer = (e) => {
    /*
    questionBtn.forEach(btn => {
        if(btn.classList.contains('active')) {
            
            btn.classList.remove('active');
            btn.firstElementChild.classList.remove('active');
            
        }
    })
    */
    e.target.classList.toggle('active');
    e.target.firstElementChild.classList.toggle('active');
}




questionBtn.forEach(btn => {
    btn.addEventListener('click', displayAnswer);
});