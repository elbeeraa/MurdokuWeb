class Cell {

    //TIPO SIRVE A LA HORA DE SABER COMO RENDERIZAR LA CELDA.
    //QUIERO QUE DEPENDIENDO DEL TIPO DE CELDA, SE ACRTUALIZE EL ESTABLOQUEADA. QUIERO QUE SI ES POR EJEMPLO UNA ESTANTERIA, NO SE PUEDA CLCKAR PARA COLOCAR AHI EL PERSONAJE.

    constructor() {
        this.character = null;
        this.furniture = null;
        this.floor = null;
        this.estaBloqueada = false;
        this.highlighted = false;
    }

    cloneCell() {
        const cell = new Cell();
        cell.character = this.character;
        cell.furniture = this.furniture;
        cell.floor = this.floor;
        cell.estaBloqueada = this.estaBloqueada;
        cell.highlighted = this.highlighted;
        
        return cell;
    }

}

export default Cell;