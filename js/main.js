import Renderer from "./ui/Renderer.js";
import { puzzles }  from "./puzzles/index.js";
import Game from "./models/Game.js";

const game = new Game(puzzles);
const renderer = new Renderer(game);

renderer.render();

const input = document.getElementById("suspectInput");
const button = document.getElementById("checkButton");

button.addEventListener("click", () => {
    const textoIntroducido = input.value.trim();
    const characters = game.puzzles[game.currentPuzzle].characters;
    const esPersonajeValido = characters.some(character => 
        character.name.toLowerCase() === textoIntroducido.toLowerCase()
    );

    if (!esPersonajeValido) {
        alert("Tiene que introducir un texto válido.");
        return;
    }
    const esCorrecto = game.checkMurderer(textoIntroducido);
    if (esCorrecto) {
        alert("¡Correcto! Has descubierto al asesino.");
    } else {
        alert("No es el asesino correcto.");
    }
});