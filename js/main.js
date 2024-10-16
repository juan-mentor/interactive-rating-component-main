const numbers = document.querySelectorAll(".request__number");
const btn = document.querySelector('.request__submit');
const requestContainer = document.querySelector('.request');
const spanNumber = document.querySelector('.answer__paragraph span');
let currentNumber;

numbers.forEach(number => {
    number.addEventListener('click', () => {
        numbers.forEach(number => {
            number.classList.remove('active');
        });

        number.classList.add('active');
        currentNumber = number.textContent;
    })
});

btn.addEventListener('click', () => {
    if (currentNumber !== undefined) {
        requestContainer.classList.add('send');
        spanNumber.textContent = currentNumber;
    } else {
        alert('No se puede enviar sin una puntuación. Gracias');
    }

    setTimeout(() => {
        requestContainer.classList.remove('send');
    }, 5000);

    numbers.forEach(number => {
        number.classList.remove('active');
    })
});

