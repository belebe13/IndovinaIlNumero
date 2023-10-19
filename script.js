var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

function checkGuess() {
    var guess = document.getElementById('guess').value;
    attempts++;
    if (guess == randomNumber) {
        document.getElementById('message').innerHTML = 'Complimenti! Hai indovinato il numero in ' + attempts + ' tentativi.';
    } else if (guess < randomNumber) {
        document.getElementById('message').innerHTML = 'Troppo basso! Prova di nuovo.';
    } else {
        document.getElementById('message').innerHTML = 'Troppo alto! Prova di nuovo.';
    }
}
