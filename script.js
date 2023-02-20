const questionBtn = document.querySelectorAll('.faq-question__btn');

const displayAnswer = (e) => {
    const btn = e.target;
    btn.classList.toggle('active');
    btn.firstElementChild.classList.toggle('active');
    btn.nextElementSibling.style.display = 
                btn.nextElementSibling.style.display === 'block' ? 'none' : 'block';
}

questionBtn.forEach(btn => {
    btn.addEventListener('click', displayAnswer);
});
