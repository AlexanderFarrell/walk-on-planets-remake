import Unknown from "./WorldSprites/Earth001.png";
import Callisto from './WorldSprites/Callisto001.png';
import Charon from "./WorldSprites/Charon001.png";
import Deimos from "./WorldSprites/Deimos001.png";
import Earth from "./WorldSprites/Earth001.png";
import Europa from "./WorldSprites/Europa001.png";
import Ganymede from "./WorldSprites/Ganymede001.png";
import Hyperion from "./WorldSprites/Hyperion001.png";
import Io from "./WorldSprites/Io001.png";
import Jupiter from "./WorldSprites/Jupiter001.png";
import Mars from "./WorldSprites/Mars001.png";
import Mercury from "./WorldSprites/Mercury001.png";
import Miranda from "./WorldSprites/Miranda002.png";
import Neptune from "./WorldSprites/Neptune002.png";
import Oberon from "./WorldSprites/Oberon001.png";
import Phobos from "./WorldSprites/Phobos001.png";
import Pluto from "./WorldSprites/Pluto001.png";
import Proteus from "./WorldSprites/Proteus002.png";
import Saturn from "./WorldSprites/Saturn002.png";
import Tethys from "./WorldSprites/Tethys001.png";
import Titan from "./WorldSprites/Titan002.png";
import Triton from "./WorldSprites/Triton001.png";
import Uranus from "./WorldSprites/Uranus001.png";
import Venus from "./WorldSprites/Venus001.png";
import Sun from "./WorldSprites/SunSprite.png"

export interface Satellites {
    name: string,
    size: number,
    imageURL: string,
}

export interface Atmosphere {
    pressureAtms: number,
    composition: AtmosphereComponent[]
}

export interface AtmosphereComponent {
    name: string,
    percent: number,
}

export interface World {
    name: string;
    description: string;
    planetSystem?: string;
    surfaceTemp: number;
    imageURL: string;
    satellite: Satellites[];
    terrainColor: [number, number, number],
    skyColor: [number, number, number],
    skyThickness: number,
    terrainRoughness: number,
    terrainAltitude: number,
    gravity: number,
    oceanColor?: [number, number, number, number],
    atmosphere?: Atmosphere
}

