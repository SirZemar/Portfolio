import { AsteroidsModel } from "@models";
import { AsteroidState } from "../Asteroid";

const asteroidsMock: any[] = [
  {
    id: "1",
    path: {
      from: {
        left: "100%",
        top: "Auto",
        bottom: "40%",
      },
      to: {
        left: "0",
        bottom: "10%",
        top: "Auto",
      },
    },
    delay: 0,
    rotationSpeed: 2,
    pathSpeed: 10,
    rockType: 1,
    state: AsteroidState.IDLE,
    impactRoute: true,
    exitAsteroid: {
      path: {
        from: {
          left: "0",
          bottom: "10%",
          top: "Auto",
        },
        to: {
          left: "-10%",
          bottom: "7%",
          top: "Auto",
        },
      },
      speed: 0,
    },
  },
  {
    id: "2",
    path: {
      from: {
        left: "100%",
        top: "Auto",
        bottom: "70%",
      },
      to: {
        left: "0",
        bottom: "90%",
        top: "Auto",
      },
    },
    delay: 2,
    rotationSpeed: 1,
    pathSpeed: 2,
    rockType: 4,
    state: AsteroidState.IDLE,
    impactRoute: false,
    exitAsteroid: {
      path: {
        from: {
          left: "0",
          bottom: "90%",
          top: "Auto",
        },
        to: {
          left: "-10%",
          bottom: "93%",
          top: "Auto",
        },
      },
      speed: 0,
    },
  },
];

export { asteroidsMock };
