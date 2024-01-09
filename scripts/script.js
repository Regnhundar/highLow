// Fråga användaren efter ett tal mellan 1 och 100. Programmet ska ha ett hemligt tal sparat.
// Det ska fortsätta fråga användaren till dess att användaren gissar det hemliga talet.
// Om man gissade för högt eller för lågt så ska det skrivas ut, så att användaren har en rimlig chans att klara det.

let secretNumber = 42;
let userNumber = 0;
let gameOn = true;


while (gameOn) {

    userNumber = window.prompt(`Vad är meningen med livet, universum och allting?`)

    if (isNaN(userNumber) || userNumber < 0 || userNumber > 100) { // Nedanstående "else if sats" fungerade inte så jag gjorde kontrollen med isNan() ist.
        window.alert(`Du kan bara ange SIFFROR mellan 1 och 100.`)
    }
    // else if (typeof userNumber !== 'number') {                       //Fungerar inte pga window.prompt "returnerar alltid en sträng.
    //     window.alert(`Du kan bara ange SIFFROR mellan 1 och 100.`) 
    // }
    else if (userNumber > secretNumber) {
        window.alert(`För högt.`)
    }
    else if (userNumber < secretNumber) {
        window.alert(`För lågt.`)
    }
    else {
        window.alert(`Ja precis.`)
        gameOn = false;
    }
}
