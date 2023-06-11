const numberOneBtn = document.querySelector('#numberOne');
const numberTwoBtn = document.querySelector('#numberTwo');
const numberThreeBtn = document.querySelector('#numberThree');
const numberFourBtn = document.querySelector('#numberFour');
const numberFiveBtn = document.querySelector('#numberFive');
const numberSixBtn = document.querySelector('#numberSix');
const resultMessage = document.querySelector('#resultMessage');

const RIGHT_ANSWER = numberFourBtn;

const isAnswerRight = (btn) => {
    if (btn != RIGHT_ANSWER) {
        resultMessage.textContent = "Вы выбрали неправильный ответ!"
    } else {
        resultMessage.textContent = "Вы выбрали правильный ответ!"
    }

}

numberOneBtn.addEventListener('click', function() {
    isAnswerRight(numberOneBtn);
})

numberTwoBtn.addEventListener('click', function() {
    isAnswerRight(numberTwoBtn);
})

numberThreeBtn.addEventListener('click', function() {
    isAnswerRight(numberThreeBtn);
})

numberFourBtn.addEventListener('click', function() {
    isAnswerRight(numberFourBtn);
})

numberFiveBtn.addEventListener('click', function() {
    isAnswerRight(numberFiveBtn);
})

numberSixBtn.addEventListener('click', function() {
    isAnswerRight(numberSixBtn);
})