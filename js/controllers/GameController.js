class GameController {
    constructor(game, renderer) {
        this.game = game;
        this.renderer = renderer;
        this.elements = {
            startScreen: document.getElementById("startScreen"),
            startButton: document.getElementById("startButton"),
            gameContainer: document.getElementById("gameContainer"),
            tutorialScreen: document.getElementById("tutorialScreen"),
            tutorialButton: document.getElementById("tutorialButton"),
            input: document.getElementById("suspectInput"),
            checkButton: document.getElementById("checkButton"),
            resetButton: document.getElementById("resetButton"),
            nextPuzzleButton: document.getElementById("nextPuzzleButton"),
            gameBackButton: document.getElementById("gameBackButton")
        };
        this.isPuzzleSolved = false;
    }

    init() {
        this.bindMainEvents();
        this.loadTutorialScreen();
    }

    bindMainEvents() {
        this.elements.startButton.addEventListener("click", () => {
            this.resetPuzzleUI();
            this.showGameScreen();
        });

        this.elements.tutorialButton.addEventListener("click", () => {
            this.elements.startScreen.classList.add("is-hidden");
            this.elements.tutorialScreen.classList.remove("is-hidden");
        });

        this.elements.checkButton.addEventListener("click", () => {
            this.handleCheck();
        });

        this.elements.nextPuzzleButton.addEventListener("click", () => {
            this.handleNextPuzzle();
        });

        this.elements.resetButton.addEventListener("click", () => {
            this.handleResetPuzzle();
        });

        if (this.elements.gameBackButton) {
            this.elements.gameBackButton.addEventListener("click", () => {
                this.handleBackToMenu();
            });
        }
    }

    bindTutorialEvents() {
        const backButton = document.getElementById("backButton");
        const tutorialStartButton = document.getElementById("tutorialStartButton");

        if (backButton) {
            backButton.addEventListener("click", () => {
                this.handleBackToMenu();
            });
        }

        if (tutorialStartButton) {
            tutorialStartButton.addEventListener("click", () => {
                this.showGameScreen();
            });
        }
    }

    async loadTutorialScreen() {
        const response = await fetch("tutorial-screen.html");
        const tutorialMarkup = await response.text();
        this.elements.tutorialScreen.innerHTML = tutorialMarkup;
        this.bindTutorialEvents();
    }

    showStartScreen() {
        this.elements.gameContainer.classList.add("is-hidden");
        this.elements.tutorialScreen.classList.add("is-hidden");
        this.elements.startScreen.classList.remove("is-hidden");
    }

    handleBackToMenu() {
        this.isPuzzleSolved = false;
        this.resetPuzzleUI();
        this.showStartScreen();
    }

    showGameScreen() {
        this.elements.startScreen.classList.add("is-hidden");
        this.elements.tutorialScreen.classList.add("is-hidden");
        this.elements.gameContainer.classList.remove("is-hidden");
        this.renderer.render();
    }

    resetPuzzleUI() {
        this.elements.nextPuzzleButton.classList.add("is-hidden");
        this.elements.input.classList.remove("is-hidden");
        this.elements.input.value = "";
        this.elements.checkButton.classList.remove("is-hidden");
        this.elements.resetButton.classList.remove("is-hidden");
        this.renderer.changePrincipalText(" ");
    }

    handleCheck() {
        const textoIntroducido = this.elements.input.value.trim();
        const characters = this.game.puzzles[this.game.currentPuzzle].characters;
        const esPersonajeValido = characters.some(character =>
            character.name.toLowerCase() === textoIntroducido.toLowerCase()
        );

        if (!esPersonajeValido) {
            this.renderer.changePrincipalText("Tiene que introducir un texto válido.");
            this.elements.input.value = "";
            return;
        }

        const esCorrecto = this.game.checkMurderer(textoIntroducido);

        if (esCorrecto) {
            this.isPuzzleSolved = true;
            this.renderer.changePrincipalText("¡Correcto! Has descubierto al asesino.");
            this.elements.nextPuzzleButton.classList.remove("is-hidden");
            this.elements.input.classList.add("is-hidden");
            this.elements.checkButton.classList.add("is-hidden");
            // this.elements.resetButton.classList.remove("is-hidden");
        } else {
            this.renderer.changePrincipalText("Incorrecto. Inténtalo de nuevo.");
            this.elements.input.value = "";
        }
    }

    handleNextPuzzle() {
        this.game.nextPuzzle();
        this.resetPuzzleUI();
        this.renderer.render();
    }

    handleResetPuzzle() {
        this.game.resetCurrentPuzzle();
        this.resetPuzzleUI();
        this.renderer.render();
    }
}

export default GameController;