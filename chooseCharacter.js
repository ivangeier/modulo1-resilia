function askCharacter() {
    let inputCharacter = prompt(`Insira o número correspondente ao personagem que deseja jogar:
                                    
    1 - Ivanzito
    2 - Vuealeza
    3 - Javirux`) 
    characterIsValid(inputCharacter);
}

function characterIsValid(character) {
    if (character == 1 || character == 2 || character == 3) {
        startGame(character);
    } else {
        askCharacter();
    }
}

function startGame(character) {
    if (character == 1 ) {
        window.location.replace('./ivanzito/ivanzito.html');
    } else if (character == 2) {
        window.location.replace('./vuealeza/vuealeza.html');
    } else {
        window.location.replace('./javirux/javirux.html');
    }
}

setTimeout(function() {
    askCharacter();   
}, 1000)

// window.onload = function() {
// }