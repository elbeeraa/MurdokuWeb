import Renderer from "./ui/Renderer.js";
import { puzzles } from "./puzzles/index.js";
import Game from "./models/Game.js";
import GameController from "./controllers/GameController.js";

const game = new Game(puzzles);
const renderer = new Renderer(game);
const gameController = new GameController(game, renderer);

gameController.init();