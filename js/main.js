import Renderer from "./ui/Renderer.js";
import { puzzles }  from "./puzzles/index.js";
import Game from "./models/Game.js";


const game = new Game(puzzles);

const renderer = new Renderer(game);

renderer.render();