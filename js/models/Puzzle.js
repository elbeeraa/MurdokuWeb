class Puzzle {

    //AQUI TENDRÉ EL TABLERO DE LAS SOLUCIONES Y LAS PISTAS CONCRETAS DE ESE PUZZLE

    constructor(row, col) {
        this.board = new Board(row, col);
        this.characters = [];
        this.clues = [];
        this.murderer = null;
    }

    setMurderer(character) {
        if(!this.characters.includes(character)){
            throw new Error("El personaje no pertenece a este puzzle.");
        }
        this.murderer = character;
    }

    addClue(character, text) {
        const clue = new Clue(character, text);
        this.clues.push(clue);
    }

    addCharacter(nombre, image) {
        const personaje = new Personaje(nombre, image);
        this.characters.push(personaje);
    }

    // getCharacterByName(nombre) {
    //     return this.characters.find(character => character.nombre === nombre);
    // }

    //ASIGNAR EL SUELO
    loadFloor(layout) {
        for(let row = 0; row < this.solutionBoard.row; row++){

            for(let col = 0; col < this.solutionBoard.col; col++){

                this.solutionBoard
                    .getCell(row,col)
                    .floor = layout[row][col];

            }
        }
    }

    //ASIGNAR EL MOBILIARIO
    loadFurniture(layout) {
        for(let row = 0; row < this.solutionBoard.row; row++){

            for(let col = 0; col < this.solutionBoard.col; col++){

                this.solutionBoard
                    .getCell(row,col)
                    .furniture = layout[row][col];

            }
        }
    }
}