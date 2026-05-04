import type { Stage } from "engine/app/stage";
import { PlayStage } from "./play/play";
import { MenuStage } from "./menu/menu";
import { Engine } from "engine";
import "./assets/style.css";

let stages: Stage[] = [
    new PlayStage(),
    new MenuStage()
];

Engine.start(stages, 'Menu');