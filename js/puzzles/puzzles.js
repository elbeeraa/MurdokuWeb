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
    const bed1 = new Furniture('bed1', 'img/furniture/bed1.PNG');
    const bed2 = new Furniture('bed2', 'img/furniture/bed2.PNG');
    const table = new Furniture('table', 'img/furniture/table-alone.PNG');
    const plant = new Furniture('plant', 'img/furniture/plant.PNG');
    const rug = new Furniture('rug', 'img/furniture/rug-green.PNG');

    const floorLayout = [
        [floor1, floor1, floor1, floor2, floor2, floor2],
        [floor1, floor1, floor1, floor2, floor2, floor2],
        [floor1, floor1, floor1, floor2, floor2, floor2],
        [floor3, floor3, floor3, floor4, floor4, floor4],
        [floor3, floor3, floor3, floor4, floor4, floor4],
        [floor3, floor3, floor3, floor4, floor4, floor4]
    ];

    const furnitureLayout = [
        [null, null, null, null, null, null],
        [null, null, rug, null, bed1, null],
        [null, null, null, null, bed2, null],
        [table, null, null, null, null, table],
        [null, null, plant, null, null, plant],
        [table, null, null, null, null, null]
    ];

    puzzle.loadFloor(floorLayout);
    puzzle.loadFurniture(furnitureLayout);


    //CREAR LOS PERSONAJES
    const axel = new Personaje('Axel', 'img/characters/axel.png');
    const bella = new Personaje('Bella', 'img/characters/bella.png');
    const cora = new Personaje('Cora', 'img/characters/cora.png');
    const douglas = new Personaje('Doug', 'img/characters/douglas.png');
    const ella = new Personaje('Ella', 'img/characters/ella.png');

    puzzle.setMurderer(axel);

    //AÑADIR LAS PISTAS
    puzzle.addClue(axel, "I was in front of a window.");
    puzzle.addClue(bella, "I was in the living room.");
    puzzle.addClue(cora, "I was over the rug.");
    puzzle.addClue(douglas, "I was on the bed");
    puzzle.addClue(ella, "I was in front of a plant.");

    return puzzle;
}

export function getPuzzles(){
    return [
        createPuzzle1()
    ];
}