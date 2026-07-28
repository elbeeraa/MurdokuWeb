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

            if (this.game.selectedCharacter?.name === clue.character.name) {
                clueElement.classList.add('clue--selected');
            }

            clueElement.addEventListener('click', () => {
                if(this.game.selectedCharacter?.name === clue.character.name) {
                    this.game.selectCharacter(null);
                } else {
                    this.game.selectCharacter(clue.character);
                }
                this.renderClues();
            });

            const imagen = document.createElement('img');
            imagen.className = 'img-clue '+ clue.character.name.toLowerCase();
            imagen.src = clue.character.url;
            imagen.alt = '';
            imagen.draggable = false;
            clueElement.appendChild(imagen);

            const groupTextElement = document.createElement('div');
            groupTextElement.className = 'clue__text';

            const textCharacter = document.createElement('p');
            textCharacter.className = 'clue__character';
            textCharacter.textContent = clue.character.name;
            groupTextElement.appendChild(textCharacter); 

            const textClue = document.createElement('p');
            textClue.textContent = clue.text;
            groupTextElement.appendChild(textClue);

            clueElement.appendChild(groupTextElement); 

            this.cluesElement.appendChild(clueElement);
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

        if (cell.highlighted) {
            cellDiv.classList.add('cell--highlighted');
        }

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
            if(!cell.furniture.available) {
               cell.estaBloqueada = true; 
            }
            const furnitureImg = document.createElement('img');
            furnitureImg.className = `cell__layer cell__furniture ${cell.furniture.id}`;
            furnitureImg.src = cell.furniture.url;
            furnitureImg.alt = '';
            furnitureImg.draggable = false;
            cellDiv.appendChild(furnitureImg);
        }

        // Renderizar character
        if (cell.character) {
            const characterImg = document.createElement('img');
            characterImg.className = `cell__layer cell__character ${cell.character.name}`;
            characterImg.src = cell.character.url;
            characterImg.alt = '';
            characterImg.draggable = false;
            cellDiv.appendChild(characterImg);
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
        const cell = this.game.playerBoard.getCell(row, col);

        if (cell.estaBloqueada) {
            this.changePrincipalText("Esta celda está bloqueada. No puedes colocar un personaje aquí.");
            return;
        }

        if (!this.game.selectedCharacter) {
            this.changePrincipalText("Selecciona un personaje antes de colocar uno en el tablero.");
            return;
        }

        if (cell.character) {
            cell.character = null;
            this.changeStyleOfCell(row, col, false);
            this.renderBoard();
            return;
        } else {
            cell.character = this.game.selectedCharacter;

            this.changeStyleOfCell(row, col, true);
        }
    
        this.renderBoard();
    }

    changeStyleOfCell(row, col, value) {

        const highlightedCells = this.game.playerBoard.getRowColCells(row, col);
        console.log(highlightedCells);

        for (const pos of highlightedCells) {
            const cell = this.game.playerBoard.getCell(pos.row, pos.col);
            cell.highlighted = value;
        }
    }
    
    changePrincipalText(text) {
        const principalTextElement = document.getElementById('principalText');
        principalTextElement.textContent = text;
    }
}

export default Renderer;