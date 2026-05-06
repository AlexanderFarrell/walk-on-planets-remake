import { Engine } from "engine";
import { Stage } from "engine/app/stage";
import { Color } from "engine/visual/color";
import { Visual } from "engine/visual/visual";
import { Worlds } from "../assets/world_data";
import { WorldManager } from "../play/play";

export class MenuStage extends Stage {
    name(): string {
        return 'Menu'
    }

    on_start(): void {
        Engine.visual.clearColor = new Color(0, 0, 0)

        let ui = Engine.ui.UiContainer;
        ui.innerHTML = `
        <div>
            <h1>Walk on Planets</h1>
            <p>Click on any world to visit. Walk with WASD and mouse. Jump with space. Press o to thrust down (if too little gravity).</p>
            <p>If your mouse is stuck press ESC</p>
        </div>
        <div id="planets"></div>
        <div>
        <button id="fullscreen_btn" title="Toggle Fullscreen">Fullscreen</button>
        </div>
        `

        ui.querySelector('#fullscreen_btn')!.addEventListener('click', () => {
            if (!document.fullscreenElement) document.documentElement.requestFullscreen();
            else document.exitFullscreen();
        });

        let planets_container = ui.querySelector('#planets');

        Worlds.forEach(world => {
            let button = document.createElement('button');
            button.innerHTML = `<img src="${world.imageURL}"><div>${world.name}</div>`
            button.addEventListener('click', () => {
                ui.innerHTML = `<div class="center">Loading ${world.name}...</div>`
                setTimeout(() => {
                    WorldManager.current = world;
                    Engine.app.requestSwitchTo('Play');
                }, 20)
            })
            planets_container?.appendChild(button);
        })
    }

    on_end(): void {
        Engine.ui.clear();
    }
}