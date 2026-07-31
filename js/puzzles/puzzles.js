import Puzzle from "../models/Puzzle.js";
import Floor from "../models/Floor.js";
import Furniture from "../models/Furniture.js";
import Personaje from "../models/Character.js";

export function puzzle_0(){
    //CREACION DEL TAMAÑO DEL PUZZLE
    const puzzle = new Puzzle(6, 6, "1. Tu primer caso");

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

export function puzzle_1(){
    //CREACION DEL TAMAÑO DEL PUZZLE
    const puzzle = new Puzzle(6, 6, "2. Alquiler vacacional");

    //CREAR LOS TIPOS DE SUELO
    const floor1 = new Floor('FLOOR-BLUE', 'img/floors/floor-1-blue.PNG');
    const floor2 = new Floor('FLOOR-PURPLE', 'img/floors/floor-2-purple.PNG');
    const floor3 = new Floor('FLOOR-YELLOW', 'img/floors/floor-2-yellow.PNG');
    const floor4 = new Floor('FLOOR-PURPLE2', 'img/floors/floor-3-purple.PNG');

    //CREAR LOS TIPOS DE MUEBLES
    //TRUE SI SE PUEDE COLOCAR PERSONAJE
    const part1_bed = new Furniture('bed1', 'img/furniture/bed-up2.PNG', true);
    const part1_bed_1 = new Furniture('bed2', 'img/furniture/bed-down2-pink.PNG', true);
    const part2_bed_2 = new Furniture('bed3', 'img/furniture/bed-down2-yellow.PNG', true);
    const table = new Furniture('table', 'img/furniture/table-alone.PNG', false);
    const plant = new Furniture('plant', 'img/furniture/plant.PNG', false);
    const tv = new Furniture('tv', 'img/furniture/tv.PNG', false);
    const sofa = new Furniture('sofa', 'img/furniture/sofa-green.PNG', true);

    const floorLayout = [
        [floor2, floor2, floor1, floor1, floor4, floor4],
        [floor2, floor2, floor1, floor1, floor4, floor4],
        [floor2, floor2, floor1, floor1, floor4, floor4],
        [floor2, floor2, floor1, floor1, floor4, floor4],
        [floor3, floor3, floor3, floor3, floor3, floor3],
        [floor3, floor3, floor3, floor3, floor3, floor3]
    ];

    const furnitureLayout = [
        [null, null, table, null, tv, null],
        [sofa, null, null, null, null, plant],
        [part1_bed, part1_bed_1, null, null, part1_bed, part2_bed_2],
        [null, null, null, null, null, null],
        [plant, null, null, null, null, null],
        [tv, null, null, table, null, null]
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

    puzzle.setMurderer(douglas);

    //AÑADIR LAS PISTAS
    puzzle.addClue(axel, "Estaba sentado en la silla");
    puzzle.addClue(bella, "Estaba en el baño");
    puzzle.addClue(cora, "Estaba junto a una planta y sobre una cama");
    puzzle.addClue(douglas, "Estaba junto a una tv");
    puzzle.addClue(ella, "Estaba junto a una cama");

    //AÑADIR LOS NOMBRES DE LAS HABITACIONES
    puzzle.addText("DORMITORIO", 3, 0);
    puzzle.addText("BAÑO", 3, 2);
    puzzle.addText("CUARTO DE INVITADOS", 3, 5);
    puzzle.addText("SALÓN", 5, 2);

    return puzzle;
}

export function puzzle_2(){
    //CREACION DEL TAMAÑO DEL PUZZLE
    const puzzle = new Puzzle(6, 6, "3. El desayuno inglés");

    //CREAR LOS TIPOS DE SUELO
    const floor1 = new Floor('FLOOR-BLUE', 'img/floors/floor-1-blue.PNG');
    const floor2 = new Floor('FLOOR-PURPLE', 'img/floors/floor-2-purple.PNG');
    const floor3 = new Floor('FLOOR-YELLOW', 'img/floors/floor-2-yellow.PNG');
    const floor4 = new Floor('FLOOR-PURPLE2', 'img/floors/floor-3-purple.PNG');
    const floor5 = new Floor('FLOOR-BLUE2', 'img/floors/floor-3-blue.PNG');

    //CREAR LOS TIPOS DE MUEBLES
    //TRUE SI SE PUEDE COLOCAR PERSONAJE
    const part1_bed_up = new Furniture('bed1', 'img/furniture/bed-up1.PNG', true);
    const part2_bed_up = new Furniture('bed2', 'img/furniture/bed-down1-yellow.PNG', true);

    const part1_bed_down = new Furniture('bed3', 'img/furniture/bed-up2.PNG', true);
    const part2_bed_down = new Furniture('bed4', 'img/furniture/bed-down2-yellow.PNG', true);

    const table = new Furniture('table', 'img/furniture/table-alone.PNG', false);
    const table_part1 = new Furniture('table2', 'img/furniture/table-left.PNG', false);
    const table_part2 = new Furniture('table3', 'img/furniture/table-right.PNG', false);
    const plant = new Furniture('plant', 'img/furniture/plant.PNG', false);
    const tv = new Furniture('tv', 'img/furniture/tv.PNG', false);
    const sofa = new Furniture('sofa', 'img/furniture/sofa-purple.PNG', true);
    const rug = new Furniture('rug', 'img/furniture/rug-purple.PNG', true);
    const rug_part1 = new Furniture('rug2', 'img/furniture/rug-up-green.PNG', true);
    const rug_part2 = new Furniture('rug3', 'img/furniture/rug-down-green.PNG', true);
    const window = new Furniture('window', 'img/furniture/window-right.PNG', true);

    const floorLayout = [
        [floor5, floor2, floor2, floor2, floor3, floor3],
        [floor5, floor2, floor2, floor2, floor3, floor3],
        [floor5, floor1, floor1, floor1, floor3, floor3],
        [floor5, floor1, floor1, floor1, floor4, floor4],
        [floor5, floor5, floor4, floor4, floor4, floor4],
        [floor5, floor5, floor4, floor4, floor4, floor4]
    ];

    const furnitureLayout = [
        [part1_bed_up, null, null, null, table_part1, table_part2],
        [part2_bed_up, null, null, sofa, null, null],
        [rug_part1, null, null, table, plant, null],
        [rug_part2, part1_bed_down, part2_bed_down, rug, plant, window],
        [null, null, sofa, null, null, null],
        [null, null, tv, null, null, null]
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

    puzzle.setMurderer(bella);

    //AÑADIR LAS PISTAS
    puzzle.addClue(bella, "Estaba sobre una cama");
    puzzle.addClue(axel, "Estaba en la cocina");
    puzzle.addClue(cora, "Estaba junto a una mesa");
    puzzle.addClue(douglas, "Estaba junto a la TV");
    puzzle.addClue(ella, "Estaba delante de la ventana");

    //AÑADIR LOS NOMBRES DE LAS HABITACIONES
    puzzle.addText("CUARTO DE INVITADOS", 5, 0);
    puzzle.addText("BAÑO", 1, 2);
    puzzle.addText("DORMITORIO", 3, 2);
    puzzle.addText("SALÓN", 5, 3);
    puzzle.addText("COCINA", 2, 4);

    return puzzle;
}

export function getPuzzles(){
    return [
        puzzle_0(),
        puzzle_1(),
        puzzle_2()
    ];
}