export const Worlds: World[] = [
    {
        name: "Moon",
        planetSystem: "Terrestrial",
        surfaceTemp: 250,
        description: "Made entirely of cheese",
        imageURL: Unknown,
        satellite: [
            {
                name: "Earth",
                size: 5,
                imageURL: Unknown
            }
        ],
        terrainColor: [0.7, 0.7, 0.7],
        skyColor: [0, 0, 0],
        skyThickness: 0,
        terrainRoughness: 0.85,
        terrainAltitude: 80,
        gravity: 0.165,
    },
    {
        name: "Callisto",
        planetSystem: "Jovian",
        surfaceTemp: 134,
        description: "Cold, cratered moon",
        imageURL: Callisto,
        satellite: [
            {
                name: "Jupiter",
                size: 50,
                imageURL: Jupiter
            }
        ],
        terrainColor: [0.2, 0.1, 0.0],
        skyColor: [0, 0, 0],
        skyThickness: 0,
        terrainRoughness: 0.85,
        terrainAltitude: 120,
        gravity: 1.235
    },
    {
        name: "Io",
        planetSystem: "Jovian",
        surfaceTemp: 110,
        description: "Very volcanic moon",
        imageURL: Io,
        satellite: [
            {
                name: "Jupiter",
                size: 150,
                imageURL: Jupiter
            },
            {
                name: "Sun",
                size: 50,
                imageURL: Sun
            }
        ],
        terrainColor: [0.7, 0.8, 0.1],
        skyColor: [0, 0, 0],
        skyThickness: 0,
        terrainRoughness: 0.95,
        terrainAltitude: 80,
        gravity: 1.796
    },
    {
        name: "Ceres",
        surfaceTemp: 172.5,
        description: "Large dusty dwarf planet encompassed by asteroids",
        imageURL: Unknown,
        satellite: [
            {
                name: "Sun",
                size: 50,
                imageURL: Sun
            }
        ],
        terrainColor: [0.5, 0.5, 0.5],
        skyColor: [0, 0, 0],
        skyThickness: 0,
        terrainRoughness: 0.75,
        terrainAltitude: 120,
        gravity: 0.284
    },
    {
        name: "Charon",
        planetSystem: "Plutonian",
        surfaceTemp: 53,
        description: "Large gray moon",
        imageURL: Charon,
        satellite: [
            {
                name: "Pluto",
                size: 150,
                imageURL: Pluto
            }
        ],
        terrainColor: [0.5, 0.4, 0.4],
        skyColor: [0, 0, 0],
        skyThickness: 0,
        terrainRoughness: 0.75,
        terrainAltitude: 120,
        gravity: 0.288
    },
    {
        name: "Deimos",
        planetSystem: "Martian",
        surfaceTemp: 233,
        description: "Tiny rock which orbits Mars",
        imageURL: Deimos,
        satellite: [
            {
                name: "Mars",
                size: 150,
                imageURL: Mars
            }
        ],
        terrainColor: [0.5, 0.4, 0.2],
        skyColor: [0, 0, 0],
        skyThickness: 0,
        terrainRoughness: 0.70,
        terrainAltitude: 40,
        gravity: 0.003
    },
    {
        name: "Dysnomia",
        planetSystem: "Eridian",
        surfaceTemp: 42,
        description: "Small eridian moon.",
        imageURL: Unknown,
        satellite: [
            {
                name: "Eris",
                size: 150,
                imageURL: Unknown
            }
        ],
        terrainColor: [0.1, 0.1, 0.1],
        skyColor: [0, 0, 0],
        skyThickness: 0,
        terrainRoughness: 0.70,
        terrainAltitude: 80,
        gravity: 0.07
    },
    {
        name: "Eris",
        planetSystem: "Eridian",
        surfaceTemp: 42,
        description: "Large dwarf planet far from the sun.",
        imageURL: Unknown,
        satellite: [
            {
                name: "Eris",
                size: 150,
                imageURL: Unknown
            }
        ],
        terrainColor: [0.1, 0.1, 0.1],
        skyColor: [0, 0, 0],
        skyThickness: 0,
        terrainRoughness: 0.70,
        terrainAltitude: 80,
        gravity: 0.82
    },
    {
        name: "Europa",
        planetSystem: "Jovian",
        surfaceTemp: 102,
        description: "Icy moon with an inner ocean",
        imageURL: Europa,
        satellite: [
            {
                name: "Jupiter",
                size: 150,
                imageURL: Jupiter
            }
        ],
        terrainColor: [0.8, 0.8, 0.83],
        skyColor: [0, 0, 0.9],
        skyThickness: 0.1,
        terrainRoughness: 0.95,
        terrainAltitude: 200,
        gravity: 1.314
    },
    {
        name: "Ganymede",
        planetSystem: "Jovian",
        surfaceTemp: 110,
        description: "Large ancient moon",
        imageURL: Ganymede,
        satellite: [
            {
                name: "Jupiter",
                size: 150,
                imageURL: Jupiter
            }
        ],
        terrainColor: [0.4, 0.4, 0.4],
        skyColor: [0.1, 0.0, 0.0],
        skyThickness: 0.2,
        terrainRoughness: 0.60,
        terrainAltitude: 240,
        gravity: 1.4819
    },
    {
        name: "Titan",
        planetSystem: "Saturnian",
        surfaceTemp: 93,
        description: "Has methane oceans and lakes",
        imageURL: Titan,
        satellite: [
            // {
                // name: "Saturn",
                // size: 150,
                // imageURL: Saturn
            // }
        ],
        terrainColor: [0.8, 0.7, 0.6],
        skyColor: [0.9, 0.8, 0.7],
        skyThickness: 1.0,
        terrainRoughness: 0.80,
        terrainAltitude: 120,
        gravity: 1.352,
        oceanColor: [0.15, 0.15, 0.05, 0.9],
        atmosphere: {
            pressureAtms: 1.45,
            composition: [
                {
                    name: 'Nitrogen',
                    percent: 98.4
                },
                {
                    name: 'Methane',
                    percent: 1.4
                },
                {
                    name: 'Hydrogen',
                    percent: 0.2
                }
            ]
        }
    },
    {
        name: "Venus",
        description: "Somehow female?",
        imageURL: Venus,
        surfaceTemp: 737,
        satellite: [],
        terrainColor: [0.2, 0.2, 0.0],
        skyColor: [0.3, 0.3, 0.0],
        skyThickness: 1.0,
        terrainRoughness: 0.80,
        terrainAltitude: 80,
        gravity: 8.87,
        oceanColor: [0.4, 0.4, 0.0, 0.8],
        atmosphere: {
            pressureAtms: 93,
            composition: [
                {name: "Carbon Dioxide", percent: 96.5},
                {name: "Nitrogen", percent: 3.5},
                {name: "Sulphur Dioxide", percent: 0.015},
                {name: "Argon", percent: 0.007},
                {name: "Water Vapor", percent: 0.0017},
                {name: "Carbon Monoxide", percent: 0.0017},
                {name: "Helium", percent: 0.0012},
                {name: "Neon", percent: 0.0007},
                {name: "Carbonyl Sulfide", percent: 0},
                {name: "Hydrogen Chloride", percent: 0},
                {name: "Hydrogen Fluoride", percent: 0},
            ]
        }
    },
    {
        name: "Miranda",
        planetSystem: "Uranian",
        surfaceTemp: 60,
        description: "Smallest of Uranus's 5 round moons, features massive canyon like structures (corona)",
        imageURL: Miranda,
        satellite: [
            {
                name: "Uranus",
                size: 150,
                imageURL: Uranus
            }
        ],
        terrainColor: [0.7, 0.7, 0.7],
        skyColor: [0,0,0],
        skyThickness: 0,
        terrainRoughness: 0.60,
        terrainAltitude: 200,
        gravity: 0.076
    },
    {
        name: "Hyperion",
        planetSystem: "Saturnian",
        surfaceTemp: 93,
        description: "Giant asteroidal moon with large methane deposits",
        imageURL: Hyperion,
        satellite: [
            {
                name: "Saturn",
                size: 150,
                imageURL: Saturn
            }
        ],
        terrainColor: [0.7, 0.6, 0.55],
        skyColor: [0,0,0],
        skyThickness: 0,
        terrainRoughness: 0.60,
        terrainAltitude: 200,
        gravity: 0.021
    },
    {
        name: "Mars",
        description: "Contains the tallest volcano in the Solar System",
        imageURL: Mars,
        satellite: [
            {
                name: "Phobos",
                size: 1,
                imageURL: Deimos
            }
        ],
        terrainColor: [0.6, 0.4, 0.1],
        skyColor: [0.8, 0.8, 0.9],
        skyThickness: 0.9,
        terrainRoughness: 0.80,
        terrainAltitude: 100,
        gravity: 3.72076
    },
    {
        name: "Mercury",
        description: "Hot & cold to the extreme",
        imageURL: Mercury,
        satellite: [
            {
                name: "Sun",
                size: 30,
                imageURL: Sun
            }
        ],
        terrainColor: [0.6, 0.5, 0.5],
        skyColor: [0.8, 0.1, 0.1],
        skyThickness: 0.1,
        terrainRoughness: 0.90,
        terrainAltitude: 120,
        gravity: 3.7
    },
    {
        name: "Oberon",
        description: "Exposed to large amounts of solar wind",
        imageURL: Oberon,
        satellite: [
            {
                name: "Uranus",
                size: 150,
                imageURL: Uranus
            }
        ],
        terrainColor: [0.7, 0.5, 0.5],
        skyColor: [0.7, 0.0, 0.0],
        skyThickness: 0.05,
        terrainRoughness: 0.85,
        terrainAltitude: 120,
        gravity: 0.358
    },
    {
        name: "Phobos",
        description: ""
    }
]
