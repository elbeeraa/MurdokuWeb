class Renderer {
    constructor(game) {
        this.game = game;
        this.boardElement = document.getElementById("gameBoard");
        this.cluesElement = document.getElementById("cluesContainer");
    }

    render() {
        this.renderBoard();
        this.renderClues();
    }

    renderClues() {
        this.cluesElement.innerHTML = '';

        const clues = this.game.puzzles[this.game.currentPuzzle].clues;

        clues.forEach(clue => {
            const clueElement = document.createElement('div');
            clueElement.className = 'clue';
            const imagen = document.createElement('img');
            imagen.className = 'img-clue';
            imagen.src = clue.character.url;
            imagen.alt = '';
            imagen.draggable = false;
            clueElement.appendChild(imagen);

            const textElement = document.createElement('p');
            textElement.textContent = clue.text;
            clueElement.appendChild(textElement);
            this.cluesElement.appendChild(clueElement);
          console.log(clue.character.url, clue.text);  
        });


    }

    renderBoard() {
        // limpiar contenido anterior
        this.boardElement.innerHTML = '';

        const board = this.game.playerBoard;
        
        // crear el contenedor
        const gridContainer = document.createElement('div');
        gridContainer.className = `board-grid cols-${board.col}`;

        // Renderizar cada celda
        for (let row = 0; row < board.row; row++) {
            for (let col = 0; col < board.col; col++) {
                const cell = board.getCell(row, col);
                const cellElement = this.renderCell(cell, row, col);
                gridContainer.appendChild(cellElement);
            }
        }

        this.boardElement.appendChild(gridContainer);
    }

    renderCell(cell, row, col) {
        const cellDiv = document.createElement('div');
        cellDiv.className = cell.estaBloqueada ? 'cell cell--blocked' : 'cell cell--interactive';
        cellDiv.setAttribute('data-row', row);
        cellDiv.setAttribute('data-col', col);

        // Renderizar floor
        if (cell.floor) {
            const floorImg = document.createElement('img');
            floorImg.className = `cell__layer cell__floor ${cell.floor.id}`;
            floorImg.src = cell.floor.url;
            floorImg.alt = '';
            floorImg.draggable = false;
            cellDiv.appendChild(floorImg);
        }

        // Renderizar furniture
        if (cell.furniture) {
            const furnitureImg = document.createElement('img');
            furnitureImg.className = `cell__layer cell__furniture ${cell.furniture.id}`;
            furnitureImg.src = cell.furniture.url;
            furnitureImg.alt = '';
            furnitureImg.draggable = false;
            cellDiv.appendChild(furnitureImg);
        }

        //Renderizar textos
        const texts = this.game.puzzles[this.game.currentPuzzle].texts;
        texts.forEach(text => {
            if (text.row === row && text.col === col) {
                const textElement = document.createElement('p');
                textElement.className = 'cell__text';
                textElement.textContent = text.text;
                cellDiv.appendChild(textElement);
            }
        });

        
        
        // Agregar listener para celdas no bloqueadas
        if (!cell.estaBloqueada) {
            cellDiv.addEventListener('click', () => this.handleCellClick(row, col));
        }

        return cellDiv;
    }

    handleCellClick(row, col) {
        // Implementar la lógica cuando se hace click en una celda
        console.log(`Celda clickeada: ${row}, ${col}`);
    }
}

export default Renderer;