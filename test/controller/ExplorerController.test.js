const ExplorersController = require("./../../lib/controllers/ExplorerController");

describe("Testing ExplorerController methods", () =>{
    test("1) Test filterExplorersByMission(mission) work properly", () => {
        const explorersInNode = ExplorersController.filterExplorersByMission("node");

        firstExplorerInNode = {
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
            "stacks": [
              "javascript",
              "reasonML",
              "elm"
            ]
          };
        expect(explorersInNode[0]).toEqual(firstExplorerInNode);
    });

    test("2) Test getExplorersUsernamesByMission(mission) work properly", () => {
      const explorersInNode = ExplorersController.getExplorersUsernamesByMission("node");
      expect(explorersInNode[0]).toBe("ajolonauta1");
    });

    test("3) Test getExplorersAmountByMission(mission) work properly", () => {
      const explorersInNode = ExplorersController.getExplorersAmountByMission("node");
      expect(explorersInNode).toBe(10);
    });
});