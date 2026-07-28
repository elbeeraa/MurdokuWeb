import Puzzle from "../models/Puzzle.js";
import Floor from "../models/Floor.js";
import Furniture from "../models/Furniture.js";
import Personaje from "../models/Character.js";

export function createPuzzle1(){
    //CREACION DEL TAMAÑO DEL PUZZLE
    const puzzle = new Puzzle(6, 6);

    //CREAR LOS TIPOS DE SUELO
    const floor1 = new Floor('FLOOR-BLUE', 'img/floors/floor-1-blue.PNG');
    const floor2 = new Floor('FLOOR-PURPLE', 'img/floors/floor-2-purple.PNG');
    const floor3 = new Floor('FLOOR-YELLOW', 'img/floors/floor-2-yellow.PNG');
    const floor4 = new Floor('FLOOR-BLUE2', 'img/floors/floor-3-blue.PNG');

    //CREAR LOS TIPOS DE MUEBLES
    //TRUE SI SE PUEDE COLOCAR PERSONAJE
    const bed1 = new Furniture('bed1', 'img/furniture/bed-up1.PNG', true);
    const bed2 = new Furniture('bed2', 'img/furniture/bed-down1-purple.PNG', true);
    const table = new Furniture('table', 'img/furniture/table-alone.PNG', false);
    const plant = new Furniture('plant', 'img/furniture/plant.PNG', false);
    const rug = new Furniture('rug', 'img/furniture/rug-green.PNG', true);
    const window = new Furniture('window', 'img/furniture/window-up.PNG', true);

    const floorLayout = [
        [floor1, floor1, floor1, floor2, floor2, floor2],
        [floor1, floor1, floor1, floor2, floor2, floor2],
        [floor1, floor1, floor1, floor2, floor2, floor2],
        [floor3, floor3, floor3, floor4, floor4, floor4],
        [floor3, floor3, floor3, floor4, floor4, floor4],
        [floor3, floor3, floor3, floor4, floor4, floor4]
    ];

    const furnitureLayout = [
        [null, window, null, null, window, null],
        [null, null, rug, null, bed1, null],
        [null, null, null, null, bed2, null],
        [table, null, null, null, null, table],
        [null, null, plant, null, null, plant],
        [table, null, null, null, null, null]
    ];

    puzzle.loadFloor(floorLayout);
    puzzle.loadFurniture(furnitureLayout);


    //CREAR LOS PERSONAJES
    const axel = new Personaje('Axel', 'img/characters/axel.PNG');
    const bella = new Personaje('Bella', 'img/characters/bella.PNG');
    const cora = new Personaje('Cora', 'img/characters/cora.PNG');
    const douglas = new Personaje('Douglas', 'img/characters/douglas.PNG');
    const ella = new Personaje('Ella', 'img/characters/ella.PNG');

    puzzle.addCharacter(axel);
    puzzle.addCharacter(bella);
    puzzle.addCharacter(cora);
    puzzle.addCharacter(douglas);
    puzzle.addCharacter(ella);

    puzzle.setMurderer(axel);

    //AÑADIR LAS PISTAS
    puzzle.addClue(axel, "Estaba delante de una ventana");
    puzzle.addClue(bella, "Estaba en el salon principal");
    puzzle.addClue(cora, "Estaba sobre la alfombra");
    puzzle.addClue(douglas, "Estaba sobre la cama");
    puzzle.addClue(ella, "Estaba junto a una planta");

    //AÑADIR LOS NOMBRES DE LAS HABITACIONES
    puzzle.addText("SALA", 2, 1);
    puzzle.addText("DORMITORIO", 2, 4);
    puzzle.addText("SALON PRINCIPAL", 5, 1);
    puzzle.addText("COMEDOR", 5, 4);

    return puzzle;
}

export function getPuzzles(){
    return [
        createPuzzle1()
    ];
}