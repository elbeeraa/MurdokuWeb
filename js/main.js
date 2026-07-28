import Renderer from "./ui/Renderer.js";
import { puzzles }  from "./puzzles/index.js";
import Game from "./models/Game.js";

const game = new Game(puzzles);
const renderer = new Renderer(game);

const startScreen = document.getElementById("startScreen");
const startButton = document.getElementById("startButton");
const gameContainer = document.getElementById("gameContainer");

const input = document.getElementById("suspectInput");
const button = document.getElementById("checkButton");

startButton.addEventListener("click", () => {
    startScreen.classList.add("is-hidden");
    gameContainer.classList.remove("is-hidden");
    renderer.render();
});

button.addEventListener("click", () => {
    const textoIntroducido = input.value.trim();
    const characters = game.puzzles[game.currentPuzzle].characters;
    const esPersonajeValido = characters.some(character => 
        character.name.toLowerCase() === textoIntroducido.toLowerCase()
    );

    if (!esPersonajeValido) {
        renderer.changePrincipalText("Tiene que introducir un texto válido.");
        return;
    }
    const esCorrecto = game.checkMurderer(textoIntroducido);
    if (esCorrecto) {
        renderer.changePrincipalText("¡Correcto! Has descubierto al asesino.");
        
    } else {
        renderer.changePrincipalText("Incorrecto. Inténtalo de nuevo.");
    }
});