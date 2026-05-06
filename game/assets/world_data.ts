import Unknown from "./WorldSprites/Earth001.png";
import Callisto from './WorldSprites/Callisto001.png';
import Charon from "./WorldSprites/Charon001.png";
import Deimos from "./WorldSprites/Deimos001.png";
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
import Earth from "./WorldSprites/earth.png"

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
        imageURL: Charon,
        satellite: [
            {
                name: "Earth",
                size: 30,
                imageURL: Earth
            }
        ],
        terrainColor: [0.7, 0.7, 0.7],
        skyColor: [0, 0, 0],
        skyThickness: 0,
        terrainRoughness: 0.85,
        terrainAltitude: 80,
        gravity: 1.622,
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
    // {
    //     name: "Ceres",
    //     surfaceTemp: 172.5,
    //     description: "Large dusty dwarf planet encompassed by asteroids",
    //     imageURL: Unknown,
    //     satellite: [
    //         {
    //             name: "Sun",
    //             size: 50,
    //             imageURL: Sun
    //         }
    //     ],
    //     terrainColor: [0.5, 0.5, 0.5],
    //     skyColor: [0, 0, 0],
    //     skyThickness: 0,
    //     terrainRoughness: 0.75,
    //     terrainAltitude: 120,
    //     gravity: 0.284
    // },
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
    // {
    //     name: "Dysnomia",
    //     planetSystem: "Eridian",
    //     surfaceTemp: 42,
    //     description: "Small eridian moon.",
    //     imageURL: Unknown,
    //     satellite: [
    //         {
    //             name: "Eris",
    //             size: 150,
    //             imageURL: Unknown
    //         }
    //     ],
    //     terrainColor: [0.1, 0.1, 0.1],
    //     skyColor: [0, 0, 0],
    //     skyThickness: 0,
    //     terrainRoughness: 0.70,
    //     terrainAltitude: 80,
    //     gravity: 0.07
    // },
    // {
    //     name: "Eris",
    //     planetSystem: "Eridian",
    //     surfaceTemp: 42,
    //     description: "Large dwarf planet far from the sun.",
    //     imageURL: Unknown,
    //     satellite: [
    //         {
    //             name: "Dysnomia",
    //             size: 100,
    //             imageURL: Unknown
    //         }
    //     ],
    //     terrainColor: [0.75, 0.75, 0.78],
    //     skyColor: [0, 0, 0],
    //     skyThickness: 0,
    //     terrainRoughness: 0.70,
    //     terrainAltitude: 80,
    //     gravity: 0.82
    // },
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
        skyColor: [0, 0, 0],
        skyThickness: 0.0,
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
        skyColor: [0.0, 0.0, 0.0],
        skyThickness: 0.0,
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
        description: "Hellscape",
        imageURL: Venus,
        surfaceTemp: 737,
        satellite: [],
        terrainColor: [0.2, 0.1, 0.0],
        skyColor: [0.24, 0.1, 0.0],
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
        surfaceTemp: 205,
        imageURL: Mars,
        satellite: [
            {
                name: "Phobos",
                size: 10,
                imageURL: Deimos
            },
            {
                name: "Phobos",
                size: 2,
                imageURL: Deimos
            }
        ],
        terrainColor: [0.6, 0.4, 0.1],
        skyColor: [0.8, 0.8, 0.9],
        skyThickness: 0.9,
        terrainRoughness: 0.80,
        terrainAltitude: 100,
        gravity: 3.72076,
        atmosphere: {
            pressureAtms: 0.00628,
            composition: [
                {name: "Carbon Dioxide", percent: 95.97},
                {name: "Argon", percent: 1.93},
                {name: "Nitrogen", percent: 1.89},
                {name: "Oxygen", percent: 0.146},
                {name: "Carbon Monoxide", percent: 0.0557},
                {name: "Water Vapor", percent: 0.0210}
            ]
        }
    },
    {
        name: "Mercury",
        surfaceTemp: 427+273.15,
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
        skyColor: [0.0, 0.0, 0.0],
        skyThickness: 0.0,
        terrainRoughness: 0.90,
        terrainAltitude: 120,
        gravity: 3.7,
        atmosphere: {
            pressureAtms: 0.00001, // Trace,
            composition: [
                {name: "Oxygen", percent: 0},
                {name: "Sodium", percent: 0},
                {name: "Magnesium", percent: 0},
                {name: "Hydrogen", percent: 0},
                {name: "Potassium", percent: 0},
                {name: "Calcium", percent: 0},
                {name: "Helium", percent: 0}
            ]
        }
    },
    {
        name: "Oberon",
        surfaceTemp: 75,
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
        description: "Small martian moon",
        surfaceTemp: 233,
        imageURL: Phobos,
        satellite: [
            {
                name: "Mars",
                size: 200,
                imageURL: Mars
            }
        ],
        terrainColor: [0.7, 0.5, 0.5],
        skyColor: [0,0,0],
        skyThickness: 0,
        terrainRoughness: 0.70,
        terrainAltitude: 120,
        gravity: 0.0057
    },
    {
        name: "Pluto",
        description: "Is still a planet...",
        surfaceTemp: 44,
        imageURL: Pluto,
        satellite: [
            {
                name: "Charon",
                size: 200,
                imageURL: Charon
            }
        ],
        terrainColor: [0.8, 0.5, 0.5],
        skyColor: [0.15,0.12,0.10],
        skyThickness: 0.08,
        terrainRoughness: 0.95,
        terrainAltitude: 150,
        gravity: 0.620,
        atmosphere: {
            pressureAtms: 0.0000099,
            composition: [
                {name: "Nitrogen", percent: 0},
                {name: "Methane", percent: 0},
                {name: "Carbon Monoxide", percent: 0}
            ]
        }
    },
    {
        name: "Proteus",
        description: "One side smooth, other side cratered",
        planetSystem: "Neptunian",
        surfaceTemp: 51,
        imageURL: Proteus,
        satellite: [
            {
                name: "Neptune",
                size: 200,
                imageURL: Neptune
            }
        ],
        terrainColor: [0.12, 0.12, 0.1],
        terrainAltitude: 250,
        terrainRoughness: 0.75,
        gravity: 0.023,
        skyColor: [0,0,0],
        skyThickness: 0
    },
    {
        name: "Tethys",
        description: "Large ball of ice covered in dust",
        planetSystem: "Saturnian",
        surfaceTemp: 86,
        imageURL: Tethys,
        satellite: [
            {
                name: "Saturn",
                size: 200,
                imageURL: Saturn
            }
        ],
        terrainColor: [0.92, 0.92, 0.84],
        terrainAltitude: 150,
        terrainRoughness: 0.90,
        gravity: 0.146,
        skyColor: [0,0,0],
        skyThickness: 0
    },
    {
        name: "Triton",
        imageURL: Triton,
        description: "Very dramatic moon",
        planetSystem: "Neptunian",
        surfaceTemp: 38,
        satellite: [
            {
                name: "Neptune",
                size: 200,
                imageURL: Neptune
            }
        ],
        terrainColor: [0.82, 0.72, 0.69],
        terrainAltitude: 150,
        terrainRoughness: 0.90,
        gravity: 0.779,
        skyColor: [1,1,1],
        skyThickness: 0.2,
        atmosphere: {
            pressureAtms: 0.0000138,
            composition: [
                {name: "Nitrogen", percent: 0},
                {name: "Methane", percent: 0},
                {name: "Carbon Monoxide", percent: 0}
            ]
        }
    }
]
