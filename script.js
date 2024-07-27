// const message = document.querySelector('#message');
// const buttons = document.querySelector('#buttons');
// const noBtn = document.querySelector('.no');
// const yesBtn = document.querySelector('.yes');

// noBtn.addEventListener('click', () => {
//     //RANDOM POSITIONIN OF THE noBTn
//     //HINT # 1: window has properties of the width and height of the screen
//     //HINT # 2: offsetWidth and offsetHeight are properties of html elements
//     //HINT # 3: This button has position 'absolute', which means that its position in the html document could
//     //be given by the style properties left and top (in px values)
// });

// yesBtn.addEventListener('click', () => {
//     message.innerHTML = 'TE AMO MIBIDA';
//     buttons.style.display = 'none';
// });

document.addEventListener('DOMContentLoaded', (event) => {
    const noButton = document.querySelector('.no');
    const yesButton = document.querySelector('.yes');

    // Función para mover el botón "No" a una posición aleatoria
    function moveButtonNo() {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }

    // Agregar evento al botón "No"
    noButton.addEventListener('click', moveButtonNo);

    // Agregar evento al botón "Sí"
    yesButton.addEventListener('click', () => {
        //alert('te amo mivida');
        message.innerHTML = 'TE AMO MIBIDA';
        buttons.style.display = 'none';
    });
});