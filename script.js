const questionBtn = document.querySelectorAll('.faq-question__btn');
const answer = document.querySelectorAll('.faq-answer__text');
const arrowIcon = document.querySelectorAll('.arrow-icon');

const answerArr = Array.from(answer);
const arrowIconArr = Array.from(arrowIcon);


const displayAnswer = () => {

}




questionBtn.forEach(btn => {
    btn.addEventListener('click', displayAnswer);
});