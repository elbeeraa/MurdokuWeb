
//SOLO VA A CONTENER LAS CELDAS

class Board{

    constructor(row, col){

        this.cells = [];
        this.col = col;
        this.row = row;
        this.initializeBoard();

    }
    //CREA UN BOARD VACIO Y COPIA EL TIPO DE CELDA. ENTONCES SABE TODO MENOS DONDE ESTAN LOS PERSONAJES.
    cloneBoard(){
       const board = new Board(this.row, this.col);

        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.col; c++) {

                 board.cells[r][c] = this.cells[r][c].cloneCell();
            }
        }

        return board;
    }

    initializeBoard(){
        for(let r = 0; r < this.row; r++){
            this.cells[r] = [];
            for(let c = 0; c < this.col; c++){
                this.cells[r][c] = new Cell();
            }
        }
    }

    getCell(row, col){
        return this.cells[row][col];
    }

}        