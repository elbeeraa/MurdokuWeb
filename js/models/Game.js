import Puzzle from "./Puzzle.js";

class Game{

    //LA PARTIDA VA A CONTENER EL PUZZLE Y EL BOARD DEL JUGADOR. 
    // EL PUZZLE -> Va a servir para enseñar las pistas concretas de ese puzzle y luego validar las colocaciones de los personajes que ponga el jugador.
    // EL BOARD DEL JUGADOR -> Va a contener las celdas donde el jugador va a colocar los personajes. Va a ser un tablero vacío al principio y se irá llenando según el jugador vaya colocando los personajes.

    constructor(puzzles){
        this.puzzles = puzzles;
        this.currentPuzzle = 0;
        this.selectedCharacter = null;
        this.loadPuzzle();
    }

    loadPuzzle(){
        const puzzle = this.puzzles[this.currentPuzzle];
        this.playerBoard = puzzle.board.cloneBoard();
    }

    selectCharacter(character){
        this.selectedCharacter = character;
    }

    nextPuzzle(){
        this.currentPuzzle++;
        this.loadPuzzle();
    }

    checkMurderer(inputText){
        const puzzle = this.puzzles[this.currentPuzzle];
        return puzzle.murderer.name.toLowerCase() === inputText.trim().toLowerCase();
    }

}
export default Game;

