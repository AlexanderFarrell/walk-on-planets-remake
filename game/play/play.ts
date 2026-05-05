import { Engine } from "engine";
import { Stage } from "engine/app/stage";
import { Location } from "engine/components/location";
import { Color } from "engine/visual/color";
import type { Atmosphere, World } from "../assets/world_data";
import {Terrain} from "engine/components/terrain";
import { diamondSquare } from "engine/procedural/array2d_procedural";
import { FirstPersonMove } from "engine/components/first_person_move";
import { PauseHandler } from "engine/components/pause_handler";
import { Component } from "engine/world/entity";
import type { Updatable } from "engine/world/world";
import { Skybox } from "engine/components/skybox";
import { Satellite } from "engine/components/satellite";
import { Texture } from "engine/visual/texture";
import { Ocean } from "engine/components/ocean";

export class WorldManager {
    public static current: World;
}

export class PlayStage extends Stage {
    name(): string {
        return 'Play'
    }
    on_start(): void {
        Engine.visual.clearColor = new Color(0, 0, 0);

        let terrain = Engine.world.makeEntity(
            new Location(),
            new Terrain(1025, 1025)
        ).get(Terrain)!;
        terrain.cellSize = 4;
        for (let y = 0; y < terrain.heightMap.height; y++) {
            for (let x = 0; x < terrain.heightMap.width; x++) {
                terrain.colorMap.set(new Color(
                    WorldManager.current.terrainColor[0],
                    WorldManager.current.terrainColor[1],
                    WorldManager.current.terrainColor[2],
                ), x, y)
            }
        }
        diamondSquare(terrain.heightMap, 
            WorldManager.current.terrainRoughness,
            WorldManager.current.terrainAltitude
        );
        terrain.updateMesh();

        let player = Engine.world.makeEntity(
            new Location([2048, 30, 2048]),
            new FirstPersonMove()
        );
        let playerLoc = player.get(Location);
        playerLoc!.Y = terrain.get_height_bilinear(playerLoc!.X, playerLoc!.Z) + 12;
        player.get(FirstPersonMove)!.jumpSpeed = 3;

        let pause = Engine.world.makeEntity(
            new PauseHandler(),
        );

        Engine.physics.gravity = [0, -WorldManager.current.gravity, 0]
        Engine.physics.world.gravity = {
            x: Engine.physics.gravity[0], 
            y: Engine.physics.gravity[1], 
            z: Engine.physics.gravity[2], 
        };

        Engine.world.makeEntity(
            new AirTimeTracker(player.get(FirstPersonMove)!)
        )
        
        const skybox = new Skybox();
        skybox.atmosphereColor = new Color(
            WorldManager.current.skyColor[0],
            WorldManager.current.skyColor[1],
            WorldManager.current.skyColor[2]
        );
        skybox.atmosphereThickness = WorldManager.current.skyThickness;

        Engine.world.makeEntity(
            skybox
        );

        WorldManager.current.satellite.forEach(s => {
            let texture = Texture.fromURL(s.imageURL);
            let location = new Location(makeSatelliteOffset())
            location.scale = [s.size, s.size, s.size]
            Engine.world.makeEntity(
                location,
                new Satellite(texture)
            )
        })

        if (WorldManager.current.oceanColor != null) {
            let ocean = new Ocean();
            ocean.color = new Color(
                WorldManager.current.oceanColor![0],
                WorldManager.current.oceanColor![1],
                WorldManager.current.oceanColor![2],
                WorldManager.current.oceanColor![3],
            )
            Engine.world.makeEntity(ocean);
        }
    }
    on_end(): void {
        Engine.ui.clear();
    }
}

function makeSatelliteOffset(): [number, number, number] {
    const x = randomSignedDistance(160, 240);
    const y = randomDistance(80, 140);
    const z = randomSignedDistance(160, 240);
    return [x, y, z];
}

function randomDistance(min: number, max: number): number {
    return min + Math.random() * (max - min);
}

function randomSignedDistance(min: number, max: number): number {
    const distance = randomDistance(min, max);
    return Math.random() < 0.5 ? -distance : distance;
}

