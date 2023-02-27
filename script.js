const questionBtn = document.querySelectorAll('.faq-question__btn');
const answers = document.querySelectorAll('.faq-answer__text')

const displayAnswer = (e) => {
    /*
    const btn = e.target;
    btn.classList.toggle('active');
    btn.firstElementChild.classList.toggle('active');
    btn.nextElementSibling.style.display = 
                btn.nextElementSibling.style.display === 'block' ? 'none' : 'block';
    */

    const question = e.target;
    const answer = e.target.nextElementSibling;

    if (question.classList.contains('active')) {
        question.classList.remove('active');
        question.firstElementChild.classList.remove('active');
        answer.style.display = 'none';
    } else {
        // Reset all faq
        questionBtn.forEach(btn => {
            btn.classList.remove('active');
            btn.firstElementChild.classList.remove('active');
        });
        answers.forEach(ans => ans.style.display = 'none');

        // Show the selected faq
        question.classList.add('active');
        question.firstElementChild.classList.add('active');
        answer.style.display = 'block';
    }
}

questionBtn.forEach(btn => {
    btn.addEventListener('click', displayAnswer);
});