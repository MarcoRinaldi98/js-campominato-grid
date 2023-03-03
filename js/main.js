/*
    JAVASCRIPT
*/

//identifico l'elemento che farà da griglia dei miei quadrati
const gridDom = document.getElementById('grid');
//identifico il pulsante per generare la griglia
const play = document.getElementById('generator');

//evento per generare la griglia al click del pulsante play
play.addEventListener('click',
    function () {
        gridDom.classList.remove('d-none');
    }
);

//ciclo per la creazione di 100 quadrati
for (let i = 0; i < 100; i++) {

    //creo i quadrati da inserire nella griglia
    const currentSquare = createNewSquare();

    //evento per il click del quadratino
    currentSquare.addEventListener('click',
        function() {
            this.classList.toggle('clicked');
            console.log('hai cliccato sul numero', newValidRandomNumber);
        }
    );
    gridDom.append(currentSquare);
}



//funzione per creare un quadratino
function createNewSquare() {
    const currentElement = document.createElement('div');
    currentElement.classList.add('ms_square');

    return currentElement;
}