class AirTimeTracker extends Component implements Updatable {
    private step = 0;
    private stepsToUpdate = 50;
    private parentContainer: HTMLElement | null = null;
    private titleContainer: HTMLElement | null = null;
    private playerContainer: HTMLElement | null = null;
    private worldContainer: HTMLElement | null = null;
    private player: FirstPersonMove;
    private _playerLoc: Location;

    public constructor(player: FirstPersonMove) {
        super();
        this.player = player;
        this._playerLoc = this.player.entity!.get(Location)!;
    }

    onStart(): void {
        Engine.world.updatables.add(this);

        this.parentContainer = document.createElement('div');  
        this.parentContainer.id = "parentContainer";
        Engine.ui.UiContainer.appendChild(
            this.parentContainer
        );
        this.parentContainer.innerHTML = `
            <div id="titleContainer"></div>
            <div class="row">
                <div id="playerContainer"></div>
                <div id="worldContainer"></div>
            </div>
        `

        this.titleContainer = this.parentContainer.querySelector('#titleContainer');
        this.titleContainer!.innerText = WorldManager.current.name;

        this.worldContainer = this.parentContainer.querySelector('#worldContainer')
        this.worldContainer!.innerHTML = `
        ${((WorldManager.current.planetSystem) != null) ?
            `<div>Planet System: ${WorldManager.current.planetSystem}</div>` :
            ''
        }
        <div>Description: ${WorldManager.current.planetSystem}</div>
        <div>Temperature: ${displayTemp(WorldManager.current.surfaceTemp)}</div>
        <div>Gravity:     ${Engine.physics.gravity[1]} m/s</div>
        <div>${atmosphereToString(WorldManager.current.atmosphere)}</div>
        `

        this.playerContainer = this.parentContainer.querySelector("#playerContainer");
    }

    onEnd(): void {
        Engine.world.updatables.delete(this);        
        this.parentContainer?.remove();
    }

    onUpdate(): void {
        this.step++;
        if (this.stepsToUpdate <= this.step) {
            this.step = 0;
            this.playerContainer!.innerHTML = `
            <div>Air Time: ${this.player.airtime.toFixed(1)} s</div>
            <div>X: ${this._playerLoc.X.toFixed(1)}</div>
            <div>Y: ${this._playerLoc.Y.toFixed(1)}</div>
            <div>Z: ${this._playerLoc.Z.toFixed(1)}</div>
            `
        }
        // this.step++;
        // if (this.stepsToUpdate <= this.step) {
        //     this.step = 0;
        //     let seconds = this.player.airtime;
        //     this.container!.innerHTML = `Air Time: ${seconds.toFixed(2)}s <br>X: ${this._playerLoc.X.toFixed(1)}` +
        //     `<br>Y: ${this._playerLoc.Y.toFixed(1)}<br>Z: ${this._playerLoc.Z.toFixed(1)}` +
        //     `<br>World: ${WorldManager.current.name}` +
        //     ((WorldManager.current.planetSystem != null) ? 
        //         `<br>Planet System: ${WorldManager.current.planetSystem}` : "") +
        //     `<br>Description: ${WorldManager.current.description}` +
        //     `<br>${displayTemp(WorldManager.current.surfaceTemp, "Surface Temp:")}` +
        //     `<br>Gravity: ${Engine.physics.gravity[1]} m/s` +
        //     `<br>${atmosphereToString(WorldManager.current.atmosphere)}`
        //      ;
        // }
    }
}

function displayTemp(kelvin: number) {
    let celsius = kelvin - 273.15;
    let fahrenheit = (celsius * 9/5) + 32;
    return `${kelvin.toFixed(0)} K  |  ${celsius.toFixed(0)} C  |  ${fahrenheit.toFixed(0)} F`
}

function atmosphereToString(atmosphere: Atmosphere | undefined) {
    if (atmosphere == null) {
        return ""
    }

    return `Atmosphere: ${atmosphere!.pressureAtms} ATMs (Earth's Atmospheric Pressure at Sea Level)<br>
    ${atmosphere!.composition.map(c => {
        return `${c.percent.toFixed(1)}% ${c.name}`
    }).join('<br>')}
    `
}