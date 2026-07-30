import Renderer from "./ui/Renderer.js";
import { puzzles }  from "./puzzles/index.js";
import Game from "./models/Game.js";

const game = new Game(puzzles);
const renderer = new Renderer(game);

const startScreen = document.getElementById("startScreen");
const startButton = document.getElementById("startButton");
const gameContainer = document.getElementById("gameContainer");
const tutorialScreen = document.getElementById("tutorialScreen");
const tutorialButton = document.getElementById("tutorialButton");

const input = document.getElementById("suspectInput");

const checkButton = document.getElementById("checkButton");
const resetButton = document.getElementById("resetButton");
const nextPuzzleButton = document.getElementById("nextPuzzleButton");

const showStartScreen = () => {
    gameContainer.classList.add("is-hidden");
    tutorialScreen.classList.add("is-hidden");
    startScreen.classList.remove("is-hidden");
};

const showGameScreen = () => {
    startScreen.classList.add("is-hidden");
    tutorialScreen.classList.add("is-hidden");
    gameContainer.classList.remove("is-hidden");
    renderer.render();
};

const loadTutorialScreen = async () => {
    const response = await fetch("tutorial-screen.html");
    const tutorialMarkup = await response.text();
    tutorialScreen.innerHTML = tutorialMarkup;
};

startButton.addEventListener("click", () => {
    showGameScreen();
});

tutorialButton.addEventListener("click", () => {
    startScreen.classList.add("is-hidden");
    tutorialScreen.classList.remove("is-hidden");
});

checkButton.addEventListener("click", () => {
    const textoIntroducido = input.value.trim();
    const characters = game.puzzles[game.currentPuzzle].characters;
    const esPersonajeValido = characters.some(character => 
        character.name.toLowerCase() === textoIntroducido.toLowerCase()
    );

    if (!esPersonajeValido) {
        renderer.changePrincipalText("Tiene que introducir un texto válido.");
        input.value = "";
        return;
    }
    const esCorrecto = game.checkMurderer(textoIntroducido);
    if (esCorrecto) {
        renderer.changePrincipalText("¡Correcto! Has descubierto al asesino.");
        nextPuzzleButton.classList.remove("is-hidden");
        input.classList.add("is-hidden");
        checkButton.classList.add("is-hidden");
        resetButton.classList.remove("is-hidden");
        
    } else {
        renderer.changePrincipalText("Incorrecto. Inténtalo de nuevo.");
        input.value = "";
    }
});

loadTutorialScreen().then(() => {
    const backButton = document.getElementById("backButton");
    const tutorialStartButton = document.getElementById("tutorialStartButton");

    backButton.addEventListener("click", () => {
        showStartScreen();
    });

    tutorialStartButton.addEventListener("click", () => {
        showGameScreen();
    });
});

//HACER ESTE LISTENER CUANDO TENGA PARA CARGAR MÁS PUZZLES

nextPuzzleButton.addEventListener("click", () => {
    game.nextPuzzle();
    nextPuzzleButton.classList.add("is-hidden");
    input.classList.remove("is-hidden");
    input.value = "";
    checkButton.classList.remove("is-hidden");
    resetButton.classList.add("is-hidden");
    renderer.render();
});