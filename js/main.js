/*
    JAVASCRIPT
*/

//identifico l'elemento che farà da griglia dei miei quadrati
const gridDom = document.getElementById('grid');
//identifico il pulsante per generare la griglia
const play = document.getElementById('generator');
//identifico la critta di info per l'utente
const info = document.getElementById('info');
//identifico la scelta dell'utente
const scelta = document.getElementById('difficulty');


//evento per generare la griglia in base alla difficoltà al click del pulsante play
play.addEventListener('click',
    function () {
        gridDom.innerHTML = '';
        //nascondo la scritta di info per l'utente
        info.classList.add('d-none');
        console.log(scelta.value);
        if (scelta.value == 1) {
            for (let i = 1; i <= 100; i++) {
                //creo i quadrati da inserire nella griglia
                const currentSquare = createNewSquare(i);
                currentSquare.classList.add('ms_square_1');
            
                //evento per il click del quadratino
                currentSquare.addEventListener('click',
                    function() {
                        this.classList.toggle('clicked');
                        console.log('hai cliccato sul numero', i);
                    }
                );
                gridDom.append(currentSquare);
            }
        } else if (scelta.value == 2) {
            for (let i = 1; i <= 81; i++) {
                //creo i quadrati da inserire nella griglia
                const currentSquare = createNewSquare(i);
                currentSquare.classList.add('ms_square_2');
            
                //evento per il click del quadratino
                currentSquare.addEventListener('click',
                    function() {
                        this.classList.toggle('clicked');
                        console.log('hai cliccato sul numero', i);
                    }
                );
                gridDom.append(currentSquare);
            }
        } else {
            for (let i = 1; i <= 49; i++) {
                //creo i quadrati da inserire nella griglia
                const currentSquare = createNewSquare(i);
                currentSquare.classList.add('ms_square_3');
            
                //evento per il click del quadratino
                currentSquare.addEventListener('click',
                    function() {
                        this.classList.toggle('clicked');
                        console.log('hai cliccato sul numero', i);
                    }
                );
                gridDom.append(currentSquare);
            }
        }
    }
);




//funzione per creare un quadratino
function createNewSquare(number) {
    const currentElement = document.createElement('div');
    currentElement.classList.add('ms_square');
    currentElement.innerHTML = number;
    
    return currentElement;
}


