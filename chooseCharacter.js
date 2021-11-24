function askCharacter() {
    let inputCharacter = prompt(`Escolha o seu personagem para jogar
                                    
    1 - Ivanzito
    2 - Vuealeza
    3 - Javirux
                                    
    Insira o número correspondente ao personagem:`) 
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
    } else if (character == 3) {
        window.location.replace('./javirux/javirux.html');
    }
}

setTimeout(function() {
    askCharacter();   
}, 1000)

// window.onload = function() {
// }