import { getAsteroidExitInfo } from "./AsteroidCluster.helpers";

it("create exit path", () => {
  const mockPath = {
    from: {
      left: "100%",
      top: "100%",
      bottom: "Auto",
    },
    to: {
      left: "0",
      top: "30%",
      bottom: "Auto",
    },
  };

  const result = {
    from: {
      left: "0",
      top: "30%",
      bottom: "Auto",
    },
    to: {
      left: "-10%",
      top: "23%",
      bottom: "Auto",
    },
  };
  const side = "right";

  const info = getAsteroidExitInfo(mockPath, side, 3);
  expect(info.path.from).toHaveProperty("left", result.from.left);
  expect(info.path.from).toHaveProperty("top", result.from.top);
  expect(info.path.from).toHaveProperty("bottom", result.from.bottom);
  expect(info.path.to).toHaveProperty("left", result.to.left);
  expect(info.path.to).toHaveProperty("top", result.to.top);
  expect(info.path.to).toHaveProperty("bottom", result.to.bottom);
});
