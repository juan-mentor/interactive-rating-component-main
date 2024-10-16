// Select HTML elements

const numbers = document.querySelectorAll(".request__number");
const btn = document.querySelector('.request__submit');
const requestContainer = document.querySelector('.request');
const spanNumber = document.querySelector('.answer__paragraph span');

let currentNumber;

// press numbers

numbers.forEach(number => {
    number.addEventListener('click', () => {
        numbers.forEach(number => {
            number.classList.remove('active');
        });

        number.classList.add('active');
        currentNumber = number.textContent;
    })
});

// press button

btn.addEventListener('click', () => {
    if (currentNumber !== undefined) {

        requestContainer.classList.add('send');
        spanNumber.textContent = currentNumber;

    } else {

        alert('Can not submitted without a rating. Thank you.');
    }

    setTimeout(() => {
        requestContainer.classList.remove('send');
    }, 5000);

    numbers.forEach(number => {
        number.classList.remove('active');
    });

    currentNumber = undefined;
});

